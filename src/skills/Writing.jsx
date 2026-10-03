import { useEffect, useMemo, useState } from 'react'
import { PenLine, Eye, EyeOff, RotateCcw, ChevronLeft } from 'lucide-react'
import { getCefrMeta, getLevelText } from './config'
import { filterByCefr } from './data'
import { useContent } from './contentStore'
import LevelPicker from './LevelPicker'
import { scoreWriting } from './utils'

export default function Writing({ onComplete, onBack }) {
  const content = useContent()
  const ALL_ITEMS = content.writing || []

  const [selectedLevel, setSelectedLevel] = useState(null)
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [showSample, setShowSample] = useState(false)

  const items = useMemo(
    () => selectedLevel ? filterByCefr(ALL_ITEMS, selectedLevel) : [],
    [selectedLevel, ALL_ITEMS]
  )

  const item = items[idx]

  useEffect(() => {
    setIdx(0); setText(''); setResult(null); setShowSample(false)
  }, [selectedLevel])

  const live = useMemo(() => {
    if (!item) return { words: 0, target: 0, ok: false }
    const w = text.trim().split(/\s+/).filter(Boolean).length
    return { words: w, target: item.minWords, ok: w >= item.minWords }
  }, [text, item])

  if (!selectedLevel) {
    return (
      <LevelPicker
        skillId="writing"
        items={ALL_ITEMS}
        onPick={lvl => setSelectedLevel(lvl)}
        onBack={onBack}
      />
    )
  }

  if (!item) return null
  const meta = getCefrMeta(selectedLevel)

  const reset = () => { setText(''); setResult(null); setShowSample(false) }

  const check = () => {
    const r = scoreWriting(text, { minWords: item.minWords, keywords: item.keywords })
    setResult(r)
    onComplete?.(item.id, r.score)
  }

  const next = () => {
    reset()
    if (idx < items.length - 1) setIdx(i => i + 1)
    else setSelectedLevel(null)
  }
  const prev = () => { reset(); setIdx(i => Math.max(0, i - 1)) }

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div className="flex items-center justify-between">
        <button
          onClick={() => { setSelectedLevel(null); setIdx(0); reset() }}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900"
        >
          <ChevronLeft className="h-4 w-4" /> Chọn cấp độ khác
        </button>
        <div className="flex items-center gap-2 text-sm">
          <span className={`rounded-full bg-gradient-to-r ${meta.color} px-2.5 py-0.5 text-xs font-bold text-white`}>
            {meta.id}
          </span>
          <span className="text-slate-500">Bài {idx + 1}/{items.length} · {getLevelText(item.cefr)}</span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-100 text-amber-700">
            <PenLine />
          </div>
          <h1 className="text-2xl font-bold">{item.title}</h1>
        </div>
        <p className="mt-3 text-slate-700">{item.prompt}</p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {item.keywords.map(k => (
            <span key={k} className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">#{k}</span>
          ))}
        </div>

        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows="9"
          placeholder="Viết bài của bạn bằng tiếng Anh..."
          className="mt-5 w-full rounded-2xl border border-slate-300 p-4 leading-7 outline-none focus:border-blue-500"
        />

        <div className="mt-2 flex items-center justify-between text-sm">
          <span className={live.ok ? 'text-emerald-600' : 'text-slate-500'}>
            {live.words}/{live.target} từ tối thiểu
          </span>
          <span className="text-slate-400">{text.length} ký tự</span>
        </div>

        <div className="mt-5 flex flex-wrap justify-between gap-2">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50"
          >
            <RotateCcw className="h-4 w-4" /> Xóa
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setShowSample(s => !s)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50"
            >
              {showSample ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showSample ? 'Ẩn bài mẫu' : 'Xem bài mẫu'}
            </button>
            <button
              onClick={check}
              disabled={!text.trim()}
              className="rounded-xl bg-amber-600 px-4 py-2.5 font-semibold text-white hover:bg-amber-700 disabled:opacity-45"
            >
              Chấm điểm
            </button>
          </div>
        </div>

        {showSample && (
          <div className="mt-4 rounded-xl bg-slate-50 p-4">
            <div className="text-xs font-bold uppercase text-slate-500">Bài mẫu</div>
            <p className="mt-2 leading-7 text-slate-800">{item.sample}</p>
          </div>
        )}

        {result && (
          <div className="mt-5 space-y-3">
            <div className={`rounded-2xl p-4 ${
              result.score >= 80 ? 'bg-emerald-50 text-emerald-900'
              : result.score >= 50 ? 'bg-amber-50 text-amber-900'
              : 'bg-red-50 text-red-900'
            }`}>
              <div className="text-lg font-bold">Điểm sơ bộ: {result.score}/100</div>
              <div className="text-sm">Số từ: {result.words} · Số câu: {result.sentences}</div>
            </div>
            {result.notes.length > 0 && (
              <ul className="list-disc space-y-1 rounded-xl bg-slate-50 p-4 pl-8 text-sm text-slate-700">
                {result.notes.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            )}
            <div className="flex flex-wrap justify-between gap-2">
              <button
                onClick={prev}
                disabled={idx === 0}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-45"
              >
                Bài trước
              </button>
              <button
                onClick={next}
                className="rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700"
              >
                {idx < items.length - 1 ? 'Bài tiếp theo' : 'Hoàn thành'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}