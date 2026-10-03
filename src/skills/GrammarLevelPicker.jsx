import { ArrowLeft, ChevronRight, GraduationCap } from 'lucide-react'

export const GRAMMAR_LEVELS = [
  {
    id: 'Basic',
    title: 'Cơ bản',
    desc: 'Toàn bộ 13 chủ điểm ở mức nền tảng — dễ tiếp cận',
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 'Intermediate',
    title: 'Trung cấp',
    desc: 'Toàn bộ 13 chủ điểm ở mức vừa — vận dụng giao tiếp',
    color: 'from-sky-500 to-blue-700'
  },
  {
    id: 'Advanced',
    title: 'Nâng cao',
    desc: 'Toàn bộ 13 chủ điểm ở mức khó — chinh phục B2–C1',
    color: 'from-rose-500 to-pink-700'
  }
]

export default function GrammarLevelPicker({ onPick, onBack, totalQuestions = 430 }) {
  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" /> Về trang chủ
      </button>

      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white shadow-lg md:p-10">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-white/15 p-2"><GraduationCap /></span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-medium">Chọn cấp độ</span>
        </div>
        <h1 className="mt-4 text-3xl font-black md:text-4xl">Ngữ pháp tiếng Anh</h1>
        <p className="mt-2 max-w-2xl text-blue-100">
          Mỗi cấp độ bao gồm <strong>đủ 13 chủ điểm ngữ pháp</strong> — từ cấu trúc câu, các thì, điều kiện, bị động đến mệnh đề quan hệ. Chỉ khác nhau về độ khó câu hỏi.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white/15 px-3 py-1">📚 13 chủ điểm / cấp</span>
          <span className="rounded-full bg-white/15 px-3 py-1">✍️ ~{totalQuestions}+ câu hỏi</span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {GRAMMAR_LEVELS.map(level => (
          <button key={level.id} onClick={() => onPick(level.id)}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${level.color} p-6 text-left text-white shadow-md transition hover:scale-[1.02] hover:shadow-xl`}>
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20 backdrop-blur">
                <GraduationCap className="h-6 w-6" />
              </div>
              <ChevronRight className="h-5 w-5 opacity-70 transition group-hover:translate-x-1" />
            </div>
            <h3 className="mt-4 text-2xl font-black">{level.title}</h3>
            <p className="mt-1 text-sm text-white/85">{level.desc}</p>
            <div className="mt-4 flex gap-2 text-xs">
              <span className="rounded-full bg-white/15 px-2.5 py-0.5">13 chủ điểm</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}