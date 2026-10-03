import { Headphones, Mic, BookOpenCheck, PenLine, ChevronRight } from 'lucide-react'
import { useContent } from './contentStore'

const SKILLS = [
  { id: 'listening', icon: <Headphones />,    title: 'Listening', vi: 'Luyện nghe',   desc: 'Nghe – trả lời & chép chính tả', color: 'from-sky-500 to-blue-700' },
  { id: 'speaking',  icon: <Mic />,           title: 'Speaking',  vi: 'Luyện nói',    desc: 'Đọc theo mẫu, chấm phát âm',     color: 'from-rose-500 to-pink-700' },
  { id: 'reading',   icon: <BookOpenCheck />, title: 'Reading',   vi: 'Đọc hiểu',     desc: 'Trắc nghiệm theo cấp độ',        color: 'from-emerald-500 to-teal-700' },
  { id: 'writing',   icon: <PenLine />,       title: 'Writing',   vi: 'Luyện viết',   desc: 'Chấm sơ bộ + bài mẫu',           color: 'from-amber-500 to-orange-700' }
]

export default function SkillsSection({ go }) {
  const content = useContent()

  return (
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-black md:text-3xl">4 kỹ năng</h2>
        <p className="mt-1 text-slate-500">
          Nghe – Nói – Đọc – Viết, luyện tương tác ngay trong trình duyệt.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map(s => {
          const total = (content[s.id] || []).length
          return (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${s.color} p-5 text-left text-white shadow-md transition hover:scale-[1.02] hover:shadow-xl active:scale-[.99]`}
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/20 backdrop-blur">
                  <span className="[&>svg]:h-6 [&>svg]:w-6">{s.icon}</span>
                </div>
                <ChevronRight className="h-5 w-5 opacity-70 transition group-hover:translate-x-1" />
              </div>
              <h3 className="mt-4 text-lg font-black">{s.title}</h3>
              <p className="text-xs text-white/85">{s.vi}</p>
              <p className="mt-2 text-xs text-white/75">{s.desc}</p>
              <div className="mt-4 text-xs font-bold tabular-nums text-white/90">{total} bài</div>
            </button>
          )
        })}
      </div>
    </section>
  )
}