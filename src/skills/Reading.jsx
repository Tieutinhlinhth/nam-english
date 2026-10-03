import { useState } from 'react'
import { ArrowLeft, CheckCircle2, XCircle, BookOpenCheck } from 'lucide-react'
import { READING } from './data'

export default function Reading({ onComplete, onBack }) {
  const [idx, setIdx] = useState(0)
  const [resp, setResp] = useState({})
  const [checked, setChecked] = useState(false)
  const item = READING[idx]

  const reset = () => { setResp({}); setChecked(false) }
  const next = () => {
    reset()
    if (idx < READING.length - 1) setIdx(i => i + 1)
    else onBack()
  }
  const prev = () => {
    reset()
    setIdx(i => Math.max(0, i - 1))
  }
  const score = item.questions.reduce((s, q, i) => s + (resp[i] === q.answer ? 1 : 0), 0)

  const submit = () => {
    setChecked(true)
    onComplete?.(item.id, Math.round(score / item.questions.length * 100))
  }

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" /> Quay lại
        </button>
        <div className="text-sm text-slate-500">Bài {idx + 1}/{READING.length} · {item.level}</div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
            <BookOpenCheck />
          </div>
          <h1 className="text-2xl font-bold">{item.title}</h1>
        </div>
        <article className="mt-5 max-w-none leading-8 text-slate-800">
          {item.passage.split('\n').map((p, i) => <p key={i} className="mt-3">{p}</p>)}
        </article>
      </div>

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
          <button onClick={prev} disabled={idx === 0}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-45">
            Bài trước
          </button>
          {!checked
            ? <button onClick={submit} disabled={Object.keys(resp).length < item.questions.length}
                className="rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-45">
                Chấm điểm
              </button>
            : <button onClick={next}
                className="rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700">
                {idx < READING.length - 1 ? 'Bài tiếp theo' : 'Hoàn thành'}
              </button>}
        </div>

        {checked && (
          <div className="rounded-2xl bg-blue-50 p-4 text-blue-900">
            <strong>Kết quả: {score}/{item.questions.length}</strong>
          </div>
        )}
      </div>
    </div>
  )
}