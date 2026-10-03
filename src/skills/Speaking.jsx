import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, Mic, MicOff, Volume2, CheckCircle2, XCircle, RotateCcw } from 'lucide-react'
import { SPEAKING } from './data'
import { getRecognition, speak, stopSpeaking, scorePronunciation } from './utils'

export default function Speaking({ onComplete, onBack }) {
  const [idx, setIdx] = useState(0)
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [result, setResult] = useState(null)
  const [showSample, setShowSample] = useState(false)
  const recRef = useRef(null)
  const item = SPEAKING[idx]
  const supported = useMemo(() => !!getRecognition(), [])

  useEffect(() => () => {
    stopSpeaking()
    try { recRef.current?.stop() } catch {}
  }, [])

  const startListen = () => {
    const rec = getRecognition()
    if (!rec) return
    recRef.current = rec
    setTranscript(''); setResult(null)
    rec.onresult = e => {
      const text = Array.from(e.results).map(r => r[0].transcript).join(' ')
      setTranscript(text)
      const score = scorePronunciation(text, item.target)
      setResult({ score, text })
      onComplete?.(item.id, score)
    }
    rec.onerror = e => setResult({ score: 0, text: '', error: e.error })
    rec.onend = () => setListening(false)
    try { rec.start(); setListening(true) } catch { setListening(false) }
  }

  const stopListen = () => {
    try { recRef.current?.stop() } catch {}
    setListening(false)
  }

  const next = () => {
    setTranscript(''); setResult(null); setShowSample(false); stopSpeaking()
    if (idx < SPEAKING.length - 1) setIdx(i => i + 1)
    else onBack()
  }

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" /> Quay lại
        </button>
        <div className="text-sm text-slate-500">Bài {idx + 1}/{SPEAKING.length} · {item.level}</div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <p className="mt-3 text-slate-700">{item.prompt}</p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <div className="text-xs font-bold uppercase text-slate-500">Câu mẫu</div>
          {showSample
            ? <p className="mt-2 text-slate-800">{item.target}</p>
            : <button onClick={() => setShowSample(true)} className="mt-2 text-sm font-semibold text-blue-600">
                Nhấn để xem câu mẫu
              </button>}
          <button onClick={() => speak(item.target, { rate: 0.85 })}
            className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
            <Volume2 className="h-4 w-4" /> Nghe mẫu
          </button>
        </div>

        <div className="mt-6 grid place-items-center">
          <button onClick={listening ? stopListen : startListen} disabled={!supported}
            className={`grid h-24 w-24 place-items-center rounded-full text-white shadow-lg transition ${
              listening ? 'bg-red-600 animate-pulse' : 'bg-blue-600 hover:bg-blue-700'
            } disabled:opacity-40`}>
            {listening ? <MicOff size={40} /> : <Mic size={40} />}
          </button>
          <p className="mt-3 text-sm text-slate-500">
            {listening ? 'Đang nghe... hãy nói rõ ràng.' : 'Nhấn micro và đọc to theo câu mẫu.'}
          </p>
        </div>

        {!supported && (
          <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
            Trình duyệt không hỗ trợ nhận diện giọng nói. Dùng Chrome/Edge trên desktop hoặc Chrome Android.
          </p>
        )}

        {(transcript || result) && (
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="text-xs font-bold uppercase text-slate-500">Bạn đã nói</div>
              <p className="mt-1 italic text-slate-800">{transcript || '(chưa nhận diện được)'}</p>
            </div>
            {result && (
              <div className={`rounded-xl p-4 ${
                result.score >= 80 ? 'bg-emerald-50 text-emerald-900'
                : result.score >= 50 ? 'bg-amber-50 text-amber-900'
                : 'bg-red-50 text-red-900'
              }`}>
                <div className="flex items-center gap-2">
                  {result.score >= 80 ? <CheckCircle2 /> : <XCircle />}
                  <strong>Điểm phát âm ước lượng: {result.score}/100</strong>
                </div>
                {result.error && (
                  <p className="mt-1 text-sm">
                    Lỗi: {result.error}. Hãy cấp quyền micro và thử lại.
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-between gap-2">
          <button onClick={() => { setTranscript(''); setResult(null); setShowSample(false) }}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50">
            <RotateCcw className="h-4 w-4" /> Thử lại
          </button>
          <button onClick={next}
            className="rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700">
            {idx < SPEAKING.length - 1 ? 'Bài tiếp theo' : 'Hoàn thành'}
          </button>
        </div>
      </div>
    </div>
  )
}