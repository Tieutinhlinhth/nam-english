// ============================================================
// Parser cho đề Word theo cấu trúc Azota
// Nhận diện: Nhóm/Phần/Part, Câu/Question, A. B. C. D., dấu * = đáp án đúng
// ============================================================
const clean = (s) =>
  String(s || '').replace(/\u00A0/g, ' ').replace(/[""]/g, '"').replace(/['']/g, "'").trim()

export function parseAzotaText(rawText) {
  const text = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const lines = text.split('\n').map(clean)

  const questions = []
  let currentGroup = ''
  let currentLevel = 'B1'

  const groupRe = /^(?:(?:Phần|Part|Nhóm|CHƯƠNG|UNIT)\s*\d+|[IVX]+)\s*[.:)]/i
  const questionRe = /^(?:Câu|Bài|Question|Q\.?)\s*(\d+)\s*[.:)]/i
  const numberedRe = /^(\d{1,3})\s*[.)]\s+/
  const answerRe = /^(\*?)\s*([A-H])\s*[.:)]\s+(.+)$/i
  const explainRe = /^(?:Lời giải|Hướng dẫn chi tiết|Giải thích chi tiết|Giải thích|Giải)\s*[:.]?/i
  const cefrRe = /(?:Level|Cấp độ|CEFR)\s*[:.]?\s*(A1|A2|B1|B2|C1|C2)/i

  let pendingQuestionText = []
  let pendingChoices = []
  let pendingCorrectIdx = 0
  let pendingExplain = []

  const flush = () => {
    if (!pendingQuestionText.length || pendingChoices.length < 2) {
      pendingQuestionText = []; pendingChoices = []; pendingCorrectIdx = 0; pendingExplain = []
      return
    }
    questions.push({
      q: pendingQuestionText.join(' ').trim(),
      choices: pendingChoices.map(c => c.text),
      answer: pendingCorrectIdx,
      explain: pendingExplain.join(' ').trim(),
      group: currentGroup,
      cefr: currentLevel
    })
    pendingQuestionText = []; pendingChoices = []; pendingCorrectIdx = 0; pendingExplain = []
  }

  for (const line of lines) {
    if (!line) continue
    if (/^={3,}/.test(line) || /^Page \d+/i.test(line) || /^---/.test(line)) continue

    const cefrMatch = line.match(cefrRe)
    if (cefrMatch) { currentLevel = cefrMatch[1].toUpperCase(); continue }

    if (groupRe.test(line) && !questionRe.test(line) && !numberedRe.test(line)) {
      currentGroup = line.replace(/[.:)]\s*$/, '').trim()
      continue
    }

    const qMatch = line.match(questionRe)
    const nMatch = !qMatch ? line.match(numberedRe) : null
    if (qMatch || nMatch) {
      flush()
      const rest = qMatch ? line.replace(questionRe, '').trim() : line.replace(numberedRe, '').trim()
      if (rest) pendingQuestionText.push(rest)
      continue
    }

    const aMatch = line.match(answerRe)
    if (aMatch) {
      const [, star, letter, text] = aMatch
      const idx = letter.toUpperCase().charCodeAt(0) - 65
      pendingChoices.push({ letter, text: text.trim() })
      if (star === '*' && !pendingCorrectIdx) pendingCorrectIdx = idx
      continue
    }

    if (explainRe.test(line)) {
      const rest = line.replace(explainRe, '').trim()
      if (rest) pendingExplain.push(rest)
      continue
    }

    if (!pendingChoices.length) pendingQuestionText.push(line)
    else if (pendingExplain.length) pendingExplain.push(line)
  }
  flush()

  return questions.filter(q => q.choices.length >= 2 && q.q)
}

export function azotaToGrammarQuestions(questions, startId = 1, lessonId = 14) {
  return questions.map((q, i) => ({
    id: startId + i,
    lesson: lessonId,
    q: q.q,
    choices: q.choices,
    answer: q.answer,
    explain: q.explain || '',
    type: 'Đề Azota',
    level: q.cefr || 'B1'
  }))
}

export function azotaToReadingItem(questions, meta = {}) {
  const now = Date.now().toString(36).slice(-4).toUpperCase()
  return {
    id: meta.id || `AZ${now}`,
    cefr: meta.cefr || questions[0]?.cefr || 'B1',
    title: meta.title || `Đề Azota ${now}`,
    passage: meta.passage || 'Xem nội dung trong từng câu hỏi bên dưới.',
    questions: questions.map(q => ({ q: q.q, choices: q.choices, answer: q.answer, explain: q.explain }))
  }
}