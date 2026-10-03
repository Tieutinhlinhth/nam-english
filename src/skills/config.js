// ============================================================
// Cấu hình CEFR + metadata kỹ năng
// Muốn thêm cấp mới → thêm 1 dòng vào CEFR_LEVELS
// Muốn thêm kỹ năng mới → thêm 1 entry vào SKILLS
// ============================================================

export const CEFR_LEVELS = [
  { id: 'A1', group: 'Sơ cấp',     title: 'A1 – Beginner',              desc: 'Mẫu câu đơn giản, từ vựng hàng ngày',           color: 'from-emerald-400 to-emerald-600' },
  { id: 'A2', group: 'Sơ cấp',     title: 'A2 – Elementary',            desc: 'Tình huống quen thuộc, câu ngắn',                 color: 'from-teal-500 to-teal-700' },
  { id: 'B1', group: 'Trung cấp',  title: 'B1 – Intermediate',          desc: 'Công việc, du lịch, kể chuyện',                   color: 'from-sky-500 to-blue-700' },
  { id: 'B2', group: 'Trung cấp',  title: 'B2 – Upper Intermediate',    desc: 'Thảo luận, tranh luận, email chuyên nghiệp',      color: 'from-violet-500 to-purple-700' },
  { id: 'C1', group: 'Cao cấp',    title: 'C1 – Advanced',              desc: 'Trôi chảy, học thuật, thuyết trình',              color: 'from-rose-500 to-pink-700' },
  { id: 'C2', group: 'Cao cấp',    title: 'C2 – Proficient',            desc: 'Gần như người bản xứ, mọi chủ đề phức tạp',       color: 'from-amber-500 to-orange-700' }
]

export const LEVEL_GROUPS = [
  { name: 'Sơ cấp',    ids: ['A1', 'A2'] },
  { name: 'Trung cấp', ids: ['B1', 'B2'] },
  { name: 'Cao cấp',   ids: ['C1', 'C2'] }
]

export const SKILLS = {
  listening: { title: 'Listening', subtitle: 'Nghe – trả lời & chép chính tả theo cấp độ CEFR.' },
  speaking:  { title: 'Speaking',  subtitle: 'Đọc theo mẫu, chấm phát âm tức thì bằng nhận diện giọng nói.' },
  reading:   { title: 'Reading',   subtitle: 'Đọc hiểu và trả lời trắc nghiệm theo cấp độ.' },
  writing:   { title: 'Writing',   subtitle: 'Viết luận theo đề, chấm sơ bộ, có bài mẫu tham khảo.' }
}

export const getCefrMeta = id =>
  CEFR_LEVELS.find(l => l.id === id) || CEFR_LEVELS[0]

export const getLevelText = cefr =>
  ['A1', 'A2'].includes(cefr) ? 'Cơ bản'
  : ['B1', 'B2'].includes(cefr) ? 'Vừa'
  : 'Nâng cao'