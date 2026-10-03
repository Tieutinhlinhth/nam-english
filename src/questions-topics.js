// ============================================================
// Phân loại câu hỏi theo chủ điểm × cấp độ
// - Câu hỏi cũ (questions.js + questions-extra.js) tự động map theo level
// - Bổ sung câu mới cho các ô (topic × level) còn thiếu
// ============================================================

// Chuyển level cũ → CEFR level chuẩn hóa
export const mapLegacyLevel = (l) => {
  if (l === 'Cơ bản') return 'Basic'
  if (l === 'Vừa') return 'Intermediate'
  if (l === 'Vận dụng') return 'Advanced'
  if (['Basic', 'Intermediate', 'Advanced'].includes(l)) return l
  return 'Intermediate'
}

export const QUESTIONS_TOPIC_EXTRA = [
  // ============ TOPIC 1: Cấu trúc câu ============
  { id: 5001, lesson: 1, level: 'Basic', q: 'The cat ___ on the sofa.', choices: ['sleep', 'sleeps', 'sleeping', 'is sleep'], answer: 1, explain: 'The cat (số ít) + sleeps.', type: 'Chọn đáp án' },
  { id: 5002, lesson: 1, level: 'Basic', q: 'I ___ a student.', choices: ['is', 'am', 'are', 'be'], answer: 1, explain: 'I + am.', type: 'Chọn đáp án' },
  { id: 5003, lesson: 1, level: 'Basic', q: 'They ___ football every Sunday.', choices: ['play', 'plays', 'playing', 'is play'], answer: 0, explain: 'They + V nguyên mẫu.', type: 'Chọn đáp án' },
  { id: 5004, lesson: 1, level: 'Advanced', q: 'Chọn câu SAI về cấu trúc câu.', choices: ['It is important that he be present.', 'The book which I read yesterday was good.', 'She is a teacher, isn\'t it?', 'Had I known, I would have come.'], answer: 2, explain: 'Câu hỏi đuôi phải khớp chủ ngữ: "isn\'t she?"', type: 'Tìm lỗi' },
  { id: 5005, lesson: 1, level: 'Advanced', q: 'Đảo ngữ: "Not only ___ late, but he also forgot the file."', choices: ['he was', 'was he', 'he is', 'is he'], answer: 1, explain: 'Not only đứng đầu → đảo trợ động từ lên trước chủ ngữ.', type: 'Chọn đáp án' },

  // ============ TOPIC 2: Hiện tại đơn & tiếp diễn ============
  { id: 5006, lesson: 2, level: 'Basic', q: 'We ___ to school every day.', choices: ['go', 'goes', 'going', 'is go'], answer: 0, explain: 'We + V nguyên mẫu.', type: 'Chọn đáp án' },
  { id: 5007, lesson: 2, level: 'Basic', q: 'She ___ her homework now.', choices: ['does', 'is doing', 'do', 'did'], answer: 1, explain: 'Now → hiện tại tiếp diễn.', type: 'Chọn đáp án' },
  { id: 5008, lesson: 2, level: 'Advanced', q: 'At the moment, he ___ a novel by Hemingway.', choices: ['reads', 'is reading', 'read', 'has read'], answer: 1, explain: 'At the moment → tiếp diễn.', type: 'Chọn đáp án' },
  { id: 5009, lesson: 2, level: 'Advanced', q: 'Look! The children ___ in the yard.', choices: ['play', 'plays', 'are playing', 'played'], answer: 2, explain: 'Look! → tiếp diễn.', type: 'Chọn đáp án' },
  { id: 5010, lesson: 2, level: 'Advanced', q: 'She ___ coffee, but today she ___ tea.', choices: ['drinks / is drinking', 'drink / drinks', 'is drinking / drinks', 'drank / drink'], answer: 0, explain: 'Thói quen dùng hiện tại đơn, hôm nay khác → tiếp diễn.', type: 'Chọn đáp án' },

  // ============ TOPIC 3: Quá khứ đơn ============
  { id: 5011, lesson: 3, level: 'Basic', q: 'I ___ TV last night.', choices: ['watch', 'watches', 'watched', 'watching'], answer: 2, explain: 'Last night → quá khứ, watch → watched.', type: 'Chọn đáp án' },
  { id: 5012, lesson: 3, level: 'Basic', q: 'They ___ happy at the party.', choices: ['is', 'was', 'were', 'are'], answer: 2, explain: 'They + were.', type: 'Chọn đáp án' },
  { id: 5013, lesson: 3, level: 'Advanced', q: 'When I ___ the news, I ___ immediately.', choices: ['hear / call', 'heard / called', 'hearing / calling', 'was hearing / was calling'], answer: 1, explain: 'Chuỗi sự kiện quá khứ đơn.', type: 'Chọn đáp án' },
  { id: 5014, lesson: 3, level: 'Advanced', q: 'While she ___ dinner, the phone ___.', choices: ['cooked / rang', 'was cooking / rang', 'cooks / rings', 'cooking / ringing'], answer: 1, explain: 'Hành động đang diễn ra thì hành động khác xen vào.', type: 'Chọn đáp án' },

  // ============ TOPIC 4: Hiện tại hoàn thành ============
  { id: 5015, lesson: 4, level: 'Basic', q: 'I ___ just ___ my homework.', choices: ['have / finish', 'have / finished', 'has / finish', 'have / finishing'], answer: 1, explain: 'Have + just + V3.', type: 'Chọn đáp án' },
  { id: 5016, lesson: 4, level: 'Basic', q: 'She ___ never ___ sushi.', choices: ['have / eat', 'has / eaten', 'have / ate', 'has / eating'], answer: 1, explain: 'She + has + never + V3.', type: 'Chọn đáp án' },
  { id: 5017, lesson: 4, level: 'Advanced', q: 'This is the best film I ___.', choices: ['see', 'saw', 'have ever seen', 'ever see'], answer: 2, explain: 'So sánh nhất + hiện tại hoàn thành.', type: 'Chọn đáp án' },
  { id: 5018, lesson: 4, level: 'Advanced', q: 'By the time you arrive, I ___ the report.', choices: ['finish', 'will finish', 'will have finished', 'finished'], answer: 2, explain: 'Tương lai hoàn thành cho việc hoàn tất trước mốc thời gian.', type: 'Chọn đáp án' },

  // ============ TOPIC 5: Tương lai ============
  { id: 5019, lesson: 5, level: 'Basic', q: 'I ___ call you tomorrow.', choices: ['will', 'am', 'going', 'do'], answer: 0, explain: 'Will + V.', type: 'Chọn đáp án' },
  { id: 5020, lesson: 5, level: 'Basic', q: 'She ___ visit her grandmother next week.', choices: ['will', 'is', 'are', 'do'], answer: 0, explain: 'Will cho quyết định/kế hoạch.', type: 'Chọn đáp án' },
  { id: 5021, lesson: 5, level: 'Advanced', q: 'This time next week, I ___ on a beach in Nha Trang.', choices: ['lie', 'will lie', 'will be lying', 'am lying'], answer: 2, explain: 'This time next week → tương lai tiếp diễn.', type: 'Chọn đáp án' },
  { id: 5022, lesson: 5, level: 'Advanced', q: 'The train ___ at 8:00, so we ___ by 7:30.', choices: ['leaves / will arrive', 'will leave / arrive', 'leaves / arrive', 'will leave / will arrive'], answer: 0, explain: 'Lịch trình → hiện tại đơn; kế hoạch → will.', type: 'Chọn đáp án' },

  // ============ TOPIC 6: Modal verbs ============
  { id: 5023, lesson: 6, level: 'Basic', q: 'You ___ study harder.', choices: ['should', 'should to', 'shoulds', 'shoulding'], answer: 0, explain: 'Should + V (không to, không -s).', type: 'Chọn đáp án' },
  { id: 5024, lesson: 6, level: 'Basic', q: 'I ___ swim very well.', choices: ['can', 'can to', 'cans', 'canning'], answer: 0, explain: 'Can + V.', type: 'Chọn đáp án' },
  { id: 5025, lesson: 6, level: 'Advanced', q: 'You ___ have told me earlier — I would have helped.', choices: ['should', 'would', 'could', 'must'], answer: 0, explain: 'Should have + V3 = lẽ ra phải (nhưng đã không).', type: 'Chọn đáp án' },
  { id: 5026, lesson: 6, level: 'Advanced', q: 'She ___ have missed the train; she left 2 hours ago.', choices: ['can\'t', 'mustn\'t', 'shouldn\'t', 'needn\'t'], answer: 0, explain: 'Can\'t have + V3 = không thể đã (suy luận phủ định).', type: 'Chọn đáp án' },

  // ============ TOPIC 7: Danh từ, mạo từ, lượng từ ============
  { id: 5027, lesson: 7, level: 'Basic', q: 'There is ___ apple on the table.', choices: ['a', 'an', 'the', 'some'], answer: 1, explain: 'Apple bắt đầu bằng âm nguyên âm → an.', type: 'Chọn đáp án' },
  { id: 5028, lesson: 7, level: 'Basic', q: 'I have ___ books in my bag.', choices: ['a', 'an', 'some', 'much'], answer: 2, explain: 'Some + danh từ đếm được số nhiều.', type: 'Chọn đáp án' },
  { id: 5029, lesson: 7, level: 'Advanced', q: '___ of the two answers is correct.', choices: ['Either', 'Neither', 'Both', 'All'], answer: 0, explain: '"Either of the two" = một trong hai (đúng).', type: 'Chọn đáp án' },
  { id: 5030, lesson: 7, level: 'Advanced', q: 'The number of students ___ increasing every year.', choices: ['are', 'is', 'were', 'have been'], answer: 1, explain: '"The number of" + danh từ số nhiều → động từ số ít.', type: 'Chọn đáp án' },

  // ============ TOPIC 8: So sánh ============
  { id: 5031, lesson: 8, level: 'Basic', q: 'This bag is ___ than that one.', choices: ['big', 'bigger', 'biggest', 'more big'], answer: 1, explain: 'Big → bigger.', type: 'Chọn đáp án' },
  { id: 5032, lesson: 8, level: 'Basic', q: 'She is the ___ girl in the class.', choices: ['tall', 'taller', 'tallest', 'more tall'], answer: 2, explain: 'So sánh nhất → tallest.', type: 'Chọn đáp án' },
  { id: 5033, lesson: 8, level: 'Advanced', q: 'No sooner had he arrived ___ he was asked to leave.', choices: ['than', 'when', 'then', 'that'], answer: 0, explain: 'No sooner ... than.', type: 'Chọn đáp án' },
  { id: 5034, lesson: 8, level: 'Advanced', q: 'The more you practice, ___ you become.', choices: ['the better', 'better', 'the best', 'the more good'], answer: 0, explain: 'The + comparative, the + comparative.', type: 'Chọn đáp án' },

  // ============ TOPIC 9: Câu điều kiện ============
  { id: 5035, lesson: 9, level: 'Basic', q: 'If it ___ tomorrow, I will stay home.', choices: ['rain', 'rains', 'will rain', 'rained'], answer: 1, explain: 'Loại 1: if + hiện tại đơn.', type: 'Chọn đáp án' },
  { id: 5036, lesson: 9, level: 'Basic', q: 'If you heat water, it ___.', choices: ['boil', 'boils', 'will boil', 'boiled'], answer: 1, explain: 'Loại 0: sự thật hiển nhiên.', type: 'Chọn đáp án' },
  { id: 5037, lesson: 9, level: 'Basic', q: 'I will call you if I ___ time.', choices: ['have', 'has', 'will have', 'had'], answer: 0, explain: 'Loại 1: if + hiện tại đơn.', type: 'Chọn đáp án' },
  { id: 5038, lesson: 9, level: 'Basic', q: 'If she ___ hard, she will pass.', choices: ['study', 'studies', 'studied', 'will study'], answer: 1, explain: 'She + studies.', type: 'Chọn đáp án' },
  { id: 5039, lesson: 9, level: 'Intermediate', q: 'If I ___ you, I would apologize.', choices: ['am', 'was', 'were', 'be'], answer: 2, explain: 'Loại 2: if + were cho mọi chủ ngữ.', type: 'Chọn đáp án' },
  { id: 5040, lesson: 9, level: 'Intermediate', q: 'If I had more time, I ___ learn piano.', choices: ['will', 'would', 'would have', 'can'], answer: 1, explain: 'Loại 2: would + V.', type: 'Chọn đáp án' },
  { id: 5041, lesson: 9, level: 'Advanced', q: 'If I ___ about the traffic, I would have left earlier.', choices: ['know', 'knew', 'had known', 'have known'], answer: 2, explain: 'Loại 3: if + had V3.', type: 'Chọn đáp án' },
  { id: 5042, lesson: 9, level: 'Advanced', q: 'Had I known, I ___ differently.', choices: ['acted', 'would act', 'would have acted', 'will act'], answer: 2, explain: 'Đảo loại 3: Had + S + V3, would have + V3.', type: 'Chọn đáp án' },
  { id: 5043, lesson: 9, level: 'Advanced', q: '___ you study, you will fail.', choices: ['If', 'Unless', 'When', 'While'], answer: 1, explain: 'Unless = nếu không.', type: 'Chọn đáp án' },

  // ============ TOPIC 10: Mệnh đề quan hệ ============
  { id: 5044, lesson: 10, level: 'Basic', q: 'The boy ___ is playing is my brother.', choices: ['who', 'which', 'whose', 'where'], answer: 0, explain: 'Người → who.', type: 'Chọn đáp án' },
  { id: 5045, lesson: 10, level: 'Basic', q: 'I like the book ___ has a red cover.', choices: ['who', 'which', 'whose', 'where'], answer: 1, explain: 'Vật → which.', type: 'Chọn đáp án' },
  { id: 5046, lesson: 10, level: 'Basic', q: 'This is the girl ___ mother is a doctor.', choices: ['who', 'which', 'whose', 'that'], answer: 2, explain: 'Sở hữu → whose.', type: 'Chọn đáp án' },
  { id: 5047, lesson: 10, level: 'Basic', q: 'That is the house ___ I was born.', choices: ['who', 'which', 'where', 'when'], answer: 2, explain: 'Địa điểm → where.', type: 'Chọn đáp án' },
  { id: 5048, lesson: 10, level: 'Intermediate', q: 'The woman ___ I met yesterday is a teacher.', choices: ['who', 'whom', 'whose', 'which'], answer: 1, explain: 'Whom làm tân ngữ.', type: 'Chọn đáp án' },
  { id: 5049, lesson: 10, level: 'Intermediate', q: 'The car ___ was stolen has been found.', choices: ['who', 'which', 'whose', 'whom'], answer: 1, explain: 'Vật → which.', type: 'Chọn đáp án' },
  { id: 5050, lesson: 10, level: 'Advanced', q: 'He is the only person ___ can solve this.', choices: ['who', 'which', 'that', 'whose'], answer: 2, explain: 'Sau "the only" dùng that.', type: 'Chọn đáp án' },
  { id: 5051, lesson: 10, level: 'Advanced', q: 'Đại từ quan hệ nào KHÔNG dùng trong mệnh đề không xác định?', choices: ['who', 'which', 'whose', 'that'], answer: 3, explain: 'That không dùng sau dấu phẩy.', type: 'Chọn đáp án' },
  { id: 5052, lesson: 10, level: 'Advanced', q: 'The reason ___ he left is unknown.', choices: ['why', 'which', 'who', 'when'], answer: 0, explain: 'Reason + why.', type: 'Chọn đáp án' },

  // ============ TOPIC 11: Câu bị động ============
  { id: 5053, lesson: 11, level: 'Basic', q: 'The letter ___ written yesterday.', choices: ['is', 'was', 'were', 'has'], answer: 1, explain: 'Quá khứ đơn bị động: was + V3.', type: 'Chọn đáp án' },
  { id: 5054, lesson: 11, level: 'Basic', q: 'Rice ___ in Vietnam.', choices: ['grow', 'grows', 'is grown', 'growing'], answer: 2, explain: 'Hiện tại đơn bị động: is + V3.', type: 'Chọn đáp án' },
  { id: 5055, lesson: 11, level: 'Basic', q: 'The room ___ cleaned every day.', choices: ['is', 'are', 'was', 'were'], answer: 0, explain: 'The room (số ít) + is.', type: 'Chọn đáp án' },
  { id: 5056, lesson: 11, level: 'Basic', q: 'This book ___ by a famous author.', choices: ['writes', 'was written', 'writing', 'wrote'], answer: 1, explain: 'Was + written (V3).', type: 'Chọn đáp án' },
  { id: 5057, lesson: 11, level: 'Intermediate', q: 'The project ___ by the end of this month.', choices: ['will finish', 'will be finished', 'finishes', 'is finishing'], answer: 1, explain: 'Tương lai bị động: will be + V3.', type: 'Chọn đáp án' },
  { id: 5058, lesson: 11, level: 'Intermediate', q: 'The email ___ already ___.', choices: ['has / sent', 'has / been sent', 'have / sent', 'is / sending'], answer: 1, explain: 'Hiện tại hoàn thành bị động: has been + V3.', type: 'Chọn đáp án' },
  { id: 5059, lesson: 11, level: 'Advanced', q: 'It is said that he ___ the truth.', choices: ['knows', 'is known', 'knowing', 'knew'], answer: 0, explain: '"It is said that + S + V" — bị động với động từ tường thuật.', type: 'Chọn đáp án' },
  { id: 5060, lesson: 11, level: 'Advanced', q: 'He ___ to be very intelligent.', choices: ['is said', 'says', 'saying', 'has said'], answer: 0, explain: 'Chủ ngữ + is said + to V.', type: 'Chọn đáp án' },

  // ============ TOPIC 12: Câu hỏi & trật tự từ ============
  { id: 5061, lesson: 12, level: 'Basic', q: '___ you like coffee?', choices: ['Do', 'Does', 'Is', 'Are'], answer: 0, explain: 'You + do.', type: 'Chọn đáp án' },
  { id: 5062, lesson: 12, level: 'Basic', q: '___ she a teacher?', choices: ['Do', 'Does', 'Is', 'Are'], answer: 2, explain: 'Câu hỏi với be: Is + S.', type: 'Chọn đáp án' },
  { id: 5063, lesson: 12, level: 'Basic', q: 'Where ___ you from?', choices: ['do', 'does', 'are', 'is'], answer: 2, explain: 'Where + are + S.', type: 'Chọn đáp án' },
  { id: 5064, lesson: 12, level: 'Advanced', q: 'Câu hỏi đuôi: She is a doctor, ___?', choices: ['is she', 'isn\'t she', 'isn\'t it', 'does she'], answer: 1, explain: 'Vế trước khẳng định → đuôi phủ định, cùng chủ ngữ.', type: 'Chọn đáp án' },
  { id: 5065, lesson: 12, level: 'Advanced', q: 'Câu hỏi gián tiếp đúng: Can you tell me ___?', choices: ['where is the bank?', 'where the bank is?', 'where the bank?', 'where does the bank?'], answer: 1, explain: 'Gián tiếp không đảo ngữ.', type: 'Chọn đáp án' },

  // ============ TOPIC 13: V-ing và to + V ============
  { id: 5066, lesson: 13, level: 'Basic', q: 'I like ___ books.', choices: ['read', 'reading', 'to reading', 'reads'], answer: 1, explain: 'Like + V-ing.', type: 'Chọn đáp án' },
  { id: 5067, lesson: 13, level: 'Basic', q: 'She wants ___ a doctor.', choices: ['be', 'being', 'to be', 'is'], answer: 2, explain: 'Want + to V.', type: 'Chọn đáp án' },
  { id: 5068, lesson: 13, level: 'Basic', q: 'We enjoy ___ football.', choices: ['play', 'playing', 'to play', 'played'], answer: 1, explain: 'Enjoy + V-ing.', type: 'Chọn đáp án' },
  { id: 5069, lesson: 13, level: 'Basic', q: 'I need ___ water.', choices: ['drink', 'drinking', 'to drink', 'drunk'], answer: 2, explain: 'Need + to V.', type: 'Chọn đáp án' },
  { id: 5070, lesson: 13, level: 'Basic', q: 'Thank you for ___ me.', choices: ['help', 'helping', 'to help', 'helped'], answer: 1, explain: 'Sau giới từ → V-ing.', type: 'Chọn đáp án' },
  { id: 5071, lesson: 13, level: 'Intermediate', q: 'She suggested ___ a taxi.', choices: ['take', 'taking', 'to take', 'took'], answer: 1, explain: 'Suggest + V-ing.', type: 'Chọn đáp án' },
  { id: 5072, lesson: 13, level: 'Intermediate', q: 'They agreed ___ the bill.', choices: ['pay', 'paying', 'to pay', 'paid'], answer: 2, explain: 'Agree + to V.', type: 'Chọn đáp án' },
  { id: 5073, lesson: 13, level: 'Advanced', q: 'I remember ___ her at the party last year.', choices: ['meet', 'meeting', 'to meet', 'met'], answer: 1, explain: 'Remember + V-ing = nhớ đã làm.', type: 'Chọn đáp án' },
  { id: 5074, lesson: 13, level: 'Advanced', q: 'He stopped ___ because of his health.', choices: ['smoke', 'smoking', 'to smoke', 'smoked'], answer: 1, explain: 'Stop + V-ing = dừng hẳn.', type: 'Chọn đáp án' },
  { id: 5075, lesson: 13, level: 'Advanced', q: 'I look forward to ___ from you.', choices: ['hear', 'hearing', 'to hear', 'heard'], answer: 1, explain: 'Look forward to + V-ing.', type: 'Chọn đáp án' }
]

// Nhóm câu hỏi theo (topic, level)
export const groupQuestionsByTopicLevel = (allQuestions) => {
  const map = {}
  allQuestions.forEach(q => {
    const lvl = mapLegacyLevel(q.level)
    const topic = q.lesson
    if (!map[topic]) map[topic] = { Basic: [], Intermediate: [], Advanced: [] }
    if (map[topic][lvl]) map[topic][lvl].push(q)
  })
  return map
}

// Đếm số câu mỗi (topic × level)
export const countQuestionsByTopicLevel = (allQuestions) => {
  const map = groupQuestionsByTopicLevel(allQuestions)
  const counts = {}
  Object.keys(map).forEach(topic => {
    counts[topic] = {
      Basic: map[topic].Basic.length,
      Intermediate: map[topic].Intermediate.length,
      Advanced: map[topic].Advanced.length
    }
  })
  return counts
}

// Lấy câu hỏi của 1 (topic, level)
export const getQuestionsByTopicLevel = (allQuestions, topicId, level) => {
  const map = groupQuestionsByTopicLevel(allQuestions)
  return (map[topicId] && map[topicId][level]) || []
}