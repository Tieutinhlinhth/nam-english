import { LISTENING } from './listening'
import { SPEAKING } from './speaking'
import { READING } from './reading'
import { WRITING } from './writing'

export const DEFAULT_CONTENT = {
  listening: LISTENING,
  speaking: SPEAKING,
  reading: READING,
  writing: WRITING
}

// Nhận items array, filter theo cấp CEFR
export const filterByCefr = (items, cefr) =>
  (items || []).filter(it => it.cefr === cefr)

// Đếm số bài mỗi cấp
export const getCefrStats = (items) => {
  const stats = {}
  ;(items || []).forEach(it => { stats[it.cefr] = (stats[it.cefr] || 0) + 1 })
  return stats
}

export const SKILL_TOTALS = {
  listening: LISTENING.length,
  speaking: SPEAKING.length,
  reading: READING.length,
  writing: WRITING.length
}

export { LISTENING, SPEAKING, READING, WRITING }