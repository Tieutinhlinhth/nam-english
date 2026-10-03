import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeft, Clock3, Trophy, Target, RotateCcw, CheckCircle2,
  XCircle, BookOpen, Headphones, BookOpenCheck, ChevronRight,
  Sparkles, Download, AlertCircle, Swords, Play, Square, Volume2
} from 'lucide-react'
import { LESSONS, QUESTIONS as QUESTIONS_BASE } from '../questions'
import { QUESTIONS_EXTRA } from '../questions-extra'
import { QUESTIONS_TOPIC_EXTRA, mapLegacyLevel } from '../questions-topics'
import { useContent } from './contentStore'
import { playCorrect, playWrong, playFinish, soundEnabled, speak, stopSpeaking } from './utils'
import { parseAzotaText } from './azotaParser'

const QUESTIONS = [...QUESTIONS_BASE, ...QUESTIONS_EXTRA, ...QUESTIONS_TOPIC_EXTRA]

const EXAM_MODES = [
  { id: 'grammar-basic', title: 'Ngữ pháp – Cơ bản', desc: 'Toàn bộ 13 chủ điểm ở mức dễ',
    icon: <BookOpen />, color: 'from-emerald-500 to-teal-700', questionCount: 30, timeMinutes: 20,
    sources: { levels: ['Basic'] } },
  { id: 'grammar-intermediate', title: 'Ngữ pháp – Trung cấp', desc: 'Toàn bộ 13 chủ điểm ở mức vừa',
    icon: <BookOpen />, color: 'from-sky-500 to-blue-700', questionCount: 30, timeMinutes: 25,
    sources: { levels: ['Intermediate'] } },
  { id: 'grammar-advanced', title: 'Ngữ pháp – Nâng cao', desc: 'Toàn bộ 13 chủ điểm ở mức khó',
    icon: <BookOpen />, color: 'from-rose-500 to-pink-700', questionCount: 30, timeMinutes: 25,
    sources: { levels: ['Advanced'] } },
  { id: 'skills-listening', title: 'Nghe toàn diện', desc: 'Trắc nghiệm từ các bài nghe mọi cấp độ',
    icon: <Headphones />, color: 'from-sky-500 to-blue-700', questionCount: 20, timeMinutes: 20,
    sources: { skills: ['listening'] } },
  { id: 'skills-reading', title: 'Đọc toàn diện', desc: 'Trắc nghiệm từ các bài đọc mọi cấp độ',
    icon: <BookOpenCheck />, color: 'from-emerald-500 to-teal-700', questionCount: 20, timeMinutes: 25,
    sources: { skills: ['reading'] } },
  { id: 'mixed-all', title: 'Tổng hợp toàn diện', desc: 'Trộn ngữ pháp và kỹ năng, xếp loại theo cấp độ',
    icon: <Swords />, color: 'from-amber-500 to-orange-700', questionCount: 50, timeMinutes: 60,
    sources: { levels: ['Basic', 'Intermediate', 'Advanced'], skills: ['listening', 'reading'] } }
]

const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildExam(mode, content) {
  const pool = []

  if (mode.sources.levels?.length) {
    QUESTIONS.forEach(q => {
      const lvl = mapLegacyLevel(q.level)
      if (mode.sources.levels.includes(lvl)) {
        pool.push({
          id: `G-${q.id}`,
          source: 'Ngữ pháp',
          sourceIcon: <BookOpen className="h-3.5 w-3.5" />,
          question: q.q,
          choices: q.choices,
          answer: q.answer,
          explain: q.explain,
          level: lvl,
          cefr: lvl === 'Basic' ? 'A2' : lvl === 'Intermediate' ? 'B1' : 'B2'
        })
      }
    })
  }

  if (mode.sources.skills?.includes('listening')) {
    (content.listening || []).forEach(item => {
      (item.questions || []).forEach((q, qi) => {
        pool.push({
          id: `L-${item.id}-${qi}`, source: 'Nghe',
          sourceIcon: <Headphones className="h-3.5 w-3.5" />,
          question: q.q, choices: q.choices, answer: q.answer,
          explain: q.explain || `Bài "${item.title}" – nghe lại để hiểu rõ.`,
          level: item.cefr, cefr: item.cefr,
          audioScript: item.script,
          accent: item.accent || 'en-US',
          itemTitle: item.title
        })
      })
    })
  }

  if (mode.sources.skills?.includes('reading')) {
    (content.reading || []).forEach(item => {
      (item.questions || []).forEach((q, qi) => {
        pool.push({
          id: `R-${item.id}-${qi}`, source: 'Đọc',
          sourceIcon: <BookOpenCheck className="h-3.5 w-3.5" />,
          question: q.q, choices: q.choices, answer: q.answer,
          explain: q.explain || `Bài "${item.title}" – đọc lại đoạn văn để tìm thông tin.`,
          level: item.cefr, cefr: item.cefr,
          passage: item.passage,
          itemTitle: item.title
        })
      })
    })
  }

  return shuffle(pool).slice(0, Math.min(mode.questionCount, pool.length))
}

const classifyCefr = (score, total) => {
  const pct = total ? (score / total) * 100 : 0
  if (pct >= 90) return { cefr: 'C1/C2', label: 'Xuất sắc' }
  if (pct >= 75) return { cefr: 'B2', label: 'Tốt' }
  if (pct >= 60) return { cefr: 'B1', label: 'Khá' }
  if (pct >= 40) return { cefr: 'A2', label: 'Trung bình' }
  return { cefr: 'A1', label: 'Cần cố gắng' }
}

export default function ComprehensiveTest({ onBack, onComplete }) {
  const content = useContent()
  const [phase, setPhase] = useState('picker')
  const [mode, setMode] = useState(null)
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [currentIdx, setCurrentIdx] = useState(0)
  const [checked, setChecked] = useState({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [result, setResult] = useState(null)
  const [customDecks, setCustomDecks] = useState([])
  const [playing, setPlaying] = useState(false)
  const timerRef = useRef(null)

  const [importOpen, setImportOpen] = useState(false)
  const [importError, setImportError] = useState('')
  const [importQuestions, setImportQuestions] = useState([])
  const [importTitle, setImportTitle] = useState('')
  const fileRef = useRef(null)

  useEffect(() => () => {
    clearInterval(timerRef.current)
    stopSpeaking()
  }, [])

  // Dừng audio khi đổi câu
  useEffect(() => {
    stopSpeaking()
    setPlaying(false)
  }, [currentIdx])

  const startExam = (m) => {
    const qs = buildExam(m, content)
    if (!qs.length) { alert('Không đủ câu hỏi cho kỳ thi này.'); return }
    setMode(m); setQuestions(qs); setAnswers({}); setChecked({})
    setCurrentIdx(0); setTimeLeft(m.timeMinutes * 60); setResult(null); setPhase('running')
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current); finishExam(true); return 0 }
        return t - 1
      })
    }, 1000)
  }

  const pickAnswer = (idx) => {
    const q = questions[currentIdx]
    if (checked[q.id]) return
    setAnswers(a => ({ ...a, [q.id]: idx }))
    setChecked(c => ({ ...c, [q.id]: true }))
    if (soundEnabled()) { idx === q.answer ? playCorrect() : playWrong() }
  }

  const finishExam = (auto = false) => {
    clearInterval(timerRef.current)
    stopSpeaking()
    const right = questions.filter(q => answers[q.id] === q.answer).length
    const wrong = questions.filter(q => answers[q.id] !== undefined && answers[q.id] !== q.answer)
    const skipped = questions.filter(q => answers[q.id] === undefined)
    const cls = classifyCefr(right, questions.length)
    setResult({
      score: right, total: questions.length, wrong, skipped,
      cefr: cls.cefr, label: cls.label, mode: mode.title,
      timeUsed: mode.timeMinutes * 60 - timeLeft, autoSubmitted: auto
    })
    setPhase('result')
    if (soundEnabled()) playFinish()
    onComplete?.(`exam-${mode.id}`, Math.round((right / questions.length) * 100))
  }

  const handlePlayAudio = () => {
    const q = questions[currentIdx]
    if (!q?.audioScript) return
    if (playing) {
      stopSpeaking()
      setPlaying(false)
      return
    }
    setPlaying(true)
    speak(q.audioScript, {
      rate: 0.9,
      lang: q.accent || 'en-US',
      onEnd: () => setPlaying(false)
    })
  }

  const handleImportFile = async (file) => {
    setImportError('')
    try {
      const ext = file.name.toLowerCase().split('.').pop()
      let text = ''
      if (ext === 'docx') {
        const mammoth = await import('mammoth/mammoth.browser')
        const buf = await file.arrayBuffer()
        const res = await mammoth.extractRawText({ arrayBuffer: buf })
        text = res.value
      } else if (ext === 'txt' || ext === 'json') {
        text = await file.text()
      } else throw new Error('Chỉ hỗ trợ file .docx, .txt hoặc .json')

      const parsed = parseAzotaText(text)
      if (!parsed.length) throw new Error('Không tìm thấy câu hỏi nào trong file. Vui lòng kiểm tra định dạng.')
      setImportQuestions(parsed)
      setImportTitle(file.name.replace(/\.[^.]+$/, ''))
    } catch (err) {
      setImportError(err.message)
    }
  }

  const applyImport = () => {
    if (!importQuestions.length) return
    setCustomDecks(prev => [...prev, { title: importTitle, questions: importQuestions }])
    setImportOpen(false); setImportQuestions([]); setImportTitle('')
  }

  if (phase === 'picker') {
    return (
      <div className="space-y-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" /> Quay lại
        </button>

        <div className="rounded-3xl bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 p-8 text-white shadow-lg md:p-10">
          <span className="rounded-full bg-white/15 px-3 py-1 text-sm">Kiểm tra toàn diện</span>
          <h1 className="mt-4 text-3xl font-black md:text-4xl">Chọn kỳ thi</h1>
          <p className="mt-2 max-w-2xl text-white/85">
            Đề trộn ngẫu nhiên. Có đồng hồ đếm ngược, âm thanh phản hồi, xếp loại theo cấp độ.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXAM_MODES.map(m => (
            <button key={m.id} onClick={() => startExam(m)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${m.color} p-6 text-left text-white shadow-md transition hover:scale-[1.02] hover:shadow-xl`}>
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20 backdrop-blur">
                  <span className="[&>svg]:h-6 [&>svg]:w-6">{m.icon}</span>
                </div>
                <ChevronRight className="h-5 w-5 opacity-70 transition group-hover:translate-x-1" />
              </div>
              <h3 className="mt-4 text-xl font-black">{m.title}</h3>
              <p className="mt-1 text-sm text-white/85">{m.desc}</p>
              <div className="mt-4 flex gap-3 text-xs">
                <span className="rounded-full bg-white/15 px-2.5 py-0.5">{m.questionCount} câu</span>
                <span className="rounded-full bg-white/15 px-2.5 py-0.5">{m.timeMinutes} phút</span>
              </div>
            </button>
          ))}
        </div>

        <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-black">📄 Nhập đề thi từ file Word</h3>
              <p className="mt-1 text-sm text-slate-500">
                Tải file .docx chứa câu hỏi trắc nghiệm. Định dạng cần: <strong>Câu 1.</strong> hoặc <strong>Question 1.</strong> cho mỗi câu, đáp án <strong>A.</strong> <strong>B.</strong> <strong>C.</strong> <strong>D.</strong>, dấu <strong>*</strong> đặt trước đáp án đúng.
              </p>
              {customDecks.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {customDecks.map((a, i) => (
                    <span key={i} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      ✓ {a.title} ({a.questions.length} câu)
                    </span>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => setImportOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white hover:bg-indigo-700">
              <Download className="h-4 w-4" /> Nhập đề từ file
            </button>
          </div>
        </div>

        {importOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-sm">
            <div className="my-8 w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">
              <h2 className="text-xl font-black">Nhập đề thi từ file Word (.docx)</h2>
              <p className="mt-1 text-sm text-slate-500">
                Định dạng file cần có:
                <br />• Câu hỏi: <code className="rounded bg-slate-100 px-1">Câu 1.</code> hoặc <code className="rounded bg-slate-100 px-1">Question 1.</code>
                <br />• Đáp án: <code className="rounded bg-slate-100 px-1">A.</code> <code className="rounded bg-slate-100 px-1">B.</code> <code className="rounded bg-slate-100 px-1">C.</code> <code className="rounded bg-slate-100 px-1">D.</code> — đánh dấu đáp án đúng bằng <code className="rounded bg-slate-100 px-1">*</code> ở đầu (ví dụ: <code className="rounded bg-slate-100 px-1">*B.</code>)
              </p>

              <div onClick={() => fileRef.current?.click()}
                className="mt-4 grid cursor-pointer place-items-center rounded-2xl border-2 border-dashed border-slate-300 p-10 hover:border-indigo-400 hover:bg-indigo-50">
                <Download className="h-10 w-10 text-slate-400" />
                <p className="mt-3 font-semibold">Kéo thả file vào đây</p>
                <p className="text-sm text-slate-500">hoặc bấm để chọn file (.docx, .txt, .json)</p>
                <input ref={fileRef} type="file" accept=".docx,.txt,.json" className="hidden"
                  onChange={e => e.target.files[0] && handleImportFile(e.target.files[0])} />
              </div>

              {importError && (
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-900">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> {importError}
                </div>
              )}

              {importQuestions.length > 0 && (
                <div className="mt-4 max-h-60 overflow-y-auto rounded-xl border border-slate-200 p-3">
                  <div className="mb-2 text-sm font-bold text-emerald-600">
                    ✓ Đã nhận diện {importQuestions.length} câu hỏi
                  </div>
                  {importQuestions.slice(0, 5).map((q, i) => (
                    <div key={i} className="border-t border-slate-100 py-2 text-sm">
                      <div className="font-medium">{i + 1}. {q.q.slice(0, 80)}...</div>
                      <div className="text-xs text-slate-500">
                        {q.choices.length} đáp án · Đáp án đúng: {String.fromCharCode(65 + q.answer)}
                      </div>
                    </div>
                  ))}
                  {importQuestions.length > 5 && (
                    <p className="pt-2 text-xs text-slate-500">... và {importQuestions.length - 5} câu khác</p>
                  )}
                </div>
              )}

              <div className="mt-6 flex justify-end gap-2">
                <button onClick={() => { setImportOpen(false); setImportError(''); setImportQuestions([]) }}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50">Huỷ</button>
                <button onClick={applyImport} disabled={!importQuestions.length}
                  className="rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white hover:bg-indigo-700 disabled:opacity-45">
                  Thêm ({importQuestions.length} câu)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (phase === 'running') {
    const q = questions[currentIdx]
    const answered = Object.keys(answers).length
    const mins = Math.floor(timeLeft / 60)
    const secs = timeLeft % 60
    const lowTime = timeLeft < 60
    const hasPassage = q.passage && q.passage.trim().length > 0
    const hasAudio = q.audioScript && q.audioScript.trim().length > 0

    return (
      <div className="mx-auto max-w-5xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button onClick={() => { if (confirm('Thoát? Kết quả không lưu.')) { clearInterval(timerRef.current); stopSpeaking(); setPhase('picker') } }}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> Thoát
          </button>
          <div className={`flex items-center gap-2 rounded-xl px-4 py-2 font-bold tabular-nums ${
            lowTime ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-slate-100 text-slate-700'
          }`}>
            <Clock3 className="h-4 w-4" />
            {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
          </div>
        </div>

        <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all"
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
          <div className="space-y-4">
            {/* PASSAGE cho Reading */}
            {hasPassage && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    📖 Đoạn văn cần đọc
                  </span>
                  {q.itemTitle && (
                    <span className="text-xs font-medium text-slate-500">Bài: {q.itemTitle}</span>
                  )}
                </div>
                <article className="max-h-72 overflow-y-auto rounded-xl bg-slate-50 p-4 leading-8 text-slate-800">
                  {q.passage.split('\n').map((p, i) => (
                    <p key={i} className="mb-2 last:mb-0">{p}</p>
                  ))}
                </article>
              </div>
            )}

            {/* AUDIO PLAYER cho Listening */}
            {hasAudio && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
                        🎧 Bài nghe
                      </span>
                      {q.itemTitle && (
                        <span className="text-xs font-medium text-slate-500">{q.itemTitle}</span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-slate-500">
                      Bấm nút Phát để nghe đoạn băng. Có thể nghe lại nhiều lần.
                    </p>
                  </div>
                  <button
                    onClick={handlePlayAudio}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-sm transition active:scale-[.98] ${
                      playing ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-sky-600 hover:bg-sky-700'
                    }`}
                  >
                    {playing ? (
                      <>
                        <Square className="h-4 w-4" fill="white" /> Đang phát...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" fill="white" /> Phát audio
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* CÂU HỎI */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                  {q.sourceIcon} {q.source}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{q.cefr}</span>
                <span className="ml-auto text-sm text-slate-500 tabular-nums">Câu {currentIdx + 1}/{questions.length}</span>
              </div>

              <h2 className="text-xl font-semibold leading-8">{q.question}</h2>

              <div className="mt-5 space-y-3">
                {q.choices.map((c, i) => {
                  const chosen = answers[q.id] === i
                  const isChecked = !!checked[q.id]
                  const right = isChecked && i === q.answer
                  const wrong = isChecked && chosen && i !== q.answer
                  return (
                    <button key={i} onClick={() => pickAnswer(i)} disabled={isChecked}
                      className={`flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition ${
                        right ? 'border-emerald-500 bg-emerald-50'
                        : wrong ? 'border-red-500 bg-red-50'
                        : chosen ? 'border-indigo-600 bg-indigo-50'
                        : 'border-slate-200 hover:border-indigo-300'
                      }`}>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border font-bold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="flex-1">{c}</span>
                      {right && <CheckCircle2 className="text-emerald-600" />}
                      {wrong && <XCircle className="text-red-600" />}
                    </button>
                  )
                })}
              </div>

              {checked[q.id] && q.explain && (
                <div className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm text-amber-950">
                  <strong>Giải thích: </strong>{q.explain}
                </div>
              )}

              <div className="mt-6 flex flex-wrap justify-between gap-2">
                <button onClick={() => setCurrentIdx(i => Math.max(0, i - 1))} disabled={currentIdx === 0}
                  className="rounded-xl border border-slate-300 px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-45">
                  ← Câu trước
                </button>
                {currentIdx < questions.length - 1 ? (
                  <button onClick={() => setCurrentIdx(i => Math.min(questions.length - 1, i + 1))}
                    className="rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white hover:bg-indigo-700">Câu sau →</button>
                ) : (
                  <button onClick={() => finishExam(false)}
                    className="rounded-xl bg-emerald-600 px-4 py-2.5 font-semibold text-white hover:bg-emerald-700">Nộp bài</button>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:h-fit">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Danh sách câu</h3>
              <span className="text-sm text-slate-500 tabular-nums">{answered}/{questions.length}</span>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {questions.map((it, i) => {
                const a = answers[it.id]
                const c = checked[it.id]
                const right = c && a === it.answer
                const wrong = c && a !== undefined && a !== it.answer
                return (
                  <button key={it.id} onClick={() => setCurrentIdx(i)}
                    className={`h-9 rounded-lg text-sm font-bold tabular-nums transition ${
                      i === currentIdx ? 'ring-2 ring-indigo-600 ring-offset-2'
                      : right ? 'bg-emerald-500 text-white'
                      : wrong ? 'bg-red-500 text-white'
                      : a !== undefined ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}>{i + 1}</button>
                )
              })}
            </div>
            <button onClick={() => finishExam(false)}
              className="mt-5 w-full rounded-xl bg-emerald-600 px-4 py-2.5 font-semibold text-white hover:bg-emerald-700">
              Nộp bài ({answered}/{questions.length})
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (phase === 'result' && result) {
    const pct = Math.round((result.score / result.total) * 100)
    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-amber-100 text-amber-600">
            <Trophy size={48} />
          </div>
          <h1 className="mt-5 text-4xl font-black">{result.label}</h1>
          <p className="mt-2 text-slate-500">{result.mode}</p>
          {result.autoSubmitted && <p className="mt-1 text-sm text-red-500">⏰ Hết thời gian – tự động nộp</p>}
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <ResultStat icon={<Target />} label="Điểm" value={`${result.score}/${result.total}`} />
          <ResultStat icon={<Sparkles />} label="Tỉ lệ" value={`${pct}%`} />
          <ResultStat icon={<Trophy />} label="Xếp cấp" value={result.cefr} />
          <ResultStat icon={<Clock3 />} label="Thời gian" value={`${Math.floor(result.timeUsed / 60)}p${result.timeUsed % 60}s`} />
        </div>

        {result.wrong.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">Câu sai ({result.wrong.length})</h2>
            <div className="mt-4 space-y-3">
              {result.wrong.map((q) => (
                <div key={q.id} className="rounded-xl border border-red-100 bg-red-50 p-4">
                  <div className="text-xs font-bold text-red-600">{q.source} · {q.cefr}</div>
                  {q.passage && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-xs font-semibold text-slate-600 hover:text-slate-800">
                        Xem đoạn văn
                      </summary>
                      <p className="mt-2 rounded bg-white p-2 text-xs leading-6 text-slate-700">{q.passage}</p>
                    </details>
                  )}
                  <div className="mt-2 font-semibold">{q.question}</div>
                  <div className="mt-2 text-sm text-red-700">Đáp án đúng: {q.choices[q.answer]}</div>
                  {q.explain && <div className="mt-1 text-sm text-slate-600">{q.explain}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={() => setPhase('picker')}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white hover:bg-indigo-700">
            <RotateCcw className="h-4 w-4" /> Chọn kỳ thi khác
          </button>
          <button onClick={onBack}
            className="rounded-xl border border-slate-300 px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50">
            Về trang chủ
          </button>
        </div>
      </div>
    )
  }

  return null
}

function ResultStat({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-indigo-100 text-indigo-700">{icon}</div>
      <div className="mt-2 text-xl font-black tabular-nums">{value}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  )
}