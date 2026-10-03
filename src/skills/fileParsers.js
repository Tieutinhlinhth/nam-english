// ============================================================
// Parser cho JSON / CSV / TXT
// ============================================================

export function parseCSV(text) {
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
      else if (c === '\r') { /* skip */ }
      else cell += c
    }
  }
  if (cell || row.length) { row.push(cell); rows.push(row) }
  return rows.filter(r => r.some(c => String(c).trim() !== ''))
}

function csvToObjects(rows) {
  if (rows.length < 2) return []
  const header = rows[0].map(h => h.trim())
  return rows.slice(1).map(r =>
    Object.fromEntries(header.map((h, i) => [h, String(r[i] ?? '').trim()]))
  )
}

function parseQuestions(s) {
  if (!s) return []
  return s.split(';').filter(Boolean).map(q => {
    const p = q.split('|').map(x => x.trim())
    if (p.length < 6) throw new Error(`Câu hỏi sai format: "${q}"`)
    return {
      q: p[0],
      choices: [p[1], p[2], p[3], p[4]],
      answer: Math.max(0, Math.min(3, parseInt(p[5], 10) || 0))
    }
  })
}

export function parseListeningCSV(text) {
  return csvToObjects(parseCSV(text)).map(o => ({
    id: o.id,
    cefr: (o.cefr || 'A1').toUpperCase(),
    title: o.title || '',
    accent: o.accent || 'en-US',
    rate: parseFloat(o.rate) || 0.95,
    script: o.script || '',
    dictation: o.dictation || '',
    questions: parseQuestions(o.questions)
  }))
}

export function parseSpeakingCSV(text) {
  return csvToObjects(parseCSV(text)).map(o => ({
    id: o.id,
    cefr: (o.cefr || 'A1').toUpperCase(),
    title: o.title || '',
    prompt: o.prompt || '',
    target: o.target || '',
    keywords: (o.keywords || '').split('|').map(k => k.trim()).filter(Boolean)
  }))
}

export function parseReadingCSV(text) {
  return csvToObjects(parseCSV(text)).map(o => ({
    id: o.id,
    cefr: (o.cefr || 'A1').toUpperCase(),
    title: o.title || '',
    passage: o.passage || '',
    questions: parseQuestions(o.questions)
  }))
}

export function parseWritingCSV(text) {
  return csvToObjects(parseCSV(text)).map(o => ({
    id: o.id,
    cefr: (o.cefr || 'A1').toUpperCase(),
    title: o.title || '',
    prompt: o.prompt || '',
    minWords: parseInt(o.minWords, 10) || 50,
    keywords: (o.keywords || '').split('|').map(k => k.trim()).filter(Boolean),
    sample: o.sample || ''
  }))
}

export function parseTXT(text, skill) {
  if (skill !== 'listening') throw new Error('.txt chỉ hỗ trợ Listening (mỗi dòng 1 câu dictation)')
  const stamp = Date.now()
  return text.split('\n').map(l => l.trim()).filter(Boolean).map((line, i) => ({
    id: `TXT${stamp}_${i + 1}`,
    cefr: 'A1',
    title: `Câu ${i + 1}`,
    accent: 'en-US',
    rate: 0.9,
    script: line,
    dictation: line,
    questions: []
  }))
}

export function parseFile(filename, text, skill) {
  const ext = filename.toLowerCase().split('.').pop()
  if (ext === 'json') {
    const data = JSON.parse(text)
    if (Array.isArray(data)) return data
    if (data[skill]) return data[skill]
    throw new Error(`JSON không chứa key "${skill}"`)
  }
  if (ext === 'csv') {
    if (skill === 'listening') return parseListeningCSV(text)
    if (skill === 'speaking') return parseSpeakingCSV(text)
    if (skill === 'reading') return parseReadingCSV(text)
    if (skill === 'writing') return parseWritingCSV(text)
    throw new Error('Skill không xác định')
  }
  if (ext === 'txt') return parseTXT(text, skill)
  throw new Error(`Định dạng .${ext} chưa được hỗ trợ. Chỉ nhận .json, .csv, .txt`)
}

// Download helper
export function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

// CSV templates
export const CSV_TEMPLATES = {
  listening: 'id,cefr,title,accent,rate,script,dictation,questions\nL99,A2,Sample,en-US,0.95,"Hello world.","Hello world.","What greeting?|Hello|Hi|Bye|No|0;Where?|Here|There|Away|Home|0"',
  speaking:  'id,cefr,title,prompt,target,keywords\nS99,A2,Sample,Chào hỏi,Hello there,hello|hi|greeting',
  reading:   'id,cefr,title,passage,questions\nR99,B1,Sample,"Once upon a time...","What?|A|B|C|D|0"',
  writing:   'id,cefr,title,prompt,minWords,keywords,sample\nW99,B1,Sample,Viết về...,80,key1|key2,"Sample text"'
}

export const JSON_TEMPLATES = {
  listening: [{ id: 'L99', cefr: 'A2', title: 'Sample', accent: 'en-US', rate: 0.95, script: 'Hello.', dictation: 'Hello.', questions: [{ q: 'Q?', choices: ['A', 'B', 'C', 'D'], answer: 0 }] }],
  speaking:  [{ id: 'S99', cefr: 'A2', title: 'Sample', prompt: 'Mô tả', target: 'Hello.', keywords: ['hello'] }],
  reading:   [{ id: 'R99', cefr: 'A2', title: 'Sample', passage: 'Text...', questions: [{ q: 'Q?', choices: ['A', 'B', 'C', 'D'], answer: 0 }] }],
  writing:   [{ id: 'W99', cefr: 'A2', title: 'Sample', prompt: 'Viết về...', minWords: 60, keywords: ['key'], sample: 'Sample...' }]
}