// ============================================================
// 130 câu hỏi bổ sung — 10 câu/bài × 13 bài
// Tổng số câu sau khi gộp: 300 + 130 = 430 câu
// ============================================================
export const QUESTIONS_EXTRA = [
  // ========== BÀI 1: Cấu trúc câu cơ bản ==========
  { id: 301, lesson: 1, q: 'My brother ___ a doctor.', choices: ['are', 'is', 'am', 'be'], answer: 1, explain: 'Chủ ngữ số ít "My brother" đi với is.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 302, lesson: 1, q: 'The students ___ in the classroom.', choices: ['is', 'am', 'are', 'be'], answer: 2, explain: 'Chủ ngữ số nhiều "The students" đi với are.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 303, lesson: 1, q: 'She ___ breakfast every morning.', choices: ['have', 'having', 'has', 'is have'], answer: 2, explain: 'She + has ở hiện tại đơn.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 304, lesson: 1, q: 'Tìm câu SAI.', choices: ['I am tired.', 'They are happy.', 'He are busy.', 'We are ready.'], answer: 2, explain: 'He đi với is, không phải are.', type: 'Tìm lỗi', level: 'Cơ bản' },
  { id: 305, lesson: 1, q: 'Sắp xếp: books / reads / she / every day', choices: ['Books she reads every day.', 'She books reads every day.', 'She reads books every day.', 'Reads she books every day.'], answer: 2, explain: 'S + V + O + Time.', type: 'Sắp xếp từ', level: 'Cơ bản' },
  { id: 306, lesson: 1, q: 'Dịch: "Họ là sinh viên."', choices: ['They is students.', 'They are students.', 'They am students.', 'They be students.'], answer: 1, explain: 'They + are.', type: 'Dịch Việt-Anh', level: 'Cơ bản' },
  { id: 307, lesson: 1, q: 'Trong "The cat sleeps", từ nào là động từ?', choices: ['The', 'cat', 'sleeps', 'không có'], answer: 2, explain: 'Sleeps là động từ chính.', type: 'Nhận diện thành phần', level: 'Cơ bản' },
  { id: 308, lesson: 1, q: 'Chọn câu đúng ngữ pháp.', choices: ['We is ready.', 'We are ready.', 'We am ready.', 'We be ready.'], answer: 1, explain: 'We + are.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 309, lesson: 1, q: 'Chủ ngữ trong "My sister studies English" là gì?', choices: ['My', 'sister', 'My sister', 'studies'], answer: 2, explain: '"My sister" là chủ ngữ đầy đủ.', type: 'Nhận diện thành phần', level: 'Cơ bản' },
  { id: 310, lesson: 1, q: 'Tìm câu tự nhiên nhất để nói "Tôi mệt."', choices: ['I tired.', 'I am tired.', 'I do tired.', 'I be tired.'], answer: 1, explain: 'Tính từ cần động từ be.', type: 'Chọn câu tự nhiên', level: 'Cơ bản' },

  // ========== BÀI 2: Hiện tại đơn & tiếp diễn ==========
  { id: 311, lesson: 2, q: 'They usually ___ TV after dinner.', choices: ['watch', 'watches', 'is watch', 'watching'], answer: 0, explain: 'They + V (không thêm s).', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 312, lesson: 2, q: 'Look! The baby ___.', choices: ['cries', 'crying', 'is crying', 'cry'], answer: 2, explain: 'Look! → hành động đang diễn ra.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 313, lesson: 2, q: 'My mother ___ dinner right now.', choices: ['cooks', 'is cooking', 'cook', 'cooking'], answer: 1, explain: 'Right now → tiếp diễn.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 314, lesson: 2, q: '___ your sister like coffee?', choices: ['Is', 'Do', 'Does', 'Are'], answer: 2, explain: 'Câu hỏi hiện tại đơn với "your sister" → Does.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 315, lesson: 2, q: 'Nam ___ in Ho Chi Minh City.', choices: ['live', 'lives', 'living', 'is live'], answer: 1, explain: 'Nam số ít → lives.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 316, lesson: 2, q: 'Tìm câu đúng.', choices: ['I am knowing him.', 'I know him.', 'I knowing him.', 'I am know him.'], answer: 1, explain: 'Know là động từ trạng thái.', type: 'Tìm lỗi', level: 'Vừa' },
  { id: 317, lesson: 2, q: 'Dịch: "Cô ấy đang học tiếng Anh."', choices: ['She studies English.', 'She is studying English.', 'She study English.', 'She studying English.'], answer: 1, explain: 'Đang học → thì tiếp diễn.', type: 'Dịch Việt-Anh', level: 'Cơ bản' },
  { id: 318, lesson: 2, q: 'We ___ to school on Sundays.', choices: ['not go', 'doesn\'t go', 'don\'t go', 'aren\'t go'], answer: 2, explain: 'We + don\'t + V.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 319, lesson: 2, q: 'Hoa ___ the piano very well.', choices: ['play', 'plays', 'playing', 'is play'], answer: 1, explain: 'Hoa số ít → plays (thói quen).', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 320, lesson: 2, q: 'Từ nào KHÔNG chỉ thói quen?', choices: ['always', 'usually', 'sometimes', 'right now'], answer: 3, explain: 'Right now → tiếp diễn.', type: 'Chọn đáp án', level: 'Cơ bản' },

  // ========== BÀI 3: Quá khứ đơn ==========
  { id: 321, lesson: 3, q: 'They ___ to the party last night.', choices: ['go', 'went', 'goes', 'going'], answer: 1, explain: 'Last night → quá khứ, go → went.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 322, lesson: 3, q: 'She ___ very tired yesterday.', choices: ['is', 'was', 'were', 'be'], answer: 1, explain: 'She + was.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 323, lesson: 3, q: 'Where ___ you go last summer?', choices: ['do', 'does', 'did', 'are'], answer: 2, explain: 'Câu hỏi quá khứ với động từ thường → did.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 324, lesson: 3, q: 'Quá khứ của "eat" là gì?', choices: ['eated', 'ate', 'eaten', 'eats'], answer: 1, explain: 'Eat-ate-eaten.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 325, lesson: 3, q: 'Tìm câu SAI.', choices: ['I saw him yesterday.', 'She didn\'t came.', 'They were late.', 'We watched TV.'], answer: 1, explain: 'Sau didn\'t dùng come (nguyên mẫu).', type: 'Tìm lỗi', level: 'Vừa' },
  { id: 326, lesson: 3, q: 'My parents ___ in Hanoi in 2010.', choices: ['live', 'lives', 'lived', 'living'], answer: 2, explain: 'In 2010 → quá khứ, live → lived.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 327, lesson: 3, q: 'Quá khứ của "buy" là gì?', choices: ['buyed', 'bought', 'buys', 'buying'], answer: 1, explain: 'Buy-bought-bought.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 328, lesson: 3, q: 'Dịch: "Tôi đã gặp cô ấy hôm qua."', choices: ['I meet her yesterday.', 'I met her yesterday.', 'I am meeting her yesterday.', 'I did met her yesterday.'], answer: 1, explain: 'Meet → met quá khứ.', type: 'Dịch Việt-Anh', level: 'Cơ bản' },
  { id: 329, lesson: 3, q: 'They ___ the film very much.', choices: ['enjoyed', 'enjoys', 'enjoying', 'enjoy'], answer: 0, explain: 'Ngữ cảnh quá khứ → enjoyed.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 330, lesson: 3, q: 'Từ nào báo hiệu quá khứ đơn?', choices: ['tomorrow', 'yesterday', 'now', 'next week'], answer: 1, explain: 'Yesterday → quá khứ.', type: 'Chọn đáp án', level: 'Cơ bản' },

  // ========== BÀI 4: Hiện tại hoàn thành ==========
  { id: 331, lesson: 4, q: 'I ___ never ___ sushi.', choices: ['have / eat', 'have / eaten', 'has / eaten', 'have / ate'], answer: 1, explain: 'Have + V3.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 332, lesson: 4, q: 'She ___ here since 2020.', choices: ['works', 'worked', 'has worked', 'is working'], answer: 2, explain: 'Since + hiện tại hoàn thành.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 333, lesson: 4, q: 'They ___ that film three times.', choices: ['see', 'saw', 'have seen', 'are seeing'], answer: 2, explain: 'Trải nghiệm tính tới hiện tại → have seen.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 334, lesson: 4, q: 'Câu nào SAI?', choices: ['I have lived here for 5 years.', 'She has gone to Paris.', 'We have visited Da Nang last year.', 'They have finished.'], answer: 2, explain: 'Last year là thời gian đã kết thúc → dùng quá khứ đơn.', type: 'Tìm lỗi', level: 'Vừa' },
  { id: 335, lesson: 4, q: 'How long ___ you known him?', choices: ['do', 'did', 'have', 'are'], answer: 2, explain: 'How long + have.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 336, lesson: 4, q: 'Điền: I\'ve ___ finished my homework.', choices: ['yet', 'already', 'ever', 'never'], answer: 1, explain: 'Already → kết quả đã hoàn thành.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 337, lesson: 4, q: 'She has worked here ___ three years.', choices: ['since', 'for', 'in', 'at'], answer: 1, explain: 'For + khoảng thời gian.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 338, lesson: 4, q: 'Câu nào diễn tả việc còn tiếp tục ở hiện tại?', choices: ['I lived there for 5 years.', 'I have lived there for 5 years.', 'I am living there.', 'I live there in 2010.'], answer: 1, explain: 'Hiện tại hoàn thành = còn tiếp tục.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 339, lesson: 4, q: 'Dịch: "Tôi đã ở đây từ sáng."', choices: ['I am here since morning.', 'I have been here since morning.', 'I was here since morning.', 'I am being here since morning.'], answer: 1, explain: 'Since + hiện tại hoàn thành.', type: 'Dịch Việt-Anh', level: 'Vừa' },
  { id: 340, lesson: 4, q: 'They haven\'t arrived ___.', choices: ['already', 'yet', 'ever', 'just'], answer: 1, explain: 'Yet → câu phủ định.', type: 'Chọn đáp án', level: 'Vừa' },

  // ========== BÀI 5: Tương lai ==========
  { id: 341, lesson: 5, q: 'I ___ help you with that.', choices: ['will', 'am', 'going to', 'do'], answer: 0, explain: 'Quyết định ngay → will.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 342, lesson: 5, q: 'Look at those black clouds! It ___ rain.', choices: ['will', 'is going to', 'rains', 'would'], answer: 1, explain: 'Dấu hiệu rõ → going to.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 343, lesson: 5, q: 'The train ___ at 8:00 tomorrow.', choices: ['will leave', 'leaves', 'is leaving', 'left'], answer: 1, explain: 'Lịch trình cố định → hiện tại đơn.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 344, lesson: 5, q: 'We ___ dinner with my parents tonight. (đã hẹn trước)', choices: ['have', 'are having', 'will have', 'had'], answer: 1, explain: 'Đã sắp xếp → hiện tại tiếp diễn.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 345, lesson: 5, q: 'Câu nào SAI?', choices: ['I will call you.', 'She will to come.', 'It is going to rain.', 'They will arrive soon.'], answer: 1, explain: 'Sau will không dùng to.', type: 'Tìm lỗi', level: 'Vừa' },
  { id: 346, lesson: 5, q: 'Điền: Don\'t worry, I ___ call you tonight.', choices: ['will', 'am', 'going', 'would'], answer: 0, explain: 'Lời hứa → will.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 347, lesson: 5, q: 'They ___ to London next month. (đã lên kế hoạch)', choices: ['will go', 'are going', 'go', 'went'], answer: 1, explain: 'Kế hoạch đã có → going to hoặc tiếp diễn. "Are going" tự nhiên.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 348, lesson: 5, q: 'Dịch: "Tôi sẽ mở cửa sổ." (quyết định ngay)', choices: ['I open the window.', 'I will open the window.', 'I am opening the window.', 'I opened the window.'], answer: 1, explain: 'Will cho quyết định ngay.', type: 'Dịch Việt-Anh', level: 'Vừa' },
  { id: 349, lesson: 5, q: 'The exam ___ next Friday.', choices: ['is', 'will be', 'is going to be', 'be'], answer: 1, explain: 'Will be cho sự kiện tương lai.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 350, lesson: 5, q: 'Câu nào không dùng cho tương lai?', choices: ['will + V', 'be going to + V', 'hiện tại tiếp diễn', 'hiện tại hoàn thành'], answer: 3, explain: 'Hiện tại hoàn thành không dùng cho tương lai.', type: 'Chọn đáp án', level: 'Vừa' },

  // ========== BÀI 6: Động từ khuyết thiếu ==========
  { id: 351, lesson: 6, q: 'You ___ see a doctor. You look sick.', choices: ['should', 'can', 'mustn\'t', 'have'], answer: 0, explain: 'Should → lời khuyên.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 352, lesson: 6, q: 'Students ___ wear uniforms at this school.', choices: ['must', 'can', 'might', 'need'], answer: 0, explain: 'Quy định → must.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 353, lesson: 6, q: 'You ___ smoke here. It\'s forbidden.', choices: ['shouldn\'t', 'mustn\'t', 'don\'t have to', 'can\'t be'], answer: 1, explain: 'Bị cấm → mustn\'t.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 354, lesson: 6, q: 'It\'s Sunday. I ___ get up early.', choices: ['mustn\'t', 'don\'t have to', 'can\'t', 'shouldn\'t'], answer: 1, explain: 'Không cần → don\'t have to.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 355, lesson: 6, q: '___ you help me, please?', choices: ['Can', 'Must', 'Should', 'May be'], answer: 0, explain: 'Can/Could → lời nhờ.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 356, lesson: 6, q: 'She ___ swim when she was 5.', choices: ['can', 'could', 'must', 'should'], answer: 1, explain: 'Khả năng quá khứ → could.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 357, lesson: 6, q: 'Tìm câu SAI.', choices: ['She can swim.', 'You must to go.', 'He should study.', 'I could help.'], answer: 1, explain: 'Sau must không dùng to.', type: 'Tìm lỗi', level: 'Vừa' },
  { id: 358, lesson: 6, q: 'The light is on. Someone ___ be at home.', choices: ['can', 'might', 'must', 'should'], answer: 2, explain: 'Suy luận chắc chắn → must.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 359, lesson: 6, q: 'Dịch: "Bạn nên nghỉ ngơi."', choices: ['You must rest.', 'You should rest.', 'You can rest.', 'You may rest.'], answer: 1, explain: 'Should → lời khuyên.', type: 'Dịch Việt-Anh', level: 'Vừa' },
  { id: 360, lesson: 6, q: 'I ___ finish this report by Friday.', choices: ['have to', 'must to', 'can to', 'should to'], answer: 0, explain: 'Have to = phải (nghĩa vụ).', type: 'Chọn đáp án', level: 'Vừa' },

  // ========== BÀI 7: Danh từ, mạo từ, lượng từ ==========
  { id: 361, lesson: 7, q: 'I have ___ oranges in the fridge.', choices: ['a', 'an', 'some', 'much'], answer: 2, explain: 'Some + danh từ đếm được số nhiều.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 362, lesson: 7, q: 'She bought ___ umbrella yesterday.', choices: ['a', 'an', 'the', 'some'], answer: 1, explain: 'Umbrella bắt đầu bằng âm nguyên âm → an.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 363, lesson: 7, q: 'How ___ sugar do you need?', choices: ['many', 'much', 'a lot', 'few'], answer: 1, explain: 'Sugar không đếm được → much.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 364, lesson: 7, q: 'There aren\'t ___ chairs in the room.', choices: ['some', 'any', 'much', 'a'], answer: 1, explain: 'Câu phủ định → any.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 365, lesson: 7, q: 'Danh từ nào KHÔNG đếm được?', choices: ['chair', 'money', 'book', 'apple'], answer: 1, explain: 'Money không đếm được.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 366, lesson: 7, q: 'Tìm câu SAI.', choices: ['I need some advice.', 'I bought a furniture.', 'Many students are here.', 'A little water is enough.'], answer: 1, explain: 'Furniture không đếm được, không dùng a.', type: 'Tìm lỗi', level: 'Vừa' },
  { id: 367, lesson: 7, q: '___ hour is a long time for a short task.', choices: ['A', 'An', 'The', 'Some'], answer: 1, explain: 'H trong hour không phát âm.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 368, lesson: 7, q: 'There is ___ milk in the fridge.', choices: ['many', 'few', 'a little', 'a few'], answer: 2, explain: 'Milk không đếm được → a little.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 369, lesson: 7, q: 'We don\'t have ___ time.', choices: ['many', 'much', 'few', 'a few'], answer: 1, explain: 'Time không đếm được → much.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 370, lesson: 7, q: 'Chọn câu đúng.', choices: ['She gave me many advice.', 'She gave me some advice.', 'She gave me a advice.', 'She gave me advices.'], answer: 1, explain: 'Advice không đếm được → some.', type: 'Chọn đáp án', level: 'Vừa' },

  // ========== BÀI 8: So sánh ==========
  { id: 371, lesson: 8, q: 'This book is ___ than that one.', choices: ['interesting', 'more interesting', 'most interesting', 'interestinger'], answer: 1, explain: 'Tính từ dài → more.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 372, lesson: 8, q: 'She is the ___ student in the class.', choices: ['tall', 'taller', 'tallest', 'more tall'], answer: 2, explain: 'So sánh nhất → tallest.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 373, lesson: 8, q: 'My car is ___ as yours.', choices: ['as expensive', 'more expensive', 'expensive', 'expensiver'], answer: 0, explain: 'As + adj + as.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 374, lesson: 8, q: 'So sánh hơn của "good" là gì?', choices: ['gooder', 'more good', 'better', 'best'], answer: 2, explain: 'Good → better → best.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 375, lesson: 8, q: 'Tìm câu SAI.', choices: ['She is taller than me.', 'This is the best book.', 'He runs more faster.', 'It is as big as that.'], answer: 2, explain: 'Không dùng more + faster.', type: 'Tìm lỗi', level: 'Vừa' },
  { id: 376, lesson: 8, q: 'This problem is ___ than the last one.', choices: ['difficulter', 'more difficult', 'most difficult', 'difficult'], answer: 1, explain: 'Difficult → more difficult.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 377, lesson: 8, q: 'She sings ___ than her sister.', choices: ['well', 'better', 'best', 'gooder'], answer: 1, explain: 'Well → better.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 378, lesson: 8, q: 'So sánh hơn của "bad" là gì?', choices: ['badder', 'worse', 'worst', 'more bad'], answer: 1, explain: 'Bad → worse → worst.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 379, lesson: 8, q: 'Dịch: "Nam cao hơn Minh."', choices: ['Nam tall than Minh.', 'Nam is taller than Minh.', 'Nam is tallest than Minh.', 'Nam taller Minh.'], answer: 1, explain: 'So sánh hơn + than.', type: 'Dịch Việt-Anh', level: 'Vừa' },
  { id: 380, lesson: 8, q: 'It is the ___ film I have ever seen.', choices: ['good', 'better', 'best', 'more good'], answer: 2, explain: 'So sánh nhất của good = best.', type: 'Chọn đáp án', level: 'Vừa' },

  // ========== BÀI 9: Câu điều kiện ==========
  { id: 381, lesson: 9, q: 'If I ___ more time, I would travel.', choices: ['have', 'had', 'will have', 'would have'], answer: 1, explain: 'Loại 2 → if + past.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 382, lesson: 9, q: 'If it ___ tomorrow, we will stay home.', choices: ['rains', 'will rain', 'rained', 'would rain'], answer: 0, explain: 'Loại 1 → if + hiện tại đơn.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 383, lesson: 9, q: 'If she had studied, she ___ the exam.', choices: ['would pass', 'would have passed', 'passed', 'will pass'], answer: 1, explain: 'Loại 3 → would have + V3.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 384, lesson: 9, q: 'Loại 0: If you heat water to 100°C, it ___.', choices: ['boils', 'will boil', 'would boil', 'boiled'], answer: 0, explain: 'Sự thật → loại 0.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 385, lesson: 9, q: 'Tìm câu SAI.', choices: ['If I were you, I would go.', 'If I will see him, I will tell him.', 'If it rains, I won\'t go.', 'If I had money, I would buy.'], answer: 1, explain: 'Sau if loại 1 không dùng will.', type: 'Tìm lỗi', level: 'Nâng cao' },
  { id: 386, lesson: 9, q: 'I would have called if I ___ your number.', choices: ['knew', 'had known', 'know', 'would know'], answer: 1, explain: 'Loại 3 → had + V3.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 387, lesson: 9, q: 'Dịch: "Nếu tôi là bạn, tôi sẽ chấp nhận."', choices: ['If I am you, I accept.', 'If I were you, I would accept.', 'If I was you, I accepted.', 'If I be you, I would accept.'], answer: 1, explain: 'If I were you...', type: 'Dịch Việt-Anh', level: 'Nâng cao' },
  { id: 388, lesson: 9, q: '___ you study hard, you will fail.', choices: ['If', 'Unless', 'When', 'While'], answer: 1, explain: 'Unless = nếu không.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 389, lesson: 9, q: 'If I ___ rich, I would help everyone.', choices: ['am', 'were', 'will be', 'would be'], answer: 1, explain: 'Giả định không thật → were.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 390, lesson: 9, q: 'Chọn câu điều kiện loại 1.', choices: ['If it rains, we stay home.', 'If it rains, we will stay home.', 'If it rained, we would stay.', 'If it had rained, we would have stayed.'], answer: 1, explain: 'Loại 1: if + present, will + V.', type: 'Chọn đáp án', level: 'Vừa' },

  // ========== BÀI 10: Mệnh đề quan hệ ==========
  { id: 391, lesson: 10, q: 'The man ___ is talking to Lan is my uncle.', choices: ['who', 'which', 'whose', 'where'], answer: 0, explain: 'Người → who.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 392, lesson: 10, q: 'This is the book ___ I told you about.', choices: ['who', 'which', 'whose', 'whom'], answer: 1, explain: 'Vật → which.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 393, lesson: 10, q: 'I know a girl ___ father is a doctor.', choices: ['who', 'which', 'whose', 'that'], answer: 2, explain: 'Sở hữu → whose.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 394, lesson: 10, q: 'That is the house ___ I was born.', choices: ['who', 'which', 'where', 'when'], answer: 2, explain: 'Địa điểm → where.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 395, lesson: 10, q: 'Tìm câu SAI.', choices: ['The girl who sings is my sister.', 'The dog which barks is mine.', 'Lan, that lives here, is nice.', 'The book that I bought is new.'], answer: 2, explain: 'Mệnh đề không xác định không dùng that.', type: 'Tìm lỗi', level: 'Nâng cao' },
  { id: 396, lesson: 10, q: 'The film ___ we saw was boring.', choices: ['who', 'that', 'whose', 'where'], answer: 1, explain: 'That/which cho vật.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 397, lesson: 10, q: 'Dịch: "Đây là trường học nơi tôi học."', choices: ['This is the school who I study.', 'This is the school which I study.', 'This is the school where I study.', 'This is the school whose I study.'], answer: 2, explain: 'Địa điểm → where.', type: 'Dịch Việt-Anh', level: 'Nâng cao' },
  { id: 398, lesson: 10, q: 'The woman ___ car was stolen called the police.', choices: ['who', 'whose', 'which', 'that'], answer: 1, explain: 'Whose car = xe của ai.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 399, lesson: 10, q: 'Đại từ quan hệ nào có thể bỏ?', choices: ['chủ ngữ của mệnh đề', 'tân ngữ của mệnh đề', 'luôn luôn bỏ được', 'không bao giờ bỏ'], answer: 1, explain: 'Khi làm tân ngữ có thể bỏ.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 400, lesson: 10, q: 'Chọn câu đúng.', choices: ['My friend, who lives in Hanoi, is a teacher.', 'My friend, that lives in Hanoi, is a teacher.', 'My friend, which lives in Hanoi, is a teacher.', 'My friend, where lives in Hanoi, is a teacher.'], answer: 0, explain: 'Mệnh đề không xác định, người → who.', type: 'Chọn đáp án', level: 'Nâng cao' },

  // ========== BÀI 11: Câu bị động ==========
  { id: 401, lesson: 11, q: 'The house ___ built in 1990.', choices: ['is', 'was', 'has', 'were'], answer: 1, explain: 'Quá khứ đơn bị động → was + V3.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 402, lesson: 11, q: 'English ___ all over the world.', choices: ['speaks', 'is spoken', 'speaking', 'is speaking'], answer: 1, explain: 'Bị động → is + V3.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 403, lesson: 11, q: 'The letter ___ tomorrow.', choices: ['will send', 'will be sent', 'sends', 'is send'], answer: 1, explain: 'Tương lai bị động → will be + V3.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 404, lesson: 11, q: 'Chuyển sang bị động: "They built this bridge."', choices: ['This bridge is built.', 'This bridge was built.', 'This bridge were built.', 'This bridge has built.'], answer: 1, explain: 'Was + V3.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 405, lesson: 11, q: 'Tìm câu SAI.', choices: ['The cake was eaten.', 'The work is done.', 'The window is broke.', 'The letters were sent.'], answer: 2, explain: 'Broke là V2, phải dùng broken.', type: 'Tìm lỗi', level: 'Nâng cao' },
  { id: 406, lesson: 11, q: 'This room ___ every day.', choices: ['cleans', 'is cleaned', 'cleaned', 'is cleaning'], answer: 1, explain: 'Bị động hiện tại đơn → is + V3.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 407, lesson: 11, q: 'Câu nào là bị động?', choices: ['She wrote a letter.', 'A letter was written by her.', 'She is writing.', 'She writes letters.'], answer: 1, explain: 'Was + written = bị động.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 408, lesson: 11, q: 'Dịch: "Cuốn sách này được viết bởi Nam."', choices: ['This book writes Nam.', 'This book was written by Nam.', 'This book is write by Nam.', 'Nam writes this book.'], answer: 1, explain: 'Bị động + by agent.', type: 'Dịch Việt-Anh', level: 'Nâng cao' },
  { id: 409, lesson: 11, q: 'The problem ___ by our team.', choices: ['solved', 'was solved', 'is solve', 'solving'], answer: 1, explain: 'Was + V3.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 410, lesson: 11, q: 'Công thức chung của bị động là gì?', choices: ['have + V3', 'be + V3', 'do + V3', 'be + V-ing'], answer: 1, explain: 'Be + V3.', type: 'Chọn đáp án', level: 'Vừa' },

  // ========== BÀI 12: Câu hỏi và trật tự từ ==========
  { id: 411, lesson: 12, q: '___ do you live?', choices: ['What', 'Where', 'When', 'Who'], answer: 1, explain: 'Where hỏi địa điểm.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 412, lesson: 12, q: '___ is your birthday?', choices: ['Where', 'When', 'Who', 'Why'], answer: 1, explain: 'When hỏi thời gian.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 413, lesson: 12, q: 'Tìm câu hỏi SAI.', choices: ['Do you like tea?', 'Where you live?', 'Who is that?', 'What time is it?'], answer: 1, explain: 'Thiếu trợ động từ: Where do you live?', type: 'Tìm lỗi', level: 'Vừa' },
  { id: 414, lesson: 12, q: 'How ___ students are there in the class?', choices: ['much', 'many', 'long', 'far'], answer: 1, explain: 'How many + danh từ đếm được số nhiều.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 415, lesson: 12, q: '___ did you go to school yesterday?', choices: ['What', 'Who', 'How', 'Where'], answer: 2, explain: 'How = bằng cách nào.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 416, lesson: 12, q: 'Who ___ that man?', choices: ['is', 'are', 'do', 'does'], answer: 0, explain: 'Who + be.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 417, lesson: 12, q: 'Chọn câu hỏi đúng.', choices: ['What you did yesterday?', 'What did you do yesterday?', 'What you do yesterday?', 'What did you did yesterday?'], answer: 1, explain: 'Did + S + V.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 418, lesson: 12, q: '___ are you crying?', choices: ['What', 'Why', 'Where', 'When'], answer: 1, explain: 'Why hỏi lý do.', type: 'Chọn đáp án', level: 'Cơ bản' },
  { id: 419, lesson: 12, q: 'Dịch: "Bạn đến từ đâu?"', choices: ['Where you come from?', 'Where do you come from?', 'Where you from?', 'You come from where?'], answer: 1, explain: 'Where + do + S + V.', type: 'Dịch Việt-Anh', level: 'Vừa' },
  { id: 420, lesson: 12, q: 'Câu hỏi gián tiếp nào đúng?', choices: ['Can you tell me where is the bank?', 'Can you tell me where the bank is?', 'Can you tell me where does the bank?', 'Can you tell me where the bank?'], answer: 1, explain: 'Gián tiếp không đảo ngữ.', type: 'Chọn đáp án', level: 'Nâng cao' },

  // ========== BÀI 13: V-ing và to + V ==========
  { id: 421, lesson: 13, q: 'I enjoy ___ to music.', choices: ['listen', 'listening', 'to listen', 'listened'], answer: 1, explain: 'Enjoy + V-ing.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 422, lesson: 13, q: 'She wants ___ a new phone.', choices: ['buy', 'buying', 'to buy', 'bought'], answer: 2, explain: 'Want + to + V.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 423, lesson: 13, q: 'Have you finished ___ the report?', choices: ['write', 'writing', 'to write', 'wrote'], answer: 1, explain: 'Finish + V-ing.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 424, lesson: 13, q: 'They decided ___ early.', choices: ['leave', 'leaving', 'to leave', 'left'], answer: 2, explain: 'Decide + to + V.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 425, lesson: 13, q: 'Tìm câu SAI.', choices: ['I avoid eating sugar.', 'She hopes to pass.', 'He suggested to go out.', 'They agreed to help.'], answer: 2, explain: 'Suggest + V-ing.', type: 'Tìm lỗi', level: 'Nâng cao' },
  { id: 426, lesson: 13, q: 'I look forward to ___ from you.', choices: ['hear', 'hearing', 'heard', 'to hear'], answer: 1, explain: 'Look forward to + V-ing.', type: 'Chọn đáp án', level: 'Nâng cao' },
  { id: 427, lesson: 13, q: 'Thank you for ___ me.', choices: ['help', 'helping', 'to help', 'helped'], answer: 1, explain: 'Sau giới từ → V-ing.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 428, lesson: 13, q: 'Dịch: "Tôi thích đọc sách."', choices: ['I like read books.', 'I like reading books.', 'I like to reading books.', 'I like readed books.'], answer: 1, explain: 'Like + V-ing hoặc to + V. V-ing tự nhiên hơn.', type: 'Dịch Việt-Anh', level: 'Vừa' },
  { id: 429, lesson: 13, q: 'Stop ___! It\'s dangerous.', choices: ['run', 'running', 'to run', 'ran'], answer: 1, explain: 'Stop + V-ing = dừng hành động đang làm.', type: 'Chọn đáp án', level: 'Vừa' },
  { id: 430, lesson: 13, q: 'Động từ nào đi với V-ing?', choices: ['want', 'decide', 'enjoy', 'hope'], answer: 2, explain: 'Enjoy + V-ing.', type: 'Chọn đáp án', level: 'Vừa' }
]