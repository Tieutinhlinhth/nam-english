import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft, Upload, Download, Save, RotateCcw, CheckCircle2,
  AlertCircle, Loader2, FileJson, FileText, FileSpreadsheet, Trash2
} from 'lucide-react'
import { useContent, setContent, publishContentToSupabase } from './contentStore'
import { DEFAULT_CONTENT } from './data'
import {
  parseFile, downloadJSON, CSV_TEMPLATES, JSON_TEMPLATES
} from './fileParsers'

const TABS = [
  { id: 'listening', label: 'Listening', emoji: '🎧' },
  { id: 'speaking',  label: 'Speaking',  emoji: '🎤' },
  { id: 'reading',   label: 'Reading',   emoji: '📖' },
  { id: 'writing',   label: 'Writing',   emoji: '✍️' }
]

export default function AdminPanel({ user, supabase, onBack }) {
  const content = useContent()
  const [tab, setTab] = useState('listening')
  const [draft, setDraft] = useState('')
  const [status, setStatus] = useState(null)
  const [busy, setBusy] = useState(false)
  const fileRef = useRef(null)

  useEffect(() => {
    setDraft(JSON.stringify(content[tab], null, 2))
    setStatus(null)
  }, [tab, content])

  const current = content[tab] || []
  let draftItems = []
  let parseError = null
  try {
    const d = JSON.parse(draft)
    if (Array.isArray(d)) draftItems = d
    else parseError = 'Nội dung phải là mảng [...]'
  } catch (e) {
    parseError = 'JSON không hợp lệ: ' + e.message
  }

  const totalCount = Object.values(content).reduce((s, a) => s + (a?.length || 0), 0)
  const dirty = !parseError && draftItems.length !== current.length ||
                (!parseError && JSON.stringify(draftItems) !== JSON.stringify(current))

  const handleUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setStatus(null)
    try {
      const text = await file.text()
      const parsed = parseFile(file.name, text, tab)
      setDraft(JSON.stringify(parsed, null, 2))
      setStatus({ type: 'ok', msg: `Đã parse ${parsed.length} bài từ "${file.name}". Nhấn "Lưu & Publish" để đẩy lên.` })
    } catch (err) {
      setStatus({ type: 'error', msg: `Lỗi parse: ${err.message}` })
    }
    e.target.value = ''
  }

  const handleSave = async () => {
    if (parseError) { setStatus({ type: 'error', msg: parseError }); return }
    setBusy(true); setStatus(null)
    try {
      const nextContent = { ...content, [tab]: draftItems }
      await publishContentToSupabase(supabase, user, nextContent)
      setContent(nextContent)
      setStatus({ type: 'ok', msg: `Đã publish ${draftItems.length} bài "${tab}". User sẽ thấy sau khi F5.` })
    } catch (err) {
      setStatus({ type: 'error', msg: `Không publish được: ${err.message}` })
    } finally {
      setBusy(false)
    }
  }

  const handleExport = () => {
    downloadJSON(content[tab], `nam-english-${tab}-${new Date().toISOString().slice(0,10)}.json`)
  }

  const handleDownloadTemplate = (fmt) => {
    if (fmt === 'json') {
      downloadJSON(JSON_TEMPLATES[tab], `template-${tab}.json`)
    } else {
      const blob = new Blob([CSV_TEMPLATES[tab]], { type: 'text/csv' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `template-${tab}.csv`
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  const handleReset = async () => {
    if (!confirm('Reset TOÀN BỘ nội dung về bản gốc? Hành động này xoá tất cả chỉnh sửa trên Supabase.')) return
    setBusy(true); setStatus(null)
    try {
      await publishContentToSupabase(supabase, user, DEFAULT_CONTENT)
      setContent(DEFAULT_CONTENT)
      setStatus({ type: 'ok', msg: 'Đã reset về nội dung gốc.' })
    } catch (err) {
      setStatus({ type: 'error', msg: `Lỗi: ${err.message}` })
    } finally {
      setBusy(false)
    }
  }

  const handleLoadDefault = () => {
    setDraft(JSON.stringify(DEFAULT_CONTENT[tab], null, 2))
    setStatus({ type: 'ok', msg: `Đã nạp nội dung gốc của "${tab}" vào editor. Nhấn "Lưu & Publish" nếu muốn áp dụng.` })
  }

  const handleClearDraft = () => {
    setDraft('[]')
    setStatus({ type: 'ok', msg: 'Đã xoá draft. Nhấn "Lưu & Publish" để xoá toàn bộ bài của tab này.' })
  }

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

      <div className="rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-black">Bảng điều khiển nội dung</h1>
        <p className="mt-2 text-slate-300">
          Upload JSON, CSV hoặc TXT — hoặc paste trực tiếp — rồi bấm "Lưu & Publish" để áp dụng cho mọi người dùng.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-white/10 px-3 py-1">👤 {user?.email}</span>
          <span className="rounded-full bg-white/10 px-3 py-1">Tổng: {totalCount} bài</span>
          <span className="rounded-full bg-white/10 px-3 py-1">
            {dirty ? '⚠️ Có thay đổi chưa lưu' : '✓ Đã đồng bộ'}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {TABS.map(t => {
          const count = (content[t.id] || []).length
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                tab === t.id
                  ? 'bg-blue-600 text-white shadow'
                  : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t.emoji} {t.label}
              <span className="ml-1 tabular-nums opacity-70">({count})</span>
            </button>
          )
        })}
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2">
        <input
          ref={fileRef}
          type="file"
          accept=".json,.csv,.txt"
          onChange={handleUpload}
          className="hidden"
        />
        <button
          onClick={() => fileRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50"
        >
          <Upload className="h-4 w-4" /> Upload file
        </button>
        <button
          onClick={handleExport}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50"
        >
          <Download className="h-4 w-4" /> Export JSON
        </button>
        <button
          onClick={() => handleDownloadTemplate('json')}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          <FileJson className="h-4 w-4" /> Template JSON
        </button>
        <button
          onClick={() => handleDownloadTemplate('csv')}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          <FileSpreadsheet className="h-4 w-4" /> Template CSV
        </button>
        <button
          onClick={handleSave}
          disabled={busy || !!parseError}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-45"
        >
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Lưu & Publish
        </button>
        <button
          onClick={handleLoadDefault}
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-45"
        >
          <RotateCcw className="h-4 w-4" /> Nạp bản gốc
        </button>
        <button
          onClick={handleReset}
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-xl border border-red-300 bg-white px-4 py-2.5 font-semibold text-red-700 hover:bg-red-50 disabled:opacity-45"
        >
          <RotateCcw className="h-4 w-4" /> Reset toàn bộ
        </button>
      </div>

      {/* Status */}
      {status && (
        <div className={`flex items-start gap-2 rounded-xl p-4 text-sm ${
          status.type === 'ok' ? 'bg-emerald-50 text-emerald-900' : 'bg-red-50 text-red-900'
        }`}>
          {status.type === 'ok'
            ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />}
          <span>{status.msg}</span>
        </div>
      )}

      {/* Stats */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-bold uppercase text-slate-500">Bài đang dùng</div>
          <div className="mt-1 text-2xl font-black tabular-nums">{current.length}</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-bold uppercase text-slate-500">Bài trong draft</div>
          <div className={`mt-1 text-2xl font-black tabular-nums ${parseError ? 'text-red-500' : ''}`}>
            {parseError ? '—' : draftItems.length}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-bold uppercase text-slate-500">Trạng thái</div>
          <div className="mt-1 text-sm">
            {parseError
              ? <span className="text-red-600">JSON lỗi</span>
              : !dirty
                ? <span className="text-emerald-600">Không có thay đổi</span>
                : <span className="text-amber-600">
                    {draftItems.length > current.length ? `+${draftItems.length - current.length}` : ''}
                    {draftItems.length < current.length ? `-${current.length - draftItems.length}` : ''}
                    {(draftItems.length === current.length) ? 'Sửa nội dung' : ' bài'}
                  </span>}
          </div>
        </div>
      </div>

      {/* Editor */}
      <div>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <label className="text-sm font-bold text-slate-700">
            Nội dung JSON của <span className="text-blue-600">{tab}</span>
          </label>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Mảng các object bài tập</span>
            <button
              onClick={handleClearDraft}
              className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-3 w-3" /> Xoá draft
            </button>
          </div>
        </div>
        <textarea
          value={draft}
          onChange={e => setDraft(e.target.value)}
          spellCheck={false}
          rows="24"
          className={`w-full rounded-2xl border p-4 font-mono text-xs leading-5 outline-none focus:bg-white ${
            parseError ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-slate-50 focus:border-blue-500'
          }`}
        />
      </div>

      {/* Help */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold">Hướng dẫn định dạng file</h3>
        <div className="mt-4 space-y-4 text-sm text-slate-700">
          <div>
            <div className="font-semibold text-slate-900">📄 JSON (.json)</div>
            <p className="mt-1">
              Mảng các object. Cách nhanh nhất: bấm <strong>Export JSON</strong>, sửa bằng editor bất kỳ, rồi upload lại.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">📊 CSV (.csv)</div>
            <p className="mt-1">
              Mỗi dòng = 1 bài. Dùng dấu <code className="rounded bg-slate-100 px-1">|</code> phân tách giá trị trong 1 ô,
              dấu <code className="rounded bg-slate-100 px-1">;</code> giữa các câu hỏi.
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-slate-500">
              <li><strong>Listening:</strong> id, cefr, title, accent, rate, script, dictation, questions</li>
              <li><strong>Speaking:</strong> id, cefr, title, prompt, target, keywords</li>
              <li><strong>Reading:</strong> id, cefr, title, passage, questions</li>
              <li><strong>Writing:</strong> id, cefr, title, prompt, minWords, keywords, sample</li>
            </ul>
            <p className="mt-1 text-xs text-slate-500">
              Format câu hỏi: <code className="rounded bg-slate-100 px-1">Câu hỏi?|A|B|C|D|0</code> (0–3 là đáp án đúng).
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">📝 TXT (.txt)</div>
            <p className="mt-1">Chỉ dùng cho Listening: mỗi dòng 1 câu dictation, tự tạo bài với cấp A1.</p>
          </div>
        </div>
      </div>
    </div>
  )
}