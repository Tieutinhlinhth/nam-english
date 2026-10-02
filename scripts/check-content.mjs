import { LESSONS, QUESTIONS } from '../src/questions.js'
const errors=[]
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim()
if (LESSONS.length !== 13) errors.push(`Cần 13 bài, hiện có ${LESSONS.length}`)
if (QUESTIONS.length !== 300) errors.push(`Cần 300 câu, hiện có ${QUESTIONS.length}`)
const ids=new Set(), prompts=new Map(), signatures=new Map()
for (const q of QUESTIONS) {
  if (ids.has(q.id)) errors.push(`Trùng ID ${q.id}`); ids.add(q.id)
  if (!q.q?.trim()) errors.push(`Câu ${q.id} thiếu nội dung`)
  if (!Array.isArray(q.choices) || q.choices.length !== 4) errors.push(`Câu ${q.id} không có đúng 4 lựa chọn`)
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) errors.push(`Câu ${q.id} có answer không hợp lệ`)
  if (!q.explain?.trim()) errors.push(`Câu ${q.id} thiếu giải thích`)
  const p=norm(q.q); if(prompts.has(p)) errors.push(`Câu ${q.id} trùng nội dung với câu ${prompts.get(p)}`); else prompts.set(p,q.id)
  const sig=p+'|'+q.choices.map(norm).sort().join('|'); if(signatures.has(sig)) errors.push(`Câu ${q.id} trùng toàn bộ với câu ${signatures.get(sig)}`); else signatures.set(sig,q.id)
}
for (let lesson=1; lesson<=13; lesson++) { const n=QUESTIONS.filter(q=>q.lesson===lesson).length; if(n!==20) errors.push(`Bài ${lesson} cần 20 câu, hiện có ${n}`) }
if (QUESTIONS.filter(q=>q.lesson===14).length!==40) errors.push('Bài tổng hợp cần 40 câu')
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`OK: ${LESSONS.length} bài, ${QUESTIONS.length} câu thực sự khác nhau; không trùng prompt hoặc bộ lựa chọn.`)
