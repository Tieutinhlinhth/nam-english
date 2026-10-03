import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeft, Plus, Pencil, Trash2, Save, Upload, Download,
  FileSpreadsheet, FileText, FileJson, FileType, X, AlertCircle,
  CheckCircle2, Loader2, Search, ChevronRight
} from 'lucide-react'
import { useContent, setContent as setStoreContent, publishContentToSupabase } from './contentStore'
import { DEFAULT_CONTENT } from './data'
import { CEFR_LEVELS } from './config'

const TABS = [
  { id: 'listening', label: 'Listening', emoji: '🎧' },
  { id: 'speaking',  label: 'Speaking',  emoji: '🎤' },
  { id: 'reading',   label: 'Reading',   emoji: '📖' },
  { id: 'writing',   label: 'Writing',   emoji: '✍️' }
]

// ============================================================
// Helpers
// ============================================================
const makeId = (prefix) => {
  const t = Date.now().toString(36).slice(-4).toUpperCase()
  const r = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `${prefix}${t}${r}`
}
const idPrefix = { listening: 'L', speaking: 'S', reading: 'R', writing: 'W' }

const emptyItem = (skill) => {
  const base = { id: makeId(idPrefix[skill]), cefr: 'A1', title: '' }
  if (skill === 'listening') return { ...base, accent: 'en-US', rate: 0.95, script: '', dictation: '', questions: [] }
  if (skill === 'speaking')  return { ...base, prompt: '', target: '', keywords: [] }
  if (skill === 'reading')   return { ...base, passage: '', questions: [] }
  if (skill === 'writing')   return { ...base, prompt: '', minWords: 60, keywords: [], sample: '' }
  return base
}

const emptyQuestion = () => ({ q: '', choices: ['', '', '', ''], answer: 0 })

// ---- CSV ----
const parseCSV = (text) => {
  const rows = []
  let row = [], cell = '', inQ = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQ) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++ }
      else if (c === '"') inQ = false
      else cell += c
    } else {
      if (c === '"') inQ = true
      else if (c === ',') { row.push(cell); cell = '' }
      else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = '' }
      else if (c !== '\r') cell += c
    }
  }
  if (cell || row.length) { row.push(cell); rows.push(row) }
  return rows.filter(r => r.some(x => String(x).trim() !== ''))
}
const csvToObjects = (rows) => {
  if (rows.length < 2) return []
  const h = rows[0].map(x => String(x).trim())
  return rows.slice(1).map(r => Object.fromEntries(h.map((k, i) => [k, String(r[i] ?? '').trim()])))
}
const parseQuestions = (s) => {
  if (!s) return []
  return s.split(';').filter(Boolean).map(q => {
    const p = q.split('|').map(x => x.trim())
    if (p.length < 6) return null
    return { q: p[0], choices: [p[1], p[2], p[3], p[4]], answer: Math.max(0, Math.min(3, parseInt(p[5], 10) || 0)) }
  }).filter(Boolean)
}

const objsToItems = (objs, skill) => objs.map((o, i) => {
  const base = { id: o.id || makeId(idPrefix[skill]), cefr: (o.cefr || 'A1').toUpperCase(), title: o.title || `Bài ${i + 1}` }
  if (skill === 'listening') return { ...base, accent: o.accent || 'en-US', rate: parseFloat(o.rate) || 0.95, script: o.script || '', dictation: o.dictation || '', questions: parseQuestions(o.questions) }
  if (skill === 'speaking')  return { ...base, prompt: o.prompt || '', target: o.target || '', keywords: (o.keywords || '').split(/[|,]/).map(k => k.trim()).filter(Boolean) }
  if (skill === 'reading')   return { ...base, passage: o.passage || '', questions: parseQuestions(o.questions) }
  if (skill === 'writing')   return { ...base, prompt: o.prompt || '', minWords: parseInt(o.minWords, 10) || 60, keywords: (o.keywords || '').split(/[|,]/).map(k => k.trim()).filter(Boolean), sample: o.sample || '' }
  return base
})

// ---- Word ----
const parseWordText = (text, skill) => {
  // Định dạng gợi ý: mỗi bài cách nhau bằng dòng "---"
  const blocks = text.split(/\n\s*-{3,}\s*\n/).map(b => b.trim()).filter(Boolean)
  return blocks.map((block, i) => {
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean)
    const meta = {}
    let bodyStart = 0
    for (let j = 0; j < lines.length; j++) {
      const m = lines[j].match(/^([^:]+):\s*(.+)$/)
      if (m && ['title', 'cefr', 'level', 'tiêu đề', 'cấp độ'].includes(m[1].toLowerCase())) {
        meta[m[1].toLowerCase()] = m[2]
        bodyStart = j + 1
      } else break
    }
    const body = lines.slice(bodyStart).join('\n')
    const base = {
      id: makeId(idPrefix[skill]),
      cefr: (meta.cefr || meta['cấp độ'] || 'A1').toUpperCase(),
      title: meta.title || meta['tiêu đề'] || `Bài ${i + 1}`
    }
    if (skill === 'listening') return { ...base, accent: 'en-US', rate: 0.95, script: body, dictation: body.split('\n')[0] || '', questions: [] }
    if (skill === 'speaking')  return { ...base, prompt: '', target: body, keywords: [] }
    if (skill === 'reading')   return { ...base, passage: body, questions: [] }
    if (skill === 'writing')   return { ...base, prompt: '', minWords: 60, keywords: [], sample: body }
    return base
  })
}

// ---- File router ----
const parseFile = async (file, skill) => {
  const ext = file.name.toLowerCase().split('.').pop()

  if (ext === 'xlsx' || ext === 'xls') {
    let XLSX
    try { XLSX = await import('xlsx') } catch { throw new Error('Chưa cài thư viện xlsx. Chạy: npm install xlsx mammoth') }
    const buf = await file.arrayBuffer()
    const wb = XLSX.read(buf, { type: 'array' })
    const ws = wb.Sheets[wb.SheetNames[0]]
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })
    const objs = csvToObjects(rows.map(r => r.map(c => String(c ?? ''))))
    return objsToItems(objs, skill)
  }

  if (ext === 'docx') {
    let mammoth
    try { mammoth = await import('mammoth/mammoth.browser') } catch { throw new Error('Chưa cài thư viện mammoth. Chạy: npm install xlsx mammoth') }
    const buf = await file.arrayBuffer()
    const res = await mammoth.extractRawText({ arrayBuffer: buf })
    return parseWordText(res.value, skill)
  }

  const text = await file.text()

  if (ext === 'json') {
    const data = JSON.parse(text)
    const arr = Array.isArray(data) ? data : data[skill]
    if (!Array.isArray(arr)) throw new Error(`JSON phải là mảng hoặc object chứa key "${skill}"`)
    return arr.map(it => ({ ...it, cefr: (it.cefr || 'A1').toUpperCase() }))
  }
  if (ext === 'csv') {
    const objs = csvToObjects(parseCSV(text))
    return objsToItems(objs, skill)
  }
  if (ext === 'txt') {
    return text.split('\n').map(l => l.trim()).filter(Boolean).map((line, i) => ({
      id: makeId('TXT'), cefr: 'A1', title: `Câu ${i + 1}`,
      accent: 'en-US', rate: 0.9, script: line, dictation: line, questions: []
    }))
  }
  throw new Error(`Định dạng .${ext} chưa hỗ trợ. Dùng .xlsx, .csv, .docx, .txt hoặc .json`)
}

// ---- Export ----
const downloadBlob = (content, filename, mime = 'text/plain') => {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = filename; a.click()
  URL.revokeObjectURL(url)
}
const toCSV = (items, skill) => {
  const esc = (s) => `"${String(s ?? '').replace(/"/g, '""')}"`
  const qToStr = (qs) => (qs || []).map(q => [q.q, ...q.choices, q.answer].join('|')).join(';')
  if (skill === 'listening') {
    const header = 'id,cefr,title,accent,rate,script,dictation,questions'
    const rows = items.map(it => [it.id, it.cefr, it.title, it.accent, it.rate, it.script, it.dictation, qToStr(it.questions)].map(esc).join(','))
    return '\uFEFF' + [header, ...rows].join('\n')
  }
  if (skill === 'speaking') {
    const header = 'id,cefr,title,prompt,target,keywords'
    const rows = items.map(it => [it.id, it.cefr, it.title, it.prompt, it.target, (it.keywords || []).join('|')].map(esc).join(','))
    return '\uFEFF' + [header, ...rows].join('\n')
  }
  if (skill === 'reading') {
    const header = 'id,cefr,title,passage,questions'
    const rows = items.map(it => [it.id, it.cefr, it.title, it.passage, qToStr(it.questions)].map(esc).join(','))
    return '\uFEFF' + [header, ...rows].join('\n')
  }
  if (skill === 'writing') {
    const header = 'id,cefr,title,prompt,minWords,keywords,sample'
    const rows = items.map(it => [it.id, it.cefr, it.title, it.prompt, it.minWords, (it.keywords || []).join('|'), it.sample].map(esc).join(','))
    return '\uFEFF' + [header, ...rows].join('\n')
  }
  return ''
}

// ============================================================
// Main
// ============================================================
export default function AdminPanel({ user, supabase, onBack }) {
  const content = useContent()
  const [tab, setTab] = useState('listening')
  const [items, setItems] = useState(content[tab] || [])
  const [editing, setEditing] = useState(null)
  const [importOpen, setImportOpen] = useState(false)
  const [status, setStatus] = useState(null)
  const [busy, setBusy] = useState(false)
  const [search, setSearch] = useState('')
  const [filterCefr, setFilterCefr] = useState('all')

  useEffect(() => { setItems(content[tab] || []); setSearch(''); setFilterCefr('all') }, [tab, content])

  const dirty = useMemo(() => JSON.stringify(items) !== JSON.stringify(content[tab] || []), [items, content, tab])
  const filtered = useMemo(() => {
    let r = items
    if (filterCefr !== 'all') r = r.filter(it => it.cefr === filterCefr)
    if (search.trim()) {
      const q = search.toLowerCase()
      r = r.filter(it => (it.title || '').toLowerCase().includes(q) || (it.id || '').toLowerCase().includes(q))
    }
    return r
  }, [items, search, filterCefr])

  const addNew = () => setEditing({ mode: 'create', item: emptyItem(tab) })
  const editItem = (item) => setEditing({ mode: 'edit', item: { ...item } })
  const deleteItem = (id) => {
    if (!confirm(`Xoá bài "${items.find(i => i.id === id)?.title || id}"?`)) return
    setItems(items.filter(it => it.id !== id))
    setStatus({ type: 'ok', msg: 'Đã xoá khỏi draft. Nhấn "Lưu & Publish" để áp dụng.' })
  }
  const saveItem = (updated) => {
    setItems(prev => {
      const idx = prev.findIndex(it => it.id === updated.id)
      if (idx === -1) return [...prev, updated]
      const next = [...prev]; next[idx] = updated; return next
    })
    setEditing(null)
    setStatus({ type: 'ok', msg: 'Đã lưu vào draft. Nhấn "Lưu & Publish" để áp dụng cho mọi người.' })
  }

  const publish = async () => {
    setBusy(true); setStatus(null)
    try {
      const nextContent = { ...content, [tab]: items }
      await publishContentToSupabase(supabase, user, nextContent)
      setStoreContent(nextContent)
      setStatus({ type: 'ok', msg: `Đã publish ${items.length} bài "${tab}". Tất cả người dùng sẽ thấy sau khi F5.` })
    } catch (err) {
      setStatus({ type: 'error', msg: 'Không publish được: ' + err.message })
    } finally { setBusy(false) }
  }

  const handleImport = async (file) => {
    setBusy(true); setStatus(null)
    try {
      const parsed = await parseFile(file, tab)
      if (!parsed.length) throw new Error('File không có bài nào')
      const mode = confirm(`Tìm thấy ${parsed.length} bài trong file.\n\nBấm OK để THAY THẾ toàn bộ ${items.length} bài hiện tại.\nBấm Cancel để NỐI THÊM vào danh sách.`)
      setItems(mode ? parsed : [...items, ...parsed])
      setImportOpen(false)
      setStatus({ type: 'ok', msg: `Đã nạp ${parsed.length} bài từ "${file.name}". Nhấn "Lưu & Publish" để áp dụng.` })
    } catch (err) {
      setStatus({ type: 'error', msg: err.message })
    } finally { setBusy(false) }
  }

  const handleExport = (fmt) => {
    if (fmt === 'json') downloadBlob(JSON.stringify(items, null, 2), `nam-english-${tab}.json`, 'application/json')
    else downloadBlob(toCSV(items, tab), `nam-english-${tab}.csv`, 'text/csv')
  }

  const reset = async () => {
    if (!confirm('Reset TOÀN BỘ nội dung về bản gốc? Mọi chỉnh sửa sẽ mất.')) return
    setBusy(true); setStatus(null)
    try {
      await publishContentToSupabase(supabase, user, DEFAULT_CONTENT)
      setStoreContent(DEFAULT_CONTENT)
      setStatus({ type: 'ok', msg: 'Đã reset về nội dung gốc.' })
    } catch (err) { setStatus({ type: 'error', msg: err.message }) }
    finally { setBusy(false) }
  }

  const total = Object.values(content).reduce((s, a) => s + (a?.length || 0), 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" /> Về trang chủ
        </button>
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
          Superadmin
        </span>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 p-6 text-white shadow-lg md:p-8">
        <h1 className="text-2xl font-black md:text-3xl">Quản lý nội dung</h1>
        <p className="mt-1 text-slate-300">Thêm, sửa, xoá bài trực tiếp. Import từ Excel, Word, CSV hoặc TXT.</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-white/10 px-3 py-1">👤 {user?.email}</span>
          <span className="rounded-full bg-white/10 px-3 py-1">Tổng: {total} bài</span>
          {dirty && <span className="rounded-full bg-amber-400/20 px-3 py-1 text-amber-200">⚠️ Có thay đổi chưa lưu</span>}
        </div>
      </div>

      {/* Tabs kỹ năng */}
      <div className="flex flex-wrap gap-2">
        {TABS.map(t => {
          const count = (content[t.id] || []).length
          return (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                tab === t.id ? 'bg-blue-600 text-white shadow' : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}>
              {t.emoji} {t.label}
              <span className="ml-1 tabular-nums opacity-70">({count})</span>
            </button>
          )
        })}
      </div>

      {/* Status */}
      {status && (
        <div className={`flex items-start gap-2 rounded-xl p-4 text-sm ${
          status.type === 'ok' ? 'bg-emerald-50 text-emerald-900' : 'bg-red-50 text-red-900'
        }`}>
          {status.type === 'ok' ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />}
          <span>{status.msg}</span>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2">
        <button onClick={addNew}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700">
          <Plus className="h-4 w-4" /> Thêm bài mới
        </button>
        <button onClick={() => setImportOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50">
          <Upload className="h-4 w-4" /> Import file
        </button>
        <button onClick={() => handleExport('csv')}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50">
          <FileSpreadsheet className="h-4 w-4" /> Xuất Excel/CSV
        </button>
        <button onClick={() => handleExport('json')}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50">
          <FileJson className="h-4 w-4" /> Xuất JSON
        </button>
        <div className="ml-auto flex gap-2">
          <button onClick={reset} disabled={busy}
            className="inline-flex items-center gap-2 rounded-xl border border-red-300 bg-white px-4 py-2.5 font-semibold text-red-700 hover:bg-red-50 disabled:opacity-45">
            Reset toàn bộ
          </button>
          <button onClick={publish} disabled={busy || !dirty}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 font-semibold text-white hover:bg-emerald-700 disabled:opacity-45">
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            Lưu & Publish
          </button>
        </div>
      </div>

      {/* Search & filter */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Tìm theo tiêu đề hoặc mã bài..."
            className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-2.5 outline-none focus:border-blue-500" />
        </div>
        <select value={filterCefr} onChange={e => setFilterCefr(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500">
          <option value="all">Tất cả cấp độ</option>
          {CEFR_LEVELS.map(l => <option key={l.id} value={l.id}>{l.id} – {l.title}</option>)}
        </select>
        <span className="text-sm text-slate-500 tabular-nums">{filtered.length} bài</span>
      </div>

      {/* Danh sách */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center">
          <p className="text-slate-500">Chưa có bài nào.</p>
          <button onClick={addNew} className="mt-3 text-sm font-semibold text-blue-600 hover:underline">
            + Thêm bài đầu tiên
          </button>
        </div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {filtered.map(it => {
            const cefr = CEFR_LEVELS.find(l => l.id === it.cefr) || CEFR_LEVELS[0]
            return (
              <div key={it.id} className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                <span className={`shrink-0 rounded-lg bg-gradient-to-r ${cefr.color} px-2.5 py-1 text-xs font-bold text-white`}>
                  {it.cefr}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-400">{it.id}</span>
                  </div>
                  <h3 className="mt-1 truncate font-bold text-slate-900">{it.title || '(chưa đặt tên)'}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-slate-500">
                    {it.script || it.passage || it.target || it.prompt || it.sample || '(chưa có nội dung)'}
                  </p>
                  {it.questions?.length > 0 && (
                    <p className="mt-1 text-xs text-slate-400">{it.questions.length} câu hỏi</p>
                  )}
                </div>
                <div className="flex shrink-0 gap-1">
                  <button onClick={() => editItem(it)} title="Sửa"
                    className="rounded-lg p-2 text-slate-500 hover:bg-blue-50 hover:text-blue-600">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button onClick={() => deleteItem(it.id)} title="Xoá"
                    className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Modal Form */}
      {editing && (
        <ItemForm
          skill={tab}
          initial={editing.item}
          isCreate={editing.mode === 'create'}
          onSave={saveItem}
          onClose={() => setEditing(null)}
          existingIds={items.filter(i => i.id !== editing.item.id).map(i => i.id)}
        />
      )}

      {/* Modal Import */}
      {importOpen && (
        <ImportModal
          skill={tab}
          onImport={handleImport}
          onClose={() => setImportOpen(false)}
          busy={busy}
        />
      )}
    </div>
  )
}

// ============================================================
// ItemForm — form thêm / sửa bài
// ============================================================
function ItemForm({ skill, initial, isCreate, onSave, onClose, existingIds }) {
  const [data, setData] = useState(initial)
  const [error, setError] = useState('')

  const set = (k, v) => setData(d => ({ ...d, [k]: v }))

  const save = () => {
    if (!data.id.trim()) return setError('Mã bài không được để trống')
    if (existingIds.includes(data.id.trim())) return setError(`Mã bài "${data.id}" đã tồn tại`)
    if (!data.title.trim()) return setError('Tiêu đề không được để trống')
    onSave({ ...data, id: data.id.trim(), title: data.title.trim() })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="my-8 w-full max-w-3xl rounded-3xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-3xl border-b border-slate-200 bg-white px-6 py-4">
          <h2 className="text-xl font-bold">{isCreate ? 'Thêm bài mới' : 'Sửa bài'} – {skill}</h2>
          <button onClick={onClose} className="rounded-lg p-2 hover:bg-slate-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-5 p-6">
          {/* Base fields */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-bold text-slate-700">Mã bài *</label>
              <input value={data.id} onChange={e => set('id', e.target.value.toUpperCase())}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 font-mono outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700">Cấp độ *</label>
              <select value={data.cefr} onChange={e => set('cefr', e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500">
                {CEFR_LEVELS.map(l => <option key={l.id} value={l.id}>{l.id} – {l.title}</option>)}
              </select>
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-bold text-slate-700">Tiêu đề *</label>
              <input value={data.title} onChange={e => set('title', e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500" />
            </div>
          </div>

          {/* Skill-specific */}
          {skill === 'listening' && <ListeningFields data={data} set={set} />}
          {skill === 'speaking' && <SpeakingFields data={data} set={set} />}
          {skill === 'reading' && <ReadingFields data={data} set={set} />}
          {skill === 'writing' && <WritingFields data={data} set={set} />}

          {error && (
            <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-900">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> {error}
            </div>
          )}
        </div>

        <div className="sticky bottom-0 flex justify-end gap-2 rounded-b-3xl border-t border-slate-200 bg-white px-6 py-4">
          <button onClick={onClose} className="rounded-xl border border-slate-300 px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50">
            Huỷ
          </button>
          <button onClick={save} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700">
            <Save className="h-4 w-4" /> {isCreate ? 'Thêm bài' : 'Lưu thay đổi'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ---- Listening form ----
function ListeningFields({ data, set }) {
  const addQ = () => set('questions', [...(data.questions || []), emptyQuestion()])
  const updQ = (i, k, v) => {
    const qs = [...(data.questions || [])]
    qs[i] = { ...qs[i], [k]: v }
    set('questions', qs)
  }
  const delQ = (i) => set('questions', data.questions.filter((_, j) => j !== i))

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-bold text-slate-700">Giọng đọc</label>
          <select value={data.accent} onChange={e => set('accent', e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500">
            <option value="en-US">English (US)</option>
            <option value="en-GB">English (UK)</option>
            <option value="en-AU">English (AU)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700">Tốc độ đọc: {data.rate?.toFixed(2)}x</label>
          <input type="range" min="0.6" max="1.2" step="0.05" value={data.rate}
            onChange={e => set('rate', parseFloat(e.target.value))}
            className="mt-3 w-full" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700">Đoạn văn sẽ đọc (transcript)</label>
        <textarea rows="4" value={data.script} onChange={e => set('script', e.target.value)}
          placeholder="Nhập đoạn văn bản sẽ được đọc to..."
          className="mt-1 w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700">Câu chép chính tả</label>
        <input value={data.dictation} onChange={e => set('dictation', e.target.value)}
          placeholder="Một câu ngắn trong đoạn trên..."
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500" />
      </div>
      <QuestionList questions={data.questions || []} add={addQ} upd={updQ} del={delQ} />
    </>
  )
}

// ---- Speaking form ----
function SpeakingFields({ data, set }) {
  return (
    <>
      <div>
        <label className="block text-sm font-bold text-slate-700">Hướng dẫn (tiếng Việt)</label>
        <textarea rows="2" value={data.prompt} onChange={e => set('prompt', e.target.value)}
          placeholder="Ví dụ: Giới thiệu bản thân trong 4 câu..."
          className="mt-1 w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700">Câu mẫu (tiếng Anh, để user đọc theo)</label>
        <textarea rows="3" value={data.target} onChange={e => set('target', e.target.value)}
          placeholder="Hi, my name is Nam. I am twenty five years old..."
          className="mt-1 w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700">Từ khoá (cách nhau bằng dấu phẩy)</label>
        <input value={(data.keywords || []).join(', ')}
          onChange={e => set('keywords', e.target.value.split(',').map(k => k.trim()).filter(Boolean))}
          placeholder="name, years old, live, work"
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500" />
      </div>
    </>
  )
}

// ---- Reading form ----
function ReadingFields({ data, set }) {
  const addQ = () => set('questions', [...(data.questions || []), emptyQuestion()])
  const updQ = (i, k, v) => {
    const qs = [...(data.questions || [])]
    qs[i] = { ...qs[i], [k]: v }
    set('questions', qs)
  }
  const delQ = (i) => set('questions', data.questions.filter((_, j) => j !== i))

  return (
    <>
      <div>
        <label className="block text-sm font-bold text-slate-700">Đoạn văn đọc hiểu</label>
        <textarea rows="6" value={data.passage} onChange={e => set('passage', e.target.value)}
          placeholder="Nhập đoạn văn tiếng Anh..."
          className="mt-1 w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500" />
      </div>
      <QuestionList questions={data.questions || []} add={addQ} upd={updQ} del={delQ} />
    </>
  )
}

// ---- Writing form ----
function WritingFields({ data, set }) {
  return (
    <>
      <div>
        <label className="block text-sm font-bold text-slate-700">Đề bài (tiếng Việt)</label>
        <textarea rows="3" value={data.prompt} onChange={e => set('prompt', e.target.value)}
          placeholder="Ví dụ: Viết 5–7 câu miêu tả thói quen hàng ngày..."
          className="mt-1 w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-bold text-slate-700">Số từ tối thiểu</label>
          <input type="number" min="20" max="500" value={data.minWords}
            onChange={e => set('minWords', parseInt(e.target.value, 10) || 60)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700">Từ khoá gợi ý (cách nhau bằng dấu phẩy)</label>
          <input value={(data.keywords || []).join(', ')}
            onChange={e => set('keywords', e.target.value.split(',').map(k => k.trim()).filter(Boolean))}
            placeholder="wake up, breakfast, work"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700">Bài mẫu</label>
        <textarea rows="5" value={data.sample} onChange={e => set('sample', e.target.value)}
          placeholder="Every day I wake up at six o'clock..."
          className="mt-1 w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500" />
      </div>
    </>
  )
}

// ---- Question list (dùng chung Listening + Reading) ----
function QuestionList({ questions, add, upd, del }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-bold text-slate-700">Câu hỏi trắc nghiệm ({questions.length})</span>
        <button onClick={add} className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700">
          <Plus className="h-3.5 w-3.5" /> Thêm câu
        </button>
      </div>
      {questions.length === 0 && <p className="text-sm text-slate-500">Chưa có câu hỏi. Bấm "Thêm câu" để tạo.</p>}
      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700">Câu {i + 1}</span>
              <button onClick={() => del(i)} className="rounded p-1 text-red-600 hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <input value={q.q} onChange={e => upd(i, 'q', e.target.value)}
              placeholder="Nội dung câu hỏi"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500" />
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {q.choices.map((c, j) => (
                <div key={j} className="flex items-center gap-2">
                  <span className="w-5 text-sm font-bold text-slate-500">{String.fromCharCode(65 + j)}</span>
                  <input value={c}
                    onChange={e => { const cs = [...q.choices]; cs[j] = e.target.value; upd(i, 'choices', cs) }}
                    placeholder={`Đáp án ${String.fromCharCode(65 + j)}`}
                    className="flex-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-500" />
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600">Đáp án đúng:</span>
              <select value={q.answer} onChange={e => upd(i, 'answer', parseInt(e.target.value, 10))}
                className="rounded-lg border border-slate-300 px-2 py-1 text-sm outline-none focus:border-blue-500">
                {[0, 1, 2, 3].map(j => <option key={j} value={j}>{String.fromCharCode(65 + j)}</option>)}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// Import Modal
// ============================================================
function ImportModal({ skill, onImport, onClose, busy }) {
  const fileRef = useRef(null)
  const [dragging, setDragging] = useState(false)

  const handle = (file) => file && onImport(file)
  const onDrop = (e) => { e.preventDefault(); setDragging(false); handle(e.dataTransfer.files[0]) }

  const downloadTemplate = (fmt) => {
    if (fmt === 'csv') {
      const tpl = {
        listening: 'id,cefr,title,accent,rate,script,dictation,questions\nL99,A2,Greeting,en-US,0.95,"Hello world.","Hello world.","What greeting?|Hello|Hi|Bye|No|0"',
        speaking:  'id,cefr,title,prompt,target,keywords\nS99,A2,Greeting,Chào hỏi,Hello there,hello|hi|greeting',
        reading:   'id,cefr,title,passage,questions\nR99,B1,Story,"Once upon a time...","What?|A|B|C|D|0"',
        writing:   'id,cefr,title,prompt,minWords,keywords,sample\nW99,B1,My day,Viết về ngày của bạn,60,key1|key2,"Sample text"'
      }[skill]
      downloadBlob('\uFEFF' + tpl, `mau-${skill}.csv`, 'text/csv')
    } else {
      const tpl = {
        listening: [{ id: 'L99', cefr: 'A2', title: 'Greeting', accent: 'en-US', rate: 0.95, script: 'Hello.', dictation: 'Hello.', questions: [{ q: 'Q?', choices: ['A','B','C','D'], answer: 0 }] }],
        speaking:  [{ id: 'S99', cefr: 'A2', title: 'Greeting', prompt: 'Chào hỏi', target: 'Hello.', keywords: ['hello'] }],
        reading:   [{ id: 'R99', cefr: 'A2', title: 'Story', passage: 'Text...', questions: [{ q: 'Q?', choices: ['A','B','C','D'], answer: 0 }] }],
        writing:   [{ id: 'W99', cefr: 'A2', title: 'My day', prompt: 'Viết về...', minWords: 60, keywords: ['key'], sample: 'Sample...' }]
      }[skill]
      downloadBlob(JSON.stringify(tpl, null, 2), `mau-${skill}.json`, 'application/json')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Import file – {skill}</h2>
          <button onClick={onClose} className="rounded-lg p-2 hover:bg-slate-100"><X className="h-5 w-5" /></button>
        </div>

        <div
          onDragOver={e => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => fileRef.current?.click()}
          className={`grid cursor-pointer place-items-center rounded-2xl border-2 border-dashed p-10 transition ${
            dragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300 hover:border-blue-400 hover:bg-slate-50'
          }`}
        >
          {busy ? <Loader2 className="h-10 w-10 animate-spin text-blue-600" /> : <Upload className="h-10 w-10 text-slate-400" />}
          <p className="mt-3 font-semibold text-slate-700">{busy ? 'Đang xử lý...' : 'Kéo thả file vào đây'}</p>
          <p className="text-sm text-slate-500">hoặc bấm để chọn file</p>
          <input ref={fileRef} type="file" accept=".xlsx,.xls,.csv,.docx,.txt,.json" onChange={e => handle(e.target.files[0])} className="hidden" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="rounded-lg border border-slate-200 p-3 text-center">
            <FileSpreadsheet className="mx-auto h-6 w-6 text-emerald-600" />
            <p className="mt-1 text-xs font-semibold">Excel</p>
            <p className="text-[10px] text-slate-500">.xlsx .xls</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3 text-center">
            <FileSpreadsheet className="mx-auto h-6 w-6 text-blue-600" />
            <p className="mt-1 text-xs font-semibold">CSV</p>
            <p className="text-[10px] text-slate-500">.csv</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3 text-center">
            <FileType className="mx-auto h-6 w-6 text-indigo-600" />
            <p className="mt-1 text-xs font-semibold">Word</p>
            <p className="text-[10px] text-slate-500">.docx</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3 text-center">
            <FileText className="mx-auto h-6 w-6 text-slate-600" />
            <p className="mt-1 text-xs font-semibold">Text / JSON</p>
            <p className="text-[10px] text-slate-500">.txt .json</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-4">
          <span className="text-sm text-slate-500">Chưa có file mẫu?</span>
          <div className="flex gap-2">
            <button onClick={() => downloadTemplate('csv')}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <Download className="h-4 w-4" /> File mẫu CSV
            </button>
            <button onClick={() => downloadTemplate('json')}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <Download className="h-4 w-4" /> File mẫu JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}