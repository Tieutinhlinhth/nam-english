import { ArrowLeft, ChevronRight, GraduationCap } from 'lucide-react'
import { CEFR_LEVELS, LEVEL_GROUPS, SKILLS } from './config'
import { getCefrStats } from './data'

export default function LevelPicker({ skillId, items, onPick, onBack }) {
  const meta = SKILLS[skillId] || { title: skillId, subtitle: '' }
  const stats = getCefrStats(items)
  const total = items?.length ?? 0

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" /> Quay lại trang chủ
      </button>

      <div className="rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 p-8 text-white shadow-lg md:p-10">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-white/15 p-2"><GraduationCap /></span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
            Khung CEFR Châu Âu · {total} bài
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-black md:text-4xl">{meta.title}</h1>
        {meta.subtitle && <p className="mt-2 max-w-2xl text-slate-300">{meta.subtitle}</p>}
      </div>

      {LEVEL_GROUPS.map(g => {
        const levels = CEFR_LEVELS.filter(l => g.ids.includes(l.id))
        return (
          <section key={g.name}>
            <h2 className="mb-3 text-xl font-black text-slate-700">{g.name}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {levels.map(l => {
                const count = stats[l.id] || 0
                const disabled = count === 0
                return (
                  <button
                    key={l.id}
                    onClick={() => !disabled && onPick(l.id)}
                    disabled={disabled}
                    className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${l.color} p-6 text-left text-white shadow-md transition ${
                      disabled
                        ? 'cursor-not-allowed opacity-35'
                        : 'hover:scale-[1.02] hover:shadow-xl active:scale-[.99]'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-5xl font-black tabular-nums leading-none">{l.id}</span>
                      <div className="flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-xs font-bold backdrop-blur">
                        {count} bài
                        {!disabled && <ChevronRight className="h-3 w-3" />}
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-black">{l.title}</h3>
                    <p className="mt-1 text-sm text-white/85">{l.desc}</p>
                  </button>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}