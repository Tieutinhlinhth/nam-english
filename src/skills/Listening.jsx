import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Play, Pause, RotateCcw, CheckCircle2, XCircle, Gauge, ChevronLeft } from 'lucide-react'
import { getCefrMeta, getLevelText } from './config'
import { filterByCefr } from './data'
import { useContent } from './contentStore'
import LevelPicker from './LevelPicker'
import { stopSpeaking, speechSupported, wordOverlap } from './utils'

const Btn = ({ children, variant = 'primary', className = '', ...p }) => (
  <button
    className={`rounded-xl px-4 py-2.5 font-semibold transition disabled:opacity-45 ${
      variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700'
      : variant === 'danger' ? 'bg-red-600 text-white hover:bg-red-700'
      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
    } ${className}`}
    {...p}
  >{children}</button>
)

export default function Listening({ onComplete, onBack }) {
  const content = useContent()
  const ALL_ITEMS = content.listening || []

  const [selectedLevel, setSelectedLevel] = useState(null)
  const [mode, setMode] = useState('comprehension')
  const [idx, setIdx] = useState(0)
  const [rate, setRate] = useState(0.9)
  const [playing, setPlaying] = useState(false)
  const [resp, setResp] = useState({})
  const [checked, setChecked] = useState(false)
  const [dictation, setDictation] = useState('')
  const [dictResult, setDictResult] = useState(null)

  const synthOK = useMemo(() => speechSupported(), [])

  const items = useMemo(
    () => selectedLevel ? filterByCefr(ALL_ITEMS, selectedLevel) : [],
    [selectedLevel, ALL_ITEMS]
  )

  const item = items[idx]

  useEffect(() => () => stopSpeaking(), [])
  useEffect(() => {
    setIdx(0); setResp({}); setChecked(false); setDictation(''); setDictResult(null)
  }, [selectedLevel])

  if (!selectedLevel) {
    return (
      <LevelPicker
        skillId="listening"
        items={ALL_ITEMS}
        onPick={lvl => setSelectedLevel(lvl)}
        onBack={onBack}
      />
    )
  }

  if (!item) return null
  const meta = getCefrMeta(selectedLevel)

  const play = () => {
    if (!synthOK) return
    stopSpeaking()
    const u = new SpeechSynthesisUtterance(item.script)
    u.lang = item.accent
    u.rate = rate
    const voices = window.speechSynthesis.getVoices()
    const v = voices.find(x => x.lang === item.accent) || voices.find(x => x.lang.startsWith('en'))
    if (v) u.voice = v
    u.onend = () => setPlaying(false)
    u.onerror = () => setPlaying(false)
    setPlaying(true)
    window.speechSynthesis.speak(u)
  }

  const stop = () => { stopSpeaking(); setPlaying(false) }
  const reset = () => { setResp({}); setChecked(false); setDictation(''); setDictResult(null) }
  const next = () => {
    reset()
    if (idx < items.length - 1) setIdx(i => i + 1)
    else setSelectedLevel(null)
  }
  const prev = () => { reset(); setIdx(i => Math.max(0, i - 1)) }

  const submit = () => {
    if (mode === 'comprehension') setChecked(true)
    else {
      const score = Math.round(wordOverlap(dictation, item.dictation) * 100)
      setDictResult({ score, correct: item.dictation })
      onComplete?.(`${item.id}-dictation`, score)
    }
  }

  const score = mode === 'comprehension'
    ? item.questions.reduce((s, q, i) => s + (resp[i] === q.answer ? 1 : 0), 0)
    : null

  const finish = () => {
    if (mode === 'comprehension') {
      const pct = Math.round(score / item.questions.length * 100)
      onComplete?.(item.id, pct)
    }
    next()
  }

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => { stop(); setSelectedLevel(null); setIdx(0); reset() }}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900"
        >
          <ChevronLeft className="h-4 w-4" /> Chọn cấp độ khác
        </button>
        <div className="flex gap-1 rounded-xl bg-slate-100 p-1">
          <button
            onClick={() => { setMode('comprehension'); reset() }}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${mode === 'comprehension' ? 'bg-white shadow text-blue-700' : 'text-slate-600'}`}
          >
            Nghe – trả lời
          </button>
          <button
            onClick={() => { setMode('dictation'); reset() }}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${mode === 'dictation' ? 'bg-white shadow text-blue-700' : 'text-slate-600'}`}
          >
            Chép chính tả
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-sm">
              <span className={`rounded-full bg-gradient-to-r ${meta.color} px-2.5 py-0.5 text-xs font-bold text-white`}>
                {meta.id}
              </span>
              <span className="text-slate-500">
                Bài {idx + 1}/{items.length} · {getLevelText(item.cefr)}
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-bold">{item.title}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-slate-400" />
            <input
              type="range" min="0.6" max="1.2" step="0.05"
              value={rate}
              onChange={e => setRate(parseFloat(e.target.value))}
              className="w-28"
            />
            <span className="text-sm text-slate-500">{rate.toFixed(2)}x</span>
          </div>
        </div>

        {!synthOK && (
          <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
            Trình duyệt không hỗ trợ Text-to-Speech. Hãy dùng Chrome/Edge/Safari bản mới.
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <Btn onClick={play} disabled={!synthOK || playing}>
            <Play className="mr-2 inline h-4 w-4" />{playing ? 'Đang phát...' : 'Phát'}
          </Btn>
          <Btn variant="ghost" onClick={stop} disabled={!playing}>
            <Pause className="mr-2 inline h-4 w-4" />Dừng
          </Btn>
          <Btn variant="ghost" onClick={() => { stop(); play() }} disabled={!synthOK}>
            <RotateCcw className="mr-2 inline h-4 w-4" />Nghe lại
          </Btn>
        </div>
      </div>

      {mode === 'comprehension' && (
        <div className="space-y-4">
          {item.questions.map((q, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-semibold">{i + 1}. {q.q}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {q.choices.map((c, j) => {
                  const chosen = resp[i] === j
                  const right = checked && j === q.answer
                  const wrong = checked && chosen && j !== q.answer
                  return (
                    <button key={j} disabled={checked}
                      onClick={() => setResp(r => ({ ...r, [i]: j }))}
                      className={`flex items-center gap-3 rounded-xl border-2 p-3 text-left transition ${
                        right ? 'border-emerald-500 bg-emerald-50'
                        : wrong ? 'border-red-500 bg-red-50'
                        : chosen ? 'border-blue-600 bg-blue-50'
                        : 'border-slate-200 hover:border-blue-300'
                      }`}>
                      <span className="grid h-7 w-7 place-items-center rounded-full border text-sm font-bold">
                        {String.fromCharCode(65 + j)}
                      </span>
                      <span>{c}</span>
                      {right && <CheckCircle2 className="ml-auto h-5 w-5 text-emerald-600" />}
                      {wrong && <XCircle className="ml-auto h-5 w-5 text-red-600" />}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
          <div className="flex flex-wrap justify-between gap-2">
            <Btn variant="ghost" onClick={prev} disabled={idx === 0}>
              <ArrowLeft className="mr-2 inline h-4 w-4" />Bài trước
            </Btn>
            <div className="flex gap-2">
              {!checked
                ? <Btn onClick={submit} disabled={Object.keys(resp).length < item.questions.length}>Chấm điểm</Btn>
                : <Btn onClick={finish}>{idx < items.length - 1 ? 'Bài tiếp theo' : 'Hoàn thành'}</Btn>}
            </div>
          </div>
          {checked && (
            <div className="rounded-2xl bg-blue-50 p-4 text-blue-900">
              <strong>Kết quả: {score}/{item.questions.length}</strong>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm">Xem transcript</summary>
                <p className="mt-2 text-sm italic">{item.script}</p>
              </details>
            </div>
          )}
        </div>
      )}

      {mode === 'dictation' && (
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-slate-600">Nghe và gõ lại chính xác câu bạn nghe được.</p>
          <textarea
            rows="3"
            value={dictation}
            onChange={e => setDictation(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3 font-mono text-sm"
            placeholder="Type what you hear..."
          />
          <div className="flex flex-wrap justify-between gap-2">
            <Btn variant="ghost" onClick={prev} disabled={idx === 0}>Bài trước</Btn>
            <div className="flex gap-2">
              <Btn onClick={submit} disabled={!dictation.trim()}>Chấm điểm</Btn>
              {dictResult && (
                <Btn onClick={finish}>
                  {idx < items.length - 1 ? 'Bài tiếp theo' : 'Hoàn thành'}
                </Btn>
              )}
            </div>
          </div>
          {dictResult && (
            <div className={`rounded-xl p-4 ${dictResult.score >= 80 ? 'bg-emerald-50 text-emerald-900' : 'bg-amber-50 text-amber-900'}`}>
              <div className="font-bold">Độ khớp: {dictResult.score}%</div>
              <div className="mt-2 text-sm">Câu gốc: <em>{dictResult.correct}</em></div>
              <div className="mt-1 text-sm">Bạn viết: <em>{dictation}</em></div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}