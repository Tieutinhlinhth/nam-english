// Web Speech helpers + scoring (Nghe – Nói – Viết)
export const speechSupported = () =>
  typeof window !== 'undefined' && 'speechSynthesis' in window

export const speak = (text, { rate = 0.9, lang = 'en-US', pitch = 1, onEnd } = {}) => {
  if (!speechSupported()) return false
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang
  u.rate = rate
  u.pitch = pitch
  const voices = window.speechSynthesis.getVoices()
  const prefer =
    voices.find(v => v.lang === lang && /female|samantha|zira|aria|google us/i.test(v.name)) ||
    voices.find(v => v.lang === lang) ||
    voices.find(v => v.lang.startsWith('en'))
  if (prefer) u.voice = prefer
  if (onEnd) u.onend = onEnd
  window.speechSynthesis.speak(u)
  return true
}

export const stopSpeaking = () => {
  try { window.speechSynthesis?.cancel() } catch {}
}

export const getRecognition = () => {
  if (typeof window === 'undefined') return null
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!SR) return null
  const r = new SR()
  r.lang = 'en-US'
  r.interimResults = false
  r.maxAlternatives = 3
  r.continuous = false
  return r
}

export const normalize = s =>
  (s || '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s']/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()

export const wordOverlap = (spoken, target) => {
  const a = normalize(spoken).split(' ').filter(Boolean)
  const t = normalize(target).split(' ').filter(Boolean)
  if (!t.length) return 0
  const set = new Set(a)
  const hit = t.filter(w => set.has(w)).length
  return hit / t.length
}

export const charSimilarity = (a, b) => {
  a = normalize(a); b = normalize(b)
  if (!a || !b) return 0
  const m = a.length, n = b.length
  if (Math.abs(m - n) > Math.max(m, n) * 0.7) return 0
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)])
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
  return 1 - dp[m][n] / Math.max(m, n)
}

export const scorePronunciation = (spoken, target) => {
  const w = wordOverlap(spoken, target)
  const c = charSimilarity(spoken, target)
  return Math.round((w * 0.7 + c * 0.3) * 100)
}

export const scoreWriting = (
  text,
  { minWords = 40, keywords = [], mustEndWithPeriod = true } = {}
) => {
  const words = (text || '').trim().split(/\s+/).filter(Boolean)
  const n = words.length
  const notes = []
  let score = 0

  if (n === 0) return { score: 0, words: 0, sentences: 0, notes: ['Bạn chưa viết gì.'] }

  const lengthRatio = Math.min(1, n / minWords)
  score += Math.round(lengthRatio * 30)
  if (n < minWords) notes.push(`Nên viết ít nhất ${minWords} từ (bạn viết ${n}).`)

  if (keywords.length) {
    const low = normalize(text)
    const hit = keywords.filter(k => low.includes(normalize(k))).length
    score += Math.round((hit / keywords.length) * 30)
    if (hit < keywords.length) {
      const missing = keywords.filter(k => !low.includes(normalize(k)))
      notes.push(`Thiếu ý/từ khóa gợi ý: ${missing.join(', ')}.`)
    }
  } else score += 30

  let gram = 20
  if (text[0] !== text[0].toUpperCase()) {
    gram -= 5
    notes.push('Câu đầu nên viết hoa chữ cái đầu.')
  }
  if (mustEndWithPeriod && !/[.!?]\s*$/.test(text.trim())) {
    gram -= 4
    notes.push('Câu cuối nên có dấu kết câu (. ! ?).')
  }
  if (/\s{2,}/.test(text)) {
    gram -= 3
    notes.push('Có khoảng trắng dư thừa.')
  }
  if (/[a-z]\.[a-z]/i.test(text)) {
    gram -= 4
    notes.push('Cần dấu cách sau dấu chấm câu.')
  }
  score += Math.max(0, gram)

  const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(Boolean)
  const uniqRatio = sentences.length
    ? new Set(sentences.map(normalize)).size / sentences.length
    : 0
  score += Math.round(uniqRatio * 20)
  if (sentences.length < 3) notes.push('Nên viết từ 3 câu trở lên để rõ ý.')

  return {
    score: Math.min(100, score),
    words: n,
    sentences: sentences.length,
    notes
  }
}