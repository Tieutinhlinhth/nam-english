export const LESSONS = [
  {
    id: 1,
    title: 'Cấu trúc câu cơ bản',
    short: 'S + V, S + V + O và động từ be',
    objectives: [
      'Nhận diện được chủ ngữ (S) và động từ (V) trong câu',
      'Phân biệt câu dùng động từ be với câu dùng động từ thường',
      'Viết câu đúng trật tự S + V + O + Place + Time'
    ],
    sections: [
      { heading: '1. Câu hoàn chỉnh', text: 'Câu tiếng Anh thường cần chủ ngữ và động từ. Chủ ngữ cho biết ai hoặc cái gì; động từ cho biết hành động hoặc trạng thái.', formula: 'S + V', example: 'The baby is sleeping. — Em bé đang ngủ.' },
      { heading: '2. Tân ngữ', text: 'Động từ như buy, need, call và open thường có tân ngữ. Hỏi “ai?” hoặc “cái gì?” sau động từ để tìm tân ngữ.', formula: 'S + V + O', example: 'Nam opened the door. — Nam mở cửa.' },
      { heading: '3. Động từ be', text: 'Dùng am/is/are trước tính từ, danh từ nghề nghiệp hoặc địa điểm. Không dùng do/does thay cho be.', formula: 'S + be + adjective/noun/place', example: 'My manager is busy. — Quản lý của tôi đang bận.' },
      { heading: '4. Trật tự từ', text: 'Vị trí dễ dùng là chủ ngữ, động từ, tân ngữ, địa điểm rồi thời gian. Thời gian có thể đưa lên đầu để nhấn mạnh.', formula: 'S + V + O + Place + Time', example: 'I met Lan at the office yesterday.' },
      { heading: '5. Lỗi cần tránh', text: 'Không bỏ be, không đặt am/is/are trước động từ nguyên mẫu, và không dịch nguyên trật tự tiếng Việt sang tiếng Anh.', formula: '', example: 'Sai: I am work. Đúng: I work / I am working.' }
    ],
    vocabulary: [
      { word: 'subject', ipa: '/ˈsʌbdʒɪkt/', meaning: 'chủ ngữ', example: 'In “Nam works”, “Nam” is the subject.' },
      { word: 'verb', ipa: '/vɜːb/', meaning: 'động từ', example: '“Works” is the verb in that sentence.' },
      { word: 'object', ipa: '/ˈɒbdʒɪkt/', meaning: 'tân ngữ', example: '“The door” is the object in “He opened the door”.' },
      { word: 'sentence', ipa: '/ˈsentəns/', meaning: 'câu', example: 'Write a full sentence, not a phrase.' },
      { word: 'manager', ipa: '/ˈmænɪdʒə/', meaning: 'quản lý', example: 'My manager is busy today.' }
    ],
    commonMistakes: [
      { wrong: 'My brother very tall.', right: 'My brother is very tall.', why: 'Tính từ cần động từ be, không đứng trơ sau chủ ngữ.' },
      { wrong: 'I am work in Ha Noi.', right: 'I work in Ha Noi.', why: 'Không dùng be + động từ nguyên mẫu. Dùng V hoặc be + V-ing.' },
      { wrong: 'He opened door.', right: 'He opened the door.', why: 'Danh từ đếm được số ít cần mạo từ a/an/the.' }
    ],
    tips: [
      'Luôn tự hỏi “Ai? Làm gì?” để xác định S và V trước khi viết câu.',
      'Nếu câu đã có am/is/are thì không dùng do/does để phủ định hay đặt câu hỏi.',
      'Thời gian (yesterday, every day…) đứng cuối câu. Muốn nhấn mạnh thì đưa lên đầu + dấu phẩy.'
    ],
    realLife: [
      'Nhắn tin: “I’m at the office now.” — Tôi đang ở văn phòng.',
      'Mô tả người: “My sister is a nurse.” — Chị tôi là y tá.'
    ]
  },
  {
    id: 2,
    title: 'Hiện tại đơn và hiện tại tiếp diễn',
    short: 'Thói quen và hành động đang xảy ra',
    objectives: [
      'Phân biệt thói quen (hiện tại đơn) và hành động đang xảy ra (tiếp diễn)',
      'Chia đúng động từ với he/she/it (thêm -s/-es)',
      'Nhận biết các động từ trạng thái không dùng ở dạng tiếp diễn'
    ],
    sections: [
      { heading: '1. Hiện tại đơn', text: 'Dùng cho thói quen, lịch trình, sự thật và tình trạng ổn định. Với he/she/it, động từ khẳng định thêm -s hoặc -es.', formula: 'I/You/We/They + V; He/She/It + V-s/es', example: 'She works in a bank.' },
      { heading: '2. Phủ định và câu hỏi', text: 'Dùng do/does. Sau does hoặc doesn’t, động từ trở về nguyên mẫu.', formula: 'do/does + V', example: 'Does Nam drive? / Nam doesn’t drive.' },
      { heading: '3. Hiện tại tiếp diễn', text: 'Dùng cho việc đang diễn ra hoặc tình huống tạm thời trong giai đoạn hiện tại.', formula: 'S + am/is/are + V-ing', example: 'I am working from home this week.' },
      { heading: '4. Động từ trạng thái', text: 'Know, understand, want, need, believe và belong thường không dùng ở dạng tiếp diễn.', formula: '', example: 'I know the answer, không nói I am knowing.' },
      { heading: '5. Cách chọn', text: 'Hỏi: đây là thói quen hay việc đang diễn ra/tạm thời? Đừng chỉ săn từ khóa.', formula: '', example: 'Every day → thường hiện tại đơn; right now → thường tiếp diễn.' }
    ],
    vocabulary: [
      { word: 'habit', ipa: '/ˈhæbɪt/', meaning: 'thói quen', example: 'Reading before bed is a good habit.' },
      { word: 'temporary', ipa: '/ˈtempərəri/', meaning: 'tạm thời', example: 'This is a temporary office.' },
      { word: 'permanent', ipa: '/ˈpɜːmənənt/', meaning: 'lâu dài', example: 'She has a permanent job.' },
      { word: 'usually', ipa: '/ˈjuːʒuəli/', meaning: 'thường xuyên', example: 'I usually wake up at six.' },
      { word: 'right now', ipa: '/raɪt naʊ/', meaning: 'ngay bây giờ', example: 'He is talking on the phone right now.' }
    ],
    commonMistakes: [
      { wrong: 'She work here.', right: 'She works here.', why: 'He/She/It + V-s ở khẳng định hiện tại đơn.' },
      { wrong: 'I am knowing the answer.', right: 'I know the answer.', why: 'Know là động từ trạng thái — không chia tiếp diễn.' },
      { wrong: 'Does she works here?', right: 'Does she work here?', why: 'Sau does, động từ trở về nguyên mẫu.' }
    ],
    tips: [
      'Từ khóa hiện tại đơn: always, usually, often, sometimes, never, every day.',
      'Từ khóa tiếp diễn: now, at the moment, currently, look!, listen!, today.',
      'Học thuộc nhóm động từ trạng thái: know, understand, want, need, believe, love, hate, like, seem.'
    ],
    realLife: [
      'Nói về công việc: “I work from home on Fridays.” — Tôi làm ở nhà vào thứ Sáu.',
      'Cập nhật tình hình: “I’m working on a project this week.” — Tuần này tôi đang làm một dự án.'
    ]
  },
  {
    id: 3,
    title: 'Quá khứ đơn',
    short: 'Việc đã xảy ra và kết thúc',
    objectives: [
      'Kể sự việc đã kết thúc trong quá khứ',
      'Dùng đúng động từ bất quy tắc (go-went, buy-bought)',
      'Phân biệt was/were và did trong câu hỏi/phủ định'
    ],
    sections: [
      { heading: '1. Cách dùng', text: 'Dùng cho hành động đã kết thúc, chuỗi sự kiện hoặc thói quen cũ.', formula: 'S + V2', example: 'I called Lan last night.' },
      { heading: '2. Động từ có quy tắc', text: 'Thông thường thêm -ed. Một số từ đổi chính tả: study → studied, stop → stopped.', formula: 'V + ed', example: 'We finished the report.' },
      { heading: '3. Động từ bất quy tắc', text: 'Các động từ phổ biến phải học theo cụm: go-went-gone, see-saw-seen, buy-bought-bought.', formula: '', example: 'Nam went home.' },
      { heading: '4. Phủ định và câu hỏi', text: 'Did/didn’t đã mang dấu hiệu quá khứ nên động từ chính dùng nguyên mẫu.', formula: 'didn’t + V; Did + S + V?', example: 'Did she call? / She didn’t call.' },
      { heading: '5. Was và were', text: 'I/he/she/it đi với was; you/we/they đi với were. Không dùng did với was/were.', formula: '', example: 'Were you busy?' }
    ],
    vocabulary: [
      { word: 'yesterday', ipa: '/ˈjestədeɪ/', meaning: 'hôm qua', example: 'I saw her yesterday.' },
      { word: 'last week', ipa: '/lɑːst wiːk/', meaning: 'tuần trước', example: 'We met last week.' },
      { word: 'ago', ipa: '/əˈɡəʊ/', meaning: 'trước đây (khoảng thời gian)', example: 'She left two days ago.' },
      { word: 'irregular', ipa: '/ɪˈreɡjələ/', meaning: 'bất quy tắc', example: '“Go” is an irregular verb.' },
      { word: 'event', ipa: '/ɪˈvent/', meaning: 'sự kiện', example: 'The event happened last Sunday.' }
    ],
    commonMistakes: [
      { wrong: 'I did went to the market.', right: 'I went to the market.', why: 'Did đã mang nghĩa quá khứ — động từ chính không chia nữa.' },
      { wrong: 'She didn’t called me.', right: 'She didn’t call me.', why: 'Sau didn’t, động từ về nguyên mẫu.' },
      { wrong: 'They was happy.', right: 'They were happy.', why: 'You/We/They đi với were, không phải was.' }
    ],
    tips: [
      'Dấu hiệu quá khứ: yesterday, last …, … ago, in 2020, when I was young.',
      'Học động từ bất quy tắc theo cụm 3 dạng: V1-V2-V3. Ví dụ: see-saw-seen.',
      'Câu hỏi quá khứ: Did + S + V? — sau did luôn là V nguyên mẫu.'
    ],
    realLife: [
      'Kể chuyến đi: “I went to Da Nang last week.” — Tuần trước tôi đi Đà Nẵng.',
      'Báo cáo công việc: “We finished the report yesterday.” — Hôm qua chúng tôi xong báo cáo.'
    ]
  },
  {
    id: 4,
    title: 'Hiện tại hoàn thành',
    short: 'Quá khứ kết nối với hiện tại',
    objectives: [
      'Diễn tả kết quả hoặc trải nghiệm còn liên quan đến hiện tại',
      'Phân biệt for (khoảng) và since (mốc bắt đầu)',
      'Không dùng với thời gian đã kết thúc (yesterday, last week)'
    ],
    sections: [
      { heading: '1. Công thức', text: 'Dùng have/has + V3. He/she/it dùng has.', formula: 'S + have/has + V3', example: 'She has finished the report.' },
      { heading: '2. Kết quả hiện tại', text: 'Một việc đã xảy ra nhưng hậu quả còn quan trọng bây giờ.', formula: '', example: 'I have lost my key. — Hiện vẫn chưa có chìa khóa.' },
      { heading: '3. Trải nghiệm', text: 'Dùng ever/never để nói trải nghiệm tính đến hiện tại.', formula: '', example: 'Have you ever visited Da Nang?' },
      { heading: '4. For và since', text: 'For đi với khoảng thời gian; since đi với điểm bắt đầu.', formula: 'for + duration; since + starting point', example: 'for five years / since 2021' },
      { heading: '5. Quá khứ đơn hay hoàn thành', text: 'Có thời điểm quá khứ đã kết thúc như yesterday, last week, in 2020 thì dùng quá khứ đơn.', formula: '', example: 'I saw Lan yesterday, không nói have seen yesterday.' }
    ],
    vocabulary: [
      { word: 'already', ipa: '/ɔːlˈredi/', meaning: 'đã rồi', example: 'I have already eaten lunch.' },
      { word: 'yet', ipa: '/jet/', meaning: 'chưa (trong câu phủ định/hỏi)', example: 'Have you finished yet?' },
      { word: 'ever', ipa: '/ˈevə/', meaning: 'đã từng (trong câu hỏi)', example: 'Have you ever been to Japan?' },
      { word: 'never', ipa: '/ˈnevə/', meaning: 'chưa từng', example: 'I have never eaten sushi.' },
      { word: 'experience', ipa: '/ɪkˈspɪəriəns/', meaning: 'trải nghiệm', example: 'It was a great experience.' }
    ],
    commonMistakes: [
      { wrong: 'I have seen him yesterday.', right: 'I saw him yesterday.', why: 'Yesterday là thời gian đã kết thúc → dùng quá khứ đơn.' },
      { wrong: 'She has went home.', right: 'She has gone home.', why: 'Sau has dùng V3 (gone), không dùng V2 (went).' },
      { wrong: 'I live here since 2020.', right: 'I have lived here since 2020.', why: 'Since + mốc thời gian → chia hiện tại hoàn thành.' }
    ],
    tips: [
      'Nhớ cặp từ đôi: already/yet, ever/never, just/recently — luôn dùng với hiện tại hoàn thành.',
      'For = khoảng (for 3 years). Since = mốc (since 2020).',
      'Thấy yesterday/last/in + năm → chuyển sang quá khứ đơn ngay.'
    ],
    realLife: [
      'Phỏng vấn xin việc: “I have worked here for five years.”',
      'Trải nghiệm du lịch: “Have you ever been to Japan?”'
    ]
  },
  {
    id: 5,
    title: 'Các cách nói về tương lai',
    short: 'Will, going to và lịch đã chốt',
    objectives: [
      'Phân biệt will, be going to, hiện tại tiếp diễn khi nói về tương lai',
      'Dùng hiện tại đơn cho lịch trình chính thức',
      'Chọn cách nói đúng theo ngữ cảnh giao tiếp'
    ],
    sections: [
      { heading: '1. Will', text: 'Dùng cho quyết định ngay lúc nói, lời hứa, đề nghị và dự đoán mang tính ý kiến.', formula: 'will + V', example: 'I’ll answer the phone.' },
      { heading: '2. Be going to', text: 'Dùng cho kế hoạch đã có hoặc dự đoán dựa trên dấu hiệu rõ.', formula: 'be going to + V', example: 'Look at the clouds. It is going to rain.' },
      { heading: '3. Hiện tại tiếp diễn', text: 'Dùng cho lịch hẹn hoặc sắp xếp đã chốt với thời gian cụ thể.', formula: 'be + V-ing', example: 'I am meeting a client at 2 p.m.' },
      { heading: '4. Hiện tại đơn', text: 'Dùng cho lịch trình chính thức như tàu, xe, chuyến bay hoặc lớp học.', formula: 'S + V/V-s', example: 'The train leaves at 6:15.' },
      { heading: '5. Lỗi cần tránh', text: 'Sau will dùng động từ nguyên mẫu; going to phải có động từ be.', formula: '', example: 'She will come / I am going to buy.' }
    ],
    vocabulary: [
      { word: 'plan', ipa: '/plæn/', meaning: 'kế hoạch', example: 'What are your plans for the weekend?' },
      { word: 'promise', ipa: '/ˈprɒmɪs/', meaning: 'lời hứa', example: 'I promise I’ll call you.' },
      { word: 'schedule', ipa: '/ˈʃedjuːl/', meaning: 'lịch trình', example: 'The flight schedule is on the website.' },
      { word: 'prediction', ipa: '/prɪˈdɪkʃn/', meaning: 'dự đoán', example: 'My prediction is that prices will rise.' },
      { word: 'arrangement', ipa: '/əˈreɪndʒmənt/', meaning: 'sắp xếp đã chốt', example: 'I have an arrangement with a client.' }
    ],
    commonMistakes: [
      { wrong: 'I will to go tomorrow.', right: 'I will go tomorrow.', why: 'Sau will không dùng to.' },
      { wrong: 'I am go to travel.', right: 'I am going to travel.', why: 'Going to phải có be phía trước và V-ing sau be.' },
      { wrong: 'The train will leaves at 6.', right: 'The train leaves at 6.', why: 'Lịch trình chính thức dùng hiện tại đơn, không dùng will.' }
    ],
    tips: [
      'Will — quyết định ngay, lời hứa, đề nghị: “I’ll help you.”',
      'Going to — kế hoạch đã có, dự đoán có bằng chứng: “It’s going to rain.”',
      'Tiếp diễn cho lịch hẹn đã chốt, hiện tại đơn cho lịch trình.'
    ],
    realLife: [
      'Đặt lịch họp: “I’m meeting him at 2 p.m. tomorrow.”',
      'Lời hứa: “I’ll call you tonight, I promise.”'
    ]
  },
  {
    id: 6,
    title: 'Động từ khuyết thiếu',
    short: 'Can, could, should, must và have to',
    objectives: [
      'Dùng đúng can, could, should, must, have to',
      'Phân biệt mustn’t (bị cấm) và don’t have to (không cần)',
      'Tránh lỗi thêm “to” sau modal'
    ],
    sections: [
      { heading: '1. Quy tắc chung', text: 'Sau can, could, should, must dùng động từ nguyên mẫu, không có to và không thêm -s.', formula: 'modal + V', example: 'She can drive.' },
      { heading: '2. Can và could', text: 'Can nói khả năng hiện tại hoặc lời nhờ; could nói khả năng quá khứ hoặc lời nhờ lịch sự hơn.', formula: '', example: 'Could you speak slowly?' },
      { heading: '3. Should', text: 'Dùng cho lời khuyên hoặc điều hợp lý nên làm.', formula: 'should + V', example: 'You should check the address.' },
      { heading: '4. Must và have to', text: 'Must thường thể hiện yêu cầu mạnh của người nói; have to thường đến từ quy định hoặc hoàn cảnh.', formula: '', example: 'Employees have to show ID.' },
      { heading: '5. Mustn’t và don’t have to', text: 'Mustn’t là bị cấm. Don’t have to là không cần nhưng vẫn có thể làm.', formula: '', example: 'You mustn’t park here / You don’t have to come early.' }
    ],
    vocabulary: [
      { word: 'ability', ipa: '/əˈbɪləti/', meaning: 'khả năng', example: 'She has the ability to lead.' },
      { word: 'advice', ipa: '/ədˈvaɪs/', meaning: 'lời khuyên', example: 'Can you give me some advice?' },
      { word: 'obligation', ipa: '/ˌɒblɪˈɡeɪʃn/', meaning: 'nghĩa vụ', example: 'Paying taxes is an obligation.' },
      { word: 'permission', ipa: '/pəˈmɪʃn/', meaning: 'sự cho phép', example: 'You need permission to enter.' },
      { word: 'prohibition', ipa: '/ˌprəʊɪˈbɪʃn/', meaning: 'sự cấm', example: 'There is a prohibition on smoking.' }
    ],
    commonMistakes: [
      { wrong: 'She can to drive.', right: 'She can drive.', why: 'Sau can không dùng to.' },
      { wrong: 'You must to go now.', right: 'You must go now.', why: 'Sau must không dùng to.' },
      { wrong: 'You mustn’t come early.', right: 'You don’t have to come early.', why: 'Mustn’t = bị cấm. Muốn nói “không cần” thì dùng don’t have to.' }
    ],
    tips: [
      'Modal + V (không to, không -s): can, could, should, must, will.',
      'Have to thì có to và chia theo chủ ngữ: has to, had to.',
      'Nhớ: Mustn’t ≠ Don’t have to. Cấm khác với không cần.'
    ],
    realLife: [
      'Lời khuyên: “You should see a doctor.” — Bạn nên đi khám.',
      'Quy định công ty: “Employees have to show ID.” — Nhân viên phải xuất trình giấy tờ.'
    ]
  },
  {
    id: 7,
    title: 'Danh từ, mạo từ và lượng từ',
    short: 'A, an, the, some, any, much, many',
    objectives: [
      'Phân biệt danh từ đếm được và không đếm được',
      'Dùng a/an/the đúng ngữ cảnh',
      'Chọn some/any/much/many/a lot of phù hợp'
    ],
    sections: [
      { heading: '1. Danh từ đếm được', text: 'Danh từ số ít cần a/an/the hoặc từ xác định như my, this. Số nhiều thường thêm -s/-es.', formula: '', example: 'a laptop / two laptops' },
      { heading: '2. Danh từ không đếm được', text: 'Advice, information, furniture, equipment, traffic và money không dùng với a/an và thường không thêm -s.', formula: '', example: 'some advice / a piece of information' },
      { heading: '3. A, an và the', text: 'A/an dùng khi nhắc lần đầu hoặc chưa xác định; the dùng khi người nghe biết rõ vật nào. Chọn a/an theo âm.', formula: '', example: 'an hour nhưng a university' },
      { heading: '4. Some và any', text: 'Some thường dùng trong câu khẳng định và lời mời; any thường dùng trong câu hỏi và phủ định.', formula: '', example: 'Do you have any questions?' },
      { heading: '5. Much và many', text: 'Many đi với danh từ đếm được số nhiều; much đi với danh từ không đếm được. A lot of dùng tự nhiên với cả hai.', formula: '', example: 'many emails / much time / a lot of work' }
    ],
    vocabulary: [
      { word: 'countable', ipa: '/ˈkaʊntəbl/', meaning: 'đếm được', example: '“Book” is a countable noun.' },
      { word: 'uncountable', ipa: '/ʌnˈkaʊntəbl/', meaning: 'không đếm được', example: '“Water” is uncountable.' },
      { word: 'article', ipa: '/ˈɑːtɪkl/', meaning: 'mạo từ (a/an/the)', example: 'Use the article “a” for singular nouns.' },
      { word: 'quantity', ipa: '/ˈkwɒntəti/', meaning: 'số lượng', example: 'What quantity do you need?' },
      { word: 'amount', ipa: '/əˈmaʊnt/', meaning: 'khối lượng', example: 'A large amount of money.' }
    ],
    commonMistakes: [
      { wrong: 'I need an information.', right: 'I need some information.', why: 'Information không đếm được — không dùng a/an.' },
      { wrong: 'I have many money.', right: 'I have a lot of money.', why: 'Money không đếm được — dùng much hoặc a lot of.' },
      { wrong: 'I bought a furnitures.', right: 'I bought some furniture.', why: 'Furniture không đếm được, không thêm -s, không dùng a.' }
    ],
    tips: [
      'Học thuộc danh sách không đếm được: advice, information, furniture, equipment, traffic, money, news, work.',
      'A/an chọn theo ÂM, không theo chữ cái: an hour / a university.',
      'Some dùng khẳng định & lời mời. Any dùng câu hỏi & phủ định.'
    ],
    realLife: [
      'Dịch vụ khách hàng: “Do you have any questions?” — Anh/chị có câu hỏi nào không?',
      'Nhận xét giao thông: “There is too much traffic today.”'
    ]
  },
  {
    id: 8,
    title: 'So sánh',
    short: 'So sánh hơn, nhất và bằng',
    objectives: [
      'Dùng đúng so sánh hơn, so sánh nhất và so sánh bằng',
      'Xử lý tính từ bất quy tắc (good-better-best)',
      'Tránh lỗi “more better”, “very faster”'
    ],
    sections: [
      { heading: '1. So sánh hơn', text: 'Tính từ ngắn thêm -er; tính từ dài dùng more. Dùng than khi nêu đối tượng so sánh.', formula: 'adj-er + than; more + adj + than', example: 'faster than / more useful than' },
      { heading: '2. So sánh nhất', text: 'Dùng the + -est hoặc the most.', formula: '', example: 'the cheapest / the most expensive' },
      { heading: '3. Bất quy tắc', text: 'Good-better-best; bad-worse-worst; many/much-more-most.', formula: '', example: 'This option is better.' },
      { heading: '4. So sánh bằng', text: 'Dùng as + adjective + as; phủ định dùng not as...as.', formula: '', example: 'A bus is not as fast as a taxi.' },
      { heading: '5. Mức độ', text: 'Dùng much, far, a little hoặc slightly trước dạng so sánh hơn; không dùng very.', formula: '', example: 'much faster, không nói very faster' }
    ],
    vocabulary: [
      { word: 'comparison', ipa: '/kəmˈpærɪsn/', meaning: 'sự so sánh', example: 'Make a comparison between the two.' },
      { word: 'superior', ipa: '/suːˈpɪəriə/', meaning: 'cao hơn, tốt hơn', example: 'This model is superior to the old one.' },
      { word: 'inferior', ipa: '/ɪnˈfɪəriə/', meaning: 'thấp hơn, kém hơn', example: 'The quality is inferior.' },
      { word: 'equal', ipa: '/ˈiːkwəl/', meaning: 'bằng nhau', example: 'Their scores are equal.' },
      { word: 'similar', ipa: '/ˈsɪmələ/', meaning: 'tương tự', example: 'The two designs are similar.' }
    ],
    commonMistakes: [
      { wrong: 'She is more taller than me.', right: 'She is taller than me.', why: 'Tall là tính từ ngắn, không dùng “more” cùng lúc với -er.' },
      { wrong: 'This is the most cheapest.', right: 'This is the cheapest.', why: 'Không dùng “most” với tính từ đã có -est.' },
      { wrong: 'He runs very faster.', right: 'He runs much faster.', why: 'Không dùng very trước dạng so sánh hơn — dùng much hoặc far.' }
    ],
    tips: [
      'Tính từ 1 âm tiết → +er / est. Tính từ 2+ âm tiết → more / most.',
      'Học các dạng bất quy tắc: good-better-best, bad-worse-worst, far-farther/further-farthest/furthest.',
      'Muốn nói “hơn nhiều” thì dùng much/far + so sánh hơn.'
    ],
    realLife: [
      'Mua sắm: “This one is cheaper than that one.”',
      'Nhận xét thời tiết: “Today is hotter than yesterday.”'
    ]
  },
  {
    id: 9,
    title: 'Câu điều kiện',
    short: 'Loại 0, 1, 2 và 3',
    objectives: [
      'Phân biệt 4 loại câu điều kiện',
      'Dùng đúng thì trong mệnh đề if',
      'Nhận biết unless và tránh lỗi kép phủ định'
    ],
    sections: [
      { heading: '1. Loại 0', text: 'Nói sự thật, quy luật hoặc kết quả thường xuyên.', formula: 'If + present, present', example: 'If you heat ice, it melts.' },
      { heading: '2. Loại 1', text: 'Nói khả năng thực tế ở tương lai. Sau if dùng hiện tại đơn, không dùng will.', formula: 'If + present, will + V', example: 'If it rains, we will stay home.' },
      { heading: '3. Loại 2', text: 'Nói giả định không thật hoặc khó xảy ra ở hiện tại.', formula: 'If + past, would + V', example: 'If I had more time, I would study.' },
      { heading: '4. Loại 3', text: 'Tưởng tượng lại một quá khứ đã không xảy ra.', formula: 'If + had + V3, would have + V3', example: 'If I had left earlier, I would have caught the bus.' },
      { heading: '5. Unless', text: 'Unless có nghĩa nếu không; không thêm phủ định sau unless.', formula: '', example: 'Unless you hurry, you will be late.' }
    ],
    vocabulary: [
      { word: 'condition', ipa: '/kənˈdɪʃn/', meaning: 'điều kiện', example: 'Under these conditions, we can proceed.' },
      { word: 'result', ipa: '/rɪˈzʌlt/', meaning: 'kết quả', example: 'The result depends on your effort.' },
      { word: 'hypothetical', ipa: '/ˌhaɪpəˈθetɪkl/', meaning: 'giả định', example: 'This is a hypothetical situation.' },
      { word: 'possibility', ipa: '/ˌpɒsəˈbɪləti/', meaning: 'khả năng', example: 'There is a possibility of rain.' },
      { word: 'unless', ipa: '/ənˈles/', meaning: 'trừ khi, nếu không', example: 'I won’t go unless you come too.' }
    ],
    commonMistakes: [
      { wrong: 'If it will rain, we will stay home.', right: 'If it rains, we will stay home.', why: 'Mệnh đề if loại 1 dùng hiện tại đơn, không dùng will.' },
      { wrong: 'If I would be rich, I would travel.', right: 'If I were rich, I would travel.', why: 'Loại 2 dùng quá khứ giả định, thường dùng “were” cho mọi chủ ngữ.' },
      { wrong: 'Unless you don’t hurry, we’ll be late.', right: 'Unless you hurry, we’ll be late.', why: 'Unless đã mang nghĩa phủ định — không thêm “don’t” nữa.' }
    ],
    tips: [
      'Loại 0 = sự thật (present + present). Loại 1 = tương lai có thể (present + will).',
      'Loại 2 = giả định hiện tại (past + would). Loại 3 = tiếc quá khứ (had V3 + would have V3).',
      'Quy tắc vàng: KHÔNG dùng “will” trong mệnh đề if.'
    ],
    realLife: [
      'Đàm phán: “If you order 100 units, we’ll give you a discount.”',
      'Nuối tiếc: “If I had known, I would have come earlier.”'
    ]
  },
  {
    id: 10,
    title: 'Mệnh đề quan hệ',
    short: 'Who, which, that, whose và where',
    objectives: [
      'Dùng who, which, that, whose, where đúng đối tượng',
      'Phân biệt mệnh đề xác định và không xác định',
      'Biết khi nào có thể bỏ đại từ quan hệ'
    ],
    sections: [
      { heading: '1. Who', text: 'Dùng cho người; có thể làm chủ ngữ hoặc tân ngữ trong mệnh đề quan hệ.', formula: '', example: 'The man who called me is my manager.' },
      { heading: '2. Which và that', text: 'Which dùng cho vật. That có thể dùng cho người hoặc vật trong mệnh đề xác định.', formula: '', example: 'The phone that I bought is expensive.' },
      { heading: '3. Whose', text: 'Dùng để chỉ sở hữu cho người hoặc vật.', formula: '', example: 'A customer whose order was delayed.' },
      { heading: '4. Where', text: 'Dùng cho địa điểm.', formula: '', example: 'This is the office where I work.' },
      { heading: '5. Dấu phẩy', text: 'Mệnh đề không xác định dùng dấu phẩy và không dùng that.', formula: '', example: 'Lan, who lives next door, is a nurse.' }
    ],
    vocabulary: [
      { word: 'relative', ipa: '/ˈrelətɪv/', meaning: 'quan hệ', example: 'A relative clause adds information.' },
      { word: 'clause', ipa: '/klɔːz/', meaning: 'mệnh đề', example: 'A clause has a subject and a verb.' },
      { word: 'defining', ipa: '/dɪˈfaɪnɪŋ/', meaning: 'xác định', example: 'A defining clause is essential.' },
      { word: 'non-defining', ipa: '/ˌnɒndɪˈfaɪnɪŋ/', meaning: 'không xác định', example: 'Non-defining clauses use commas.' },
      { word: 'pronoun', ipa: '/ˈprəʊnaʊn/', meaning: 'đại từ', example: '“Who” is a relative pronoun.' }
    ],
    commonMistakes: [
      { wrong: 'The woman which called me was polite.', right: 'The woman who called me was polite.', why: 'Người dùng who/that, không dùng which.' },
      { wrong: 'The man who car was stolen.', right: 'The man whose car was stolen.', why: 'Sở hữu dùng whose, không dùng who.' },
      { wrong: 'Lan, that lives next door, is a nurse.', right: 'Lan, who lives next door, is a nurse.', why: 'Mệnh đề không xác định (giữa dấu phẩy) không dùng that.' }
    ],
    tips: [
      'Người → who/that. Vật → which/that. Sở hữu → whose. Địa điểm → where.',
      'Có dấu phẩy → không dùng that.',
      'Đại từ quan hệ làm tân ngữ có thể bỏ: “The phone (that) I bought…”'
    ],
    realLife: [
      'Giới thiệu đồng nghiệp: “The colleague who sits next to me is very helpful.”',
      'Mô tả sản phẩm: “The phone that I bought last month is amazing.”'
    ]
  },
  {
    id: 11,
    title: 'Câu bị động',
    short: 'Be + V3',
    objectives: [
      'Chuyển câu chủ động sang bị động ở các thì chính',
      'Nhận biết khi nào nên dùng bị động',
      'Bỏ “by + tác nhân” khi không cần thiết'
    ],
    sections: [
      { heading: '1. Công thức', text: 'Câu bị động nhấn mạnh người hoặc vật chịu tác động. Thì nằm ở be; động từ chính dùng V3.', formula: 'be + V3', example: 'The office is cleaned every evening.' },
      { heading: '2. Quá khứ đơn', text: 'Dùng was/were + V3.', formula: 'was/were + V3', example: 'My phone was stolen.' },
      { heading: '3. Hiện tại hoàn thành', text: 'Dùng have/has been + V3.', formula: 'have/has been + V3', example: 'The problem has been fixed.' },
      { heading: '4. Tương lai và modal', text: 'Dùng will be + V3 hoặc modal + be + V3.', formula: '', example: 'The results will be announced / The form must be signed.' },
      { heading: '5. Khi nào dùng', text: 'Dùng khi không biết ai làm, người làm không quan trọng hoặc muốn nhấn mạnh kết quả.', formula: '', example: 'Không cần thêm by a mechanic khi điều đó quá rõ.' }
    ],
    vocabulary: [
      { word: 'passive', ipa: '/ˈpæsɪv/', meaning: 'bị động', example: 'Write this sentence in the passive.' },
      { word: 'active', ipa: '/ˈæktɪv/', meaning: 'chủ động', example: 'The active voice is often clearer.' },
      { word: 'agent', ipa: '/ˈeɪdʒənt/', meaning: 'tác nhân (người làm)', example: 'The agent can be omitted.' },
      { word: 'focus', ipa: '/ˈfəʊkəs/', meaning: 'nhấn mạnh', example: 'The passive puts focus on the result.' },
      { word: 'process', ipa: '/ˈprəʊses/', meaning: 'quy trình', example: 'The process is described in the manual.' }
    ],
    commonMistakes: [
      { wrong: 'The report has completed.', right: 'The report has been completed.', why: 'Bị động cần “been” trước V3: has been + V3.' },
      { wrong: 'The files were send.', right: 'The files were sent.', why: 'Sau be dùng V3 của send là “sent”, không dùng V1 “send”.' },
      { wrong: 'It must be approve.', right: 'It must be approved.', why: 'Sau be luôn dùng V3 (approved), không dùng V nguyên mẫu.' }
    ],
    tips: [
      'Công thức chung: be + V3. Thì luôn nằm ở be (is/was/has been/will be…).',
      'Bỏ “by + tác nhân” khi không quan trọng: “The email was sent” thay vì “by my secretary”.',
      'Bị động dùng khi: không biết ai làm, không cần biết, hoặc muốn nhấn mạnh đối tượng.'
    ],
    realLife: [
      'Công việc: “The email was sent to all clients.” — Email đã được gửi cho toàn bộ khách hàng.',
      'Quy định: “The form must be signed before submission.” — Biểu mẫu phải được ký trước khi nộp.'
    ]
  },
  {
    id: 12,
    title: 'Câu hỏi và trật tự từ',
    short: 'Đảo trợ động từ',
    objectives: [
      'Đặt đúng câu hỏi yes/no và wh-',
      'Phân biệt who là chủ ngữ và who là tân ngữ',
      'Nhớ trật tự ASI (Auxiliary – Subject – Infinitive)'
    ],
    sections: [
      { heading: '1. Với be', text: 'Đưa am/is/are/was/were lên trước chủ ngữ.', formula: '', example: 'Are you busy? / Was Lan at home?' },
      { heading: '2. Với động từ thường', text: 'Hiện tại dùng do/does; quá khứ dùng did. Sau trợ động từ dùng động từ nguyên mẫu.', formula: '', example: 'Where do you work?' },
      { heading: '3. Với trợ động từ có sẵn', text: 'Đưa have/has, will, can, should... lên trước chủ ngữ.', formula: '', example: 'Have you finished? / Can you help?' },
      { heading: '4. Từ để hỏi', text: 'Trật tự phổ biến: từ hỏi + trợ động từ + chủ ngữ + động từ.', formula: '', example: 'How long have you lived here?' },
      { heading: '5. Who là chủ ngữ', text: 'Khi who chính là người thực hiện hành động, không dùng do/does/did.', formula: '', example: 'Who called Lan?' }
    ],
    vocabulary: [
      { word: 'question', ipa: '/ˈkwestʃən/', meaning: 'câu hỏi', example: 'Can I ask a question?' },
      { word: 'auxiliary', ipa: '/ɔːɡˈzɪliəri/', meaning: 'trợ động từ', example: '“Do” is an auxiliary verb.' },
      { word: 'inversion', ipa: '/ɪnˈvɜːʃn/', meaning: 'đảo ngữ', example: 'Questions need inversion.' },
      { word: 'interrogative', ipa: '/ˌɪntəˈrɒɡətɪv/', meaning: 'nghi vấn', example: 'This is an interrogative sentence.' },
      { word: 'subject', ipa: '/ˈsʌbdʒɪkt/', meaning: 'chủ ngữ', example: 'The subject comes after the auxiliary.' }
    ],
    commonMistakes: [
      { wrong: 'Where you work?', right: 'Where do you work?', why: 'Câu hỏi với động từ thường phải có trợ động từ do/does/did.' },
      { wrong: 'Does he works here?', right: 'Does he work here?', why: 'Sau does, động từ về nguyên mẫu — không thêm -s.' },
      { wrong: 'Who did called Lan?', right: 'Who called Lan?', why: 'Khi who là chủ ngữ, không dùng did.' }
    ],
    tips: [
      'Nhớ từ ASI: Auxiliary + Subject + Infinitive. Ví dụ: “Do you like…?”',
      'Who làm chủ ngữ → động từ chia theo who, không dùng do/does/did.',
      'Câu hỏi gián tiếp KHÔNG đảo: “Could you tell me where the station is?”'
    ],
    realLife: [
      'Phỏng vấn: “Where do you see yourself in five years?”',
      'Hỏi đường: “How do I get to the railway station?”'
    ]
  },
  {
    id: 13,
    title: 'V-ing và to + động từ',
    short: 'Enjoy doing, want to do',
    objectives: [
      'Nhớ động từ nào đi với V-ing, động từ nào đi với to + V',
      'Dùng V-ing sau giới từ',
      'Phân biệt stop doing và stop to do'
    ],
    sections: [
      { heading: '1. V-ing', text: 'Enjoy, avoid, finish, keep, mind, suggest và consider thường đi với V-ing.', formula: '', example: 'I enjoy learning English.' },
      { heading: '2. To + V', text: 'Want, need, decide, plan, hope, promise và agree thường đi với to + V.', formula: '', example: 'We decided to leave early.' },
      { heading: '3. Sau giới từ', text: 'Sau in, on, at, for, without... dùng V-ing.', formula: '', example: 'Thank you for helping me.' },
      { heading: '4. Look forward to', text: 'Trong cấu trúc này, to là giới từ nên theo sau là V-ing.', formula: '', example: 'I look forward to hearing from you.' },
      { heading: '5. Đổi nghĩa', text: 'Stop doing là dừng hẳn; stop to do là dừng việc đang làm để làm việc khác.', formula: '', example: 'He stopped smoking / He stopped to smoke.' }
    ],
    vocabulary: [
      { word: 'gerund', ipa: '/ˈdʒerənd/', meaning: 'danh động từ (V-ing)', example: '“Swimming” is a gerund.' },
      { word: 'infinitive', ipa: '/ɪnˈfɪnətɪv/', meaning: 'nguyên mẫu (to + V)', example: '“To go” is an infinitive.' },
      { word: 'preposition', ipa: '/ˌprepəˈzɪʃn/', meaning: 'giới từ', example: '“In” and “at” are prepositions.' },
      { word: 'pattern', ipa: '/ˈpætn/', meaning: 'mẫu câu', example: 'Learn the verb patterns.' },
      { word: 'meaning', ipa: '/ˈmiːnɪŋ/', meaning: 'nghĩa', example: 'The meaning changes with V-ing.' }
    ],
    commonMistakes: [
      { wrong: 'I enjoy to read books.', right: 'I enjoy reading books.', why: 'Enjoy luôn đi với V-ing.' },
      { wrong: 'I want going home.', right: 'I want to go home.', why: 'Want đi với to + V.' },
      { wrong: 'I look forward to hear from you.', right: 'I look forward to hearing from you.', why: 'Trong “look forward to”, to là giới từ → theo sau là V-ing.' }
    ],
    tips: [
      'Học theo cặp: V-ing → enjoy, avoid, finish, mind, suggest, consider. To + V → want, need, decide, plan, hope, promise, agree.',
      'Sau giới từ (in, on, at, for, without, after, before) luôn dùng V-ing.',
      'Nhớ nghĩa kép: stop doing (dừng hẳn) ≠ stop to do (dừng để làm việc khác).'
    ],
    realLife: [
      'Viết email công việc: “I look forward to hearing from you.” — Tôi mong nhận hồi âm.',
      'Trò chuyện: “I enjoy learning English every day.” — Tôi thích học tiếng Anh mỗi ngày.'
    ]
  }
]


export const QUESTIONS = [
  {
    "id": 1,
    "lesson": 1,
    "q": "My manager ___ very busy today.",
    "choices": [
      "is",
      "work",
      "be",
      "does"
    ],
    "answer": 0,
    "explain": "Tính từ busy cần động từ be.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 2,
    "lesson": 1,
    "q": "The documents ___ on the table.",
    "choices": [
      "are",
      "has",
      "do",
      "is"
    ],
    "answer": 0,
    "explain": "Chủ ngữ số nhiều documents đi với are.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 3,
    "lesson": 1,
    "q": "Nam ___ the door every morning.",
    "choices": [
      "opens",
      "opening",
      "is open",
      "open"
    ],
    "answer": 0,
    "explain": "Thói quen với chủ ngữ Nam dùng opens.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 4,
    "lesson": 1,
    "q": "I ___ coffee before work.",
    "choices": [
      "am drink",
      "drink",
      "drinks",
      "is drinking"
    ],
    "answer": 1,
    "explain": "Chủ ngữ I dùng động từ nguyên mẫu trong hiện tại đơn.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 5,
    "lesson": 1,
    "q": "My sister ___ an engineer.",
    "choices": [
      "does",
      "has",
      "works",
      "is"
    ],
    "answer": 3,
    "explain": "Nghề nghiệp đi với động từ be.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 6,
    "lesson": 1,
    "q": "We ___ more time.",
    "choices": [
      "are need",
      "need",
      "needing",
      "needs"
    ],
    "answer": 1,
    "explain": "Need là động từ chính; we dùng need.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 7,
    "lesson": 1,
    "q": "The children ___ in the garden.",
    "choices": [
      "does",
      "is",
      "are",
      "be"
    ],
    "answer": 2,
    "explain": "Chủ ngữ số nhiều đi với are.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 8,
    "lesson": 1,
    "q": "My phone ___ suddenly.",
    "choices": [
      "rang",
      "did rang",
      "ringed",
      "was ring"
    ],
    "answer": 0,
    "explain": "Một hành động quá khứ hoàn chỉnh dùng rang.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 9,
    "lesson": 1,
    "q": "Sắp xếp thành câu đúng: every morning / I / coffee / drink",
    "choices": [
      "I every morning drink coffee.",
      "Coffee I drink every morning.",
      "Every morning drink I coffee.",
      "I drink coffee every morning."
    ],
    "answer": 3,
    "explain": "Trật tự là S + V + O + Time.",
    "type": "Sắp xếp từ",
    "level": "Cơ bản"
  },
  {
    "id": 10,
    "lesson": 1,
    "q": "Sắp xếp: yesterday / at the office / I / Lan / met",
    "choices": [
      "At the office yesterday met I Lan.",
      "I yesterday met at the office Lan.",
      "I met yesterday Lan at the office.",
      "I met Lan at the office yesterday."
    ],
    "answer": 3,
    "explain": "Địa điểm thường đứng trước thời gian.",
    "type": "Sắp xếp từ",
    "level": "Cơ bản"
  },
  {
    "id": 11,
    "lesson": 1,
    "q": "Tìm câu sai.",
    "choices": [
      "My brother very tall.",
      "My brother is very tall.",
      "My brother works nearby.",
      "My brother is at home."
    ],
    "answer": 0,
    "explain": "Câu thiếu động từ is.",
    "type": "Tìm lỗi",
    "level": "Cơ bản"
  },
  {
    "id": 12,
    "lesson": 1,
    "q": "Chọn câu tự nhiên nhất để nói “Tôi đang làm việc”.",
    "choices": [
      "I working.",
      "I am work.",
      "I do working.",
      "I am working."
    ],
    "answer": 3,
    "explain": "Hiện tại tiếp diễn cần am + V-ing.",
    "type": "Chọn câu tự nhiên",
    "level": "Cơ bản"
  },
  {
    "id": 13,
    "lesson": 1,
    "q": "Trong “Lan sent me an email”, từ nào là người nhận?",
    "choices": [
      "Lan",
      "sent",
      "me",
      "an email"
    ],
    "answer": 2,
    "explain": "Me là tân ngữ chỉ người nhận.",
    "type": "Nhận diện thành phần",
    "level": "Vừa"
  },
  {
    "id": 14,
    "lesson": 1,
    "q": "Trong “Nam opened the door”, tân ngữ là gì?",
    "choices": [
      "opened",
      "the door",
      "Nam",
      "không có tân ngữ"
    ],
    "answer": 1,
    "explain": "The door nhận tác động của hành động opened.",
    "type": "Nhận diện thành phần",
    "level": "Vừa"
  },
  {
    "id": 15,
    "lesson": 1,
    "q": "Dịch đúng: “Chìa khóa của tôi ở trên bàn.”",
    "choices": [
      "My keys is on the table.",
      "My keys on the table.",
      "My keys do on the table.",
      "My keys are on the table."
    ],
    "answer": 3,
    "explain": "My keys là số nhiều nên dùng are.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 16,
    "lesson": 1,
    "q": "Dịch đúng: “Quản lý gọi tôi sáng nay.”",
    "choices": [
      "My manager was call me this morning.",
      "My manager called me this morning.",
      "This morning called my manager me.",
      "My manager me called this morning."
    ],
    "answer": 1,
    "explain": "Dùng S + V + O + Time.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 17,
    "lesson": 1,
    "q": "Câu nào chỉ có S + V?",
    "choices": [
      "Nam opened the door.",
      "The baby cried.",
      "She sent an email.",
      "I drink coffee."
    ],
    "answer": 1,
    "explain": "Cried không cần tân ngữ.",
    "type": "Nhận diện cấu trúc",
    "level": "Vừa"
  },
  {
    "id": 18,
    "lesson": 1,
    "q": "Câu nào cần giới từ at?",
    "choices": [
      "He opened ___ the door.",
      "He called ___ me.",
      "He needs ___ help.",
      "He laughed ___ me."
    ],
    "answer": 3,
    "explain": "Laugh at someone là cấu trúc đúng.",
    "type": "Điền giới từ",
    "level": "Vừa"
  },
  {
    "id": 19,
    "lesson": 1,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Cấu trúc tồn tại dùng there is với danh từ số ít.",
    "choices": [
      "There a problem.",
      "Is a problem.",
      "There is a problem.",
      "There does a problem."
    ],
    "answer": 2,
    "explain": "Cấu trúc tồn tại dùng there is với danh từ số ít.",
    "type": "Chọn đáp án",
    "level": "Vừa"
  },
  {
    "id": 20,
    "lesson": 1,
    "q": "Tìm lỗi trong câu: “She is work in Ha Noi.”",
    "choices": [
      "She",
      "is work",
      "Ha Noi",
      "in"
    ],
    "answer": 1,
    "explain": "Không dùng is + động từ nguyên mẫu; dùng works hoặc is working.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 21,
    "lesson": 2,
    "q": "Lan usually ___ to work by bus.",
    "choices": [
      "go",
      "is going",
      "went",
      "goes"
    ],
    "answer": 3,
    "explain": "Usually chỉ thói quen; Lan dùng goes.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 22,
    "lesson": 2,
    "q": "Listen! Someone ___ at the door.",
    "choices": [
      "has knocked",
      "knocks",
      "knocked",
      "is knocking"
    ],
    "answer": 3,
    "explain": "Listen cho biết hành động đang diễn ra.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 23,
    "lesson": 2,
    "q": "We ___ a smaller office this week.",
    "choices": [
      "are using",
      "use",
      "uses",
      "used"
    ],
    "answer": 0,
    "explain": "This week là tình huống tạm thời.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 24,
    "lesson": 2,
    "q": "My parents ___ in Hai Phong.",
    "choices": [
      "lives",
      "are live",
      "is living",
      "live"
    ],
    "answer": 3,
    "explain": "Thông tin ổn định dùng hiện tại đơn.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 25,
    "lesson": 2,
    "q": "Why ___ a coat today?",
    "choices": [
      "do you wear",
      "you are wearing",
      "are you wearing",
      "did you wear"
    ],
    "answer": 2,
    "explain": "Today trong ngữ cảnh khác thường dùng tiếp diễn.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 26,
    "lesson": 2,
    "q": "Nam never ___ breakfast.",
    "choices": [
      "is eating",
      "eats",
      "eat",
      "ate"
    ],
    "answer": 1,
    "explain": "Never chỉ tần suất; Nam dùng eats.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 27,
    "lesson": 2,
    "q": "I ___ the answer.",
    "choices": [
      "knows",
      "am knowing",
      "knowing",
      "know"
    ],
    "answer": 3,
    "explain": "Know là động từ trạng thái.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 28,
    "lesson": 2,
    "q": "The shop ___ at 9 p.m. every day.",
    "choices": [
      "closed",
      "closes",
      "close",
      "is closing"
    ],
    "answer": 1,
    "explain": "Lịch thường lệ dùng hiện tại đơn.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 29,
    "lesson": 2,
    "q": "She ___ to a customer right now.",
    "choices": [
      "talks",
      "is talking",
      "talk",
      "talked"
    ],
    "answer": 1,
    "explain": "Right now dùng hiện tại tiếp diễn.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 30,
    "lesson": 2,
    "q": "___ Nam work from home on Fridays?",
    "choices": [
      "Is",
      "Do",
      "Has",
      "Does"
    ],
    "answer": 3,
    "explain": "Câu hỏi hiện tại đơn với Nam dùng Does.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 31,
    "lesson": 2,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Sau doesn’t dùng động từ nguyên mẫu.",
    "choices": [
      "She don’t work here.",
      "She doesn’t works here.",
      "She doesn’t work here.",
      "She isn’t work here."
    ],
    "answer": 2,
    "explain": "Sau doesn’t dùng động từ nguyên mẫu.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 32,
    "lesson": 2,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: They đi với are + waiting.",
    "choices": [
      "They is waiting outside.",
      "They are waiting outside.",
      "They are wait outside.",
      "They waiting outside."
    ],
    "answer": 1,
    "explain": "They đi với are + waiting.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 33,
    "lesson": 2,
    "q": "Tìm lỗi: “I am understanding you.”",
    "choices": [
      "I",
      "am understanding",
      "you",
      "không có lỗi"
    ],
    "answer": 1,
    "explain": "Understand thường không dùng tiếp diễn.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 34,
    "lesson": 2,
    "q": "Dịch: “Tôi thường dậy lúc 6 giờ.”",
    "choices": [
      "I usually wakes up at 6.",
      "I usually wake up at 6.",
      "Usually I am wake up at 6.",
      "I am usually waking up at 6."
    ],
    "answer": 1,
    "explain": "Thói quen dùng hiện tại đơn.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 35,
    "lesson": 2,
    "q": "Dịch: “Bây giờ tôi đang đợi xe buýt.”",
    "choices": [
      "I am waiting for the bus now.",
      "I waiting for the bus now.",
      "I wait for the bus now.",
      "I am wait the bus now."
    ],
    "answer": 0,
    "explain": "Đang diễn ra dùng am waiting; wait for.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 36,
    "lesson": 2,
    "q": "Câu nào mô tả tình huống tạm thời?",
    "choices": [
      "I usually drive to work.",
      "I live in Hanoi.",
      "Water boils at 100°C.",
      "I am staying with my sister this week."
    ],
    "answer": 3,
    "explain": "This week và am staying cho thấy tình huống tạm thời.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 37,
    "lesson": 2,
    "q": "Điền dạng đúng: My laptop ___ properly today.",
    "choices": [
      "isn’t work",
      "isn’t working",
      "not works",
      "doesn’t working"
    ],
    "answer": 1,
    "explain": "Today trong tình huống tạm thời dùng isn’t working.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 38,
    "lesson": 2,
    "q": "Tìm câu không tự nhiên.",
    "choices": [
      "I want a new phone.",
      "They understand the problem.",
      "I am wanting a new phone.",
      "She needs more time."
    ],
    "answer": 2,
    "explain": "Want thường không dùng dạng tiếp diễn.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 39,
    "lesson": 2,
    "q": "Sắp xếp: working / today / is / Lan / at home",
    "choices": [
      "Lan today working is at home.",
      "At home Lan today is work.",
      "Lan is working at home today.",
      "Is Lan working today at home."
    ],
    "answer": 2,
    "explain": "Trật tự S + be + V-ing + Place + Time.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 40,
    "lesson": 2,
    "q": "Chọn câu hỏi đúng. Chủ điểm cần kiểm tra: Tiếp diễn đảo are lên trước chủ ngữ.",
    "choices": [
      "Do you working today?",
      "Are you working today?",
      "Does you work today?",
      "Are you work today?"
    ],
    "answer": 1,
    "explain": "Tiếp diễn đảo are lên trước chủ ngữ.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 41,
    "lesson": 3,
    "q": "Yesterday, I ___ Lan.",
    "choices": [
      "am calling",
      "called",
      "call",
      "have called"
    ],
    "answer": 1,
    "explain": "Yesterday là thời gian đã kết thúc.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 42,
    "lesson": 3,
    "q": "She ___ a new laptop last week.",
    "choices": [
      "bought",
      "buyed",
      "buys",
      "has bought"
    ],
    "answer": 0,
    "explain": "Buy có V2 là bought.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 43,
    "lesson": 3,
    "q": "Nam ___ late to the meeting.",
    "choices": [
      "comed",
      "came",
      "come",
      "has come"
    ],
    "answer": 1,
    "explain": "Come có V2 là came.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 44,
    "lesson": 3,
    "q": "We ___ lunch at a small restaurant.",
    "choices": [
      "eated",
      "eat",
      "have eaten",
      "ate"
    ],
    "answer": 3,
    "explain": "Eat có V2 là ate.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 45,
    "lesson": 3,
    "q": "My manager ___ me a new task.",
    "choices": [
      "gives",
      "has given",
      "gave",
      "gived"
    ],
    "answer": 2,
    "explain": "Give có V2 là gave.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 46,
    "lesson": 3,
    "q": "They ___ at home last night. Chủ điểm cần kiểm tra: They đi với were.",
    "choices": [
      "were",
      "did",
      "are",
      "was"
    ],
    "answer": 0,
    "explain": "They đi với were.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 47,
    "lesson": 3,
    "q": "I ___ my keys under the sofa.",
    "choices": [
      "finded",
      "found",
      "find",
      "have found"
    ],
    "answer": 1,
    "explain": "Find có V2 là found.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 48,
    "lesson": 3,
    "q": "The computer ___ working yesterday.",
    "choices": [
      "stopped",
      "stoped",
      "has stopped",
      "stops"
    ],
    "answer": 0,
    "explain": "Stop gấp đôi p rồi thêm -ed.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 49,
    "lesson": 3,
    "q": "Lan ___ the email this morning.",
    "choices": [
      "send",
      "has send",
      "sent",
      "sended"
    ],
    "answer": 2,
    "explain": "Send có V2 là sent.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 50,
    "lesson": 3,
    "q": "The meeting ___ at 4 p.m.",
    "choices": [
      "has finish",
      "finishing",
      "finish",
      "finished"
    ],
    "answer": 3,
    "explain": "Sự kiện đã kết thúc dùng finished.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 51,
    "lesson": 3,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Sau didn’t dùng V nguyên mẫu.",
    "choices": [
      "I don’t went to work.",
      "I didn’t went to work.",
      "I wasn’t go to work.",
      "I didn’t go to work."
    ],
    "answer": 3,
    "explain": "Sau didn’t dùng V nguyên mẫu.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 52,
    "lesson": 3,
    "q": "Chọn câu hỏi đúng. Chủ điểm cần kiểm tra: Sau Did dùng call.",
    "choices": [
      "Was she call you?",
      "Did she call you?",
      "Did she called you?",
      "Does she called you?"
    ],
    "answer": 1,
    "explain": "Sau Did dùng call.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 53,
    "lesson": 3,
    "q": "Tìm lỗi: “They was very tired.”",
    "choices": [
      "was",
      "tired",
      "very",
      "They"
    ],
    "answer": 0,
    "explain": "They đi với were.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 54,
    "lesson": 3,
    "q": "Quá khứ của take là gì?",
    "choices": [
      "took",
      "takes",
      "taken",
      "taked"
    ],
    "answer": 0,
    "explain": "Take-took-taken.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 55,
    "lesson": 3,
    "q": "Quá khứ của write là gì?",
    "choices": [
      "written",
      "wrote",
      "writes",
      "writed"
    ],
    "answer": 1,
    "explain": "Write-wrote-written.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 56,
    "lesson": 3,
    "q": "Dịch: “Hôm qua tôi dậy muộn.”",
    "choices": [
      "I woke up late yesterday.",
      "I wake up late yesterday.",
      "I have woken up late yesterday.",
      "I waked up late yesterday."
    ],
    "answer": 0,
    "explain": "Wake có V2 là woke.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 57,
    "lesson": 3,
    "q": "Dịch: “Cô ấy không gọi tôi.”",
    "choices": [
      "She wasn’t call me.",
      "She didn’t called me.",
      "She not called me.",
      "She didn’t call me."
    ],
    "answer": 3,
    "explain": "Phủ định quá khứ dùng didn’t + call.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 58,
    "lesson": 3,
    "q": "Câu nào kể chuỗi hành động?",
    "choices": [
      "I am eating now.",
      "I wake up every day.",
      "I woke up, ate breakfast, and left home.",
      "I have lived here for years."
    ],
    "answer": 2,
    "explain": "Ba động từ V2 kể các hành động nối tiếp.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 59,
    "lesson": 3,
    "q": "___ you busy yesterday?",
    "choices": [
      "Are",
      "Was",
      "Did",
      "Were"
    ],
    "answer": 3,
    "explain": "You đi với were; câu hỏi đảo Were.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 60,
    "lesson": 3,
    "q": "Sắp xếp: yesterday / report / finished / we / the",
    "choices": [
      "Finished we the report yesterday.",
      "The report we finish yesterday.",
      "We finished the report yesterday.",
      "We yesterday finished the report."
    ],
    "answer": 2,
    "explain": "S + V2 + O + Time.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 61,
    "lesson": 4,
    "q": "I have just ___ the report.",
    "choices": [
      "finished",
      "finish",
      "finishes",
      "finishing"
    ],
    "answer": 0,
    "explain": "Sau have dùng V3.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 62,
    "lesson": 4,
    "q": "She has ___ home.",
    "choices": [
      "go",
      "went",
      "gone",
      "going"
    ],
    "answer": 2,
    "explain": "Go-went-gone.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 63,
    "lesson": 4,
    "q": "Have you ever ___ Korean food?",
    "choices": [
      "eat",
      "ate",
      "eaten",
      "eating"
    ],
    "answer": 2,
    "explain": "Sau have dùng V3 eaten.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 64,
    "lesson": 4,
    "q": "We have ___ each other for ten years.",
    "choices": [
      "known",
      "knowing",
      "know",
      "knew"
    ],
    "answer": 0,
    "explain": "Know-knew-known.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 65,
    "lesson": 4,
    "q": "My manager hasn’t ___ the email yet.",
    "choices": [
      "reading",
      "saw",
      "reads",
      "read"
    ],
    "answer": 3,
    "explain": "Sau hasn’t dùng V3; read giữ nguyên cách viết.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 66,
    "lesson": 4,
    "q": "They have ___ three meetings today.",
    "choices": [
      "has",
      "have",
      "having",
      "had"
    ],
    "answer": 3,
    "explain": "Have-had-had.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 67,
    "lesson": 4,
    "q": "Someone has ___ my chair.",
    "choices": [
      "taken",
      "take",
      "took",
      "taking"
    ],
    "answer": 0,
    "explain": "Take-took-taken.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 68,
    "lesson": 4,
    "q": "Lan has worked here ___ 2023.",
    "choices": [
      "during",
      "ago",
      "for",
      "since"
    ],
    "answer": 3,
    "explain": "Since đi với điểm bắt đầu.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 69,
    "lesson": 4,
    "q": "Lan has worked here ___ three years.",
    "choices": [
      "ago",
      "for",
      "since",
      "from"
    ],
    "answer": 1,
    "explain": "For đi với khoảng thời gian.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 70,
    "lesson": 4,
    "q": "I haven’t finished ___.",
    "choices": [
      "yesterday",
      "already",
      "yet",
      "ago"
    ],
    "answer": 2,
    "explain": "Yet thường đứng cuối câu phủ định/câu hỏi.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 71,
    "lesson": 4,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Yesterday dùng quá khứ đơn.",
    "choices": [
      "I saw Lan yesterday.",
      "I seen Lan yesterday.",
      "I have saw Lan yesterday.",
      "I have seen Lan yesterday."
    ],
    "answer": 0,
    "explain": "Yesterday dùng quá khứ đơn.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 72,
    "lesson": 4,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Sau has dùng V3 flown; không phủ định kép.",
    "choices": [
      "She has never flew on a plane.",
      "She hasn’t never flown on a plane.",
      "She has never flown on a plane.",
      "She never has flew on a plane."
    ],
    "answer": 2,
    "explain": "Sau has dùng V3 flown; không phủ định kép.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 73,
    "lesson": 4,
    "q": "Been và gone: Lan chưa quay về.",
    "choices": [
      "Lan has been to the bank.",
      "Lan has gone to the bank.",
      "Lan is been at the bank.",
      "Lan went to the bank every day."
    ],
    "answer": 1,
    "explain": "Has gone nghĩa là đã đi và chưa quay về.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 74,
    "lesson": 4,
    "q": "Been và gone: Lan từng đến Singapore.",
    "choices": [
      "Lan has gone to Singapore twice.",
      "Lan has went to Singapore.",
      "Lan has been to Singapore.",
      "Lan was been to Singapore."
    ],
    "answer": 2,
    "explain": "Has been to nói trải nghiệm và đã quay về.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 75,
    "lesson": 4,
    "q": "Dịch: “Tôi vừa ăn trưa xong.”",
    "choices": [
      "I have just finish lunch.",
      "I have just finished lunch.",
      "I just have finish lunch.",
      "I finished just lunch."
    ],
    "answer": 1,
    "explain": "Just đứng giữa have và V3.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 76,
    "lesson": 4,
    "q": "Dịch: “Bạn làm xong chưa?”",
    "choices": [
      "Do you finished yet?",
      "Did you have finished yet?",
      "Have you finished yet?",
      "Have you finish already?"
    ],
    "answer": 2,
    "explain": "Câu hỏi hiện tại hoàn thành: Have + S + V3.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 77,
    "lesson": 4,
    "q": "How long ___ you lived here? Chủ điểm cần kiểm tra: How long + have + S + V3.",
    "choices": [
      "are",
      "do",
      "have",
      "did"
    ],
    "answer": 2,
    "explain": "How long + have + S + V3.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 78,
    "lesson": 4,
    "q": "Câu nào cho thấy người đó vẫn làm ở đây?",
    "choices": [
      "She was working here yesterday.",
      "She worked here for six years.",
      "She works here in 2020.",
      "She has worked here for six years."
    ],
    "answer": 3,
    "explain": "Hiện tại hoàn thành cho thấy việc còn tiếp tục.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 79,
    "lesson": 4,
    "q": "Tìm lỗi: “They has arrived.”",
    "choices": [
      "không có lỗi",
      "has",
      "They",
      "arrived"
    ],
    "answer": 1,
    "explain": "They đi với have.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 80,
    "lesson": 4,
    "q": "Sắp xếp: already / email / has / she / sent / the",
    "choices": [
      "Has she sent already the email.",
      "She has sent the already email.",
      "She has already sent the email.",
      "She already has send the email."
    ],
    "answer": 2,
    "explain": "Already thường đứng giữa has và V3.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 81,
    "lesson": 5,
    "q": "The phone is ringing. I ___ it.",
    "choices": [
      "will answer",
      "am answer",
      "answering",
      "will answered"
    ],
    "answer": 0,
    "explain": "Quyết định ngay dùng will + V.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 82,
    "lesson": 5,
    "q": "Look at those clouds. It ___.",
    "choices": [
      "is going to rain",
      "will raining",
      "is rain",
      "rains every day"
    ],
    "answer": 0,
    "explain": "Có dấu hiệu rõ dùng going to.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 83,
    "lesson": 5,
    "q": "I have saved enough money. I ___ a laptop.",
    "choices": [
      "am buy",
      "will buying",
      "am going to buy",
      "buyed"
    ],
    "answer": 2,
    "explain": "Kế hoạch đã có dùng be going to + V.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 84,
    "lesson": 5,
    "q": "We ___ the client at 3 p.m. tomorrow.",
    "choices": [
      "will meeting",
      "met",
      "are meeting",
      "meet every day"
    ],
    "answer": 2,
    "explain": "Lịch hẹn đã xác nhận dùng hiện tại tiếp diễn.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 85,
    "lesson": 5,
    "q": "The train ___ at 6:15 tomorrow.",
    "choices": [
      "leaves",
      "leave",
      "will leaves",
      "is leave"
    ],
    "answer": 0,
    "explain": "Lịch trình chính thức dùng hiện tại đơn.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 86,
    "lesson": 5,
    "q": "I think the job ___ difficult.",
    "choices": [
      "will be",
      "will being",
      "be",
      "is going being"
    ],
    "answer": 0,
    "explain": "Dự đoán ý kiến dùng will be.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 87,
    "lesson": 5,
    "q": "“We have no milk.” “I ___ some.”",
    "choices": [
      "will buy",
      "will buying",
      "am buying yesterday",
      "buyed"
    ],
    "answer": 0,
    "explain": "Quyết định lúc nói dùng will.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 88,
    "lesson": 5,
    "q": "Nam ___ to Da Nang on Friday; the ticket is booked.",
    "choices": [
      "flies every Friday",
      "is flying",
      "will flew",
      "is fly"
    ],
    "answer": 1,
    "explain": "Vé đã đặt: lịch sắp xếp dùng hiện tại tiếp diễn.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 89,
    "lesson": 5,
    "q": "Be careful! You ___ that box.",
    "choices": [
      "drop every day",
      "are going to drop",
      "will dropping",
      "are drop"
    ],
    "answer": 1,
    "explain": "Dấu hiệu trước mắt dùng going to.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 90,
    "lesson": 5,
    "q": "The course ___ next Monday.",
    "choices": [
      "start",
      "will starts",
      "starts",
      "is start"
    ],
    "answer": 2,
    "explain": "Lịch chính thức dùng hiện tại đơn.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 91,
    "lesson": 5,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Sau will dùng động từ nguyên mẫu.",
    "choices": [
      "She will come tomorrow.",
      "She wills come tomorrow.",
      "She will comes tomorrow.",
      "She will to come tomorrow."
    ],
    "answer": 0,
    "explain": "Sau will dùng động từ nguyên mẫu.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 92,
    "lesson": 5,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Going to cần be và theo sau là V.",
    "choices": [
      "I am going buy a phone.",
      "I am go to buy a phone.",
      "I going to buy a phone.",
      "I am going to buy a phone."
    ],
    "answer": 3,
    "explain": "Going to cần be và theo sau là V.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 93,
    "lesson": 5,
    "q": "Dịch quyết định ngay: “Tôi sẽ mở cửa sổ.”",
    "choices": [
      "I’ll opening the window.",
      "I open the window yesterday.",
      "I’m going open the window.",
      "I’ll open the window."
    ],
    "answer": 3,
    "explain": "Will phù hợp với quyết định ngay.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 94,
    "lesson": 5,
    "q": "Dịch kế hoạch: “Tối nay tôi định học.”",
    "choices": [
      "I will studied tonight.",
      "I’m going study tonight.",
      "I studying tonight.",
      "I’m going to study tonight."
    ],
    "answer": 3,
    "explain": "Kế hoạch đã có dùng going to.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 95,
    "lesson": 5,
    "q": "Dịch lịch hẹn: “Mai tôi gặp bác sĩ lúc 9 giờ.”",
    "choices": [
      "I see the doctor every tomorrow.",
      "I am see the doctor.",
      "I’m seeing the doctor at 9 tomorrow.",
      "I will seeing the doctor."
    ],
    "answer": 2,
    "explain": "Lịch đã chốt dùng hiện tại tiếp diễn.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 96,
    "lesson": 5,
    "q": "Dịch lịch bay: “Chuyến bay cất cánh lúc 6 giờ.”",
    "choices": [
      "The flight leaves at 6.",
      "The flight leaving at 6.",
      "The flight leave at 6.",
      "The flight will leaves at 6."
    ],
    "answer": 0,
    "explain": "Lịch trình dùng hiện tại đơn.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 97,
    "lesson": 5,
    "q": "Câu nào là lời hứa?",
    "choices": [
      "I have called already.",
      "I’ll call you tonight, I promise.",
      "I am calling every day.",
      "I called you last night."
    ],
    "answer": 1,
    "explain": "Will thường dùng cho lời hứa.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 98,
    "lesson": 5,
    "q": "Tìm lỗi: “She will to help us.”",
    "choices": [
      "will to help",
      "She",
      "us",
      "không có lỗi"
    ],
    "answer": 0,
    "explain": "Sau will không dùng to.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 99,
    "lesson": 5,
    "q": "Tìm lỗi: “I going to travel next month.”",
    "choices": [
      "I going",
      "travel",
      "không có lỗi",
      "next month"
    ],
    "answer": 0,
    "explain": "Thiếu am: I am going to travel.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 100,
    "lesson": 5,
    "q": "Phủ định đúng của will là gì?",
    "choices": [
      "willn’t",
      "don’t will",
      "won’t",
      "not will"
    ],
    "answer": 2,
    "explain": "Will not rút gọn thành won’t.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 101,
    "lesson": 6,
    "q": "You ___ wear a helmet. It is required.",
    "choices": [
      "have to",
      "must to",
      "can to",
      "should to"
    ],
    "answer": 0,
    "explain": "Have to diễn tả nghĩa vụ do quy định.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 102,
    "lesson": 6,
    "q": "I ___ swim when I was seven.",
    "choices": [
      "must",
      "could",
      "should",
      "can yesterday"
    ],
    "answer": 1,
    "explain": "Could diễn tả khả năng chung trong quá khứ.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 103,
    "lesson": 6,
    "q": "___ you help me carry this box?",
    "choices": [
      "Are can",
      "Do can",
      "Could",
      "Must to"
    ],
    "answer": 2,
    "explain": "Could you...? là lời nhờ lịch sự.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 104,
    "lesson": 6,
    "q": "You look tired. You ___ rest.",
    "choices": [
      "should",
      "can’t",
      "don’t have to",
      "mustn’t"
    ],
    "answer": 0,
    "explain": "Should dùng cho lời khuyên.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 105,
    "lesson": 6,
    "q": "Employees ___ show ID at the entrance.",
    "choices": [
      "should to",
      "can to",
      "are have",
      "have to"
    ],
    "answer": 3,
    "explain": "Quy định bắt buộc dùng have to.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 106,
    "lesson": 6,
    "q": "You ___ smoke here. It is forbidden.",
    "choices": [
      "mustn’t",
      "can",
      "should",
      "don’t have to"
    ],
    "answer": 0,
    "explain": "Mustn’t nghĩa là bị cấm.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 107,
    "lesson": 6,
    "q": "You ___ bring lunch; food is provided.",
    "choices": [
      "shouldn’t",
      "can’t",
      "mustn’t",
      "don’t have to"
    ],
    "answer": 3,
    "explain": "Không cần thiết dùng don’t have to.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 108,
    "lesson": 6,
    "q": "Nam speaks English well. He ___ talk to foreign clients.",
    "choices": [
      "cans",
      "can to",
      "does can",
      "can"
    ],
    "answer": 3,
    "explain": "Sau can dùng V nguyên mẫu.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 109,
    "lesson": 6,
    "q": "The lights are on. Lan ___ be inside.",
    "choices": [
      "should to",
      "must",
      "can to",
      "has to be always"
    ],
    "answer": 1,
    "explain": "Must có thể diễn tả suy luận rất chắc chắn.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 110,
    "lesson": 6,
    "q": "We ___ cancel the meeting yesterday.",
    "choices": [
      "have to yesterday",
      "had cancel",
      "had to",
      "musted"
    ],
    "answer": 2,
    "explain": "Quá khứ của have to là had to.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 111,
    "lesson": 6,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Sau can dùng động từ nguyên mẫu.",
    "choices": [
      "She can drive.",
      "She can to drive.",
      "She can drives.",
      "She cans drive."
    ],
    "answer": 0,
    "explain": "Sau can dùng động từ nguyên mẫu.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 112,
    "lesson": 6,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Sau should dùng V nguyên mẫu.",
    "choices": [
      "You should to check the address.",
      "You should check the address.",
      "You should checks the address.",
      "You should checking the address."
    ],
    "answer": 1,
    "explain": "Sau should dùng V nguyên mẫu.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 113,
    "lesson": 6,
    "q": "Câu hỏi đúng.",
    "choices": [
      "Are you can swim?",
      "Can you to swim?",
      "Can you swim?",
      "Do you can swim?"
    ],
    "answer": 2,
    "explain": "Đưa can lên trước chủ ngữ.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 114,
    "lesson": 6,
    "q": "Dịch: “Bạn không được mở cửa này.”",
    "choices": [
      "You don’t have to open this door.",
      "You not must open this door.",
      "You mustn’t open this door.",
      "You mustn’t to open this door."
    ],
    "answer": 2,
    "explain": "Mustn’t là cấm.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 115,
    "lesson": 6,
    "q": "Dịch: “Bạn không cần đến sớm.”",
    "choices": [
      "You mustn’t come early.",
      "You haven’t to come early.",
      "You don’t have to come early.",
      "You don’t have come early."
    ],
    "answer": 2,
    "explain": "Don’t have to là không cần.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 116,
    "lesson": 6,
    "q": "Chọn lời khuyên mềm.",
    "choices": [
      "You can’t talk to your manager.",
      "You should talk to your manager.",
      "You mustn’t talk to your manager.",
      "You must talk to your manager."
    ],
    "answer": 1,
    "explain": "Should là lời khuyên.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 117,
    "lesson": 6,
    "q": "Tìm lỗi: “Nam have to work Saturday.”",
    "choices": [
      "Saturday",
      "Nam",
      "work",
      "have"
    ],
    "answer": 3,
    "explain": "Nam là số ít nên dùng has to.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 118,
    "lesson": 6,
    "q": "Tìm lỗi: “I must to leave.”",
    "choices": [
      "must to",
      "leave",
      "I",
      "không có lỗi"
    ],
    "answer": 0,
    "explain": "Sau must bỏ to.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 119,
    "lesson": 6,
    "q": "Tương lai của have to.",
    "choices": [
      "will has to",
      "will have to",
      "will had to",
      "have will to"
    ],
    "answer": 1,
    "explain": "Sau will dùng have to.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 120,
    "lesson": 6,
    "q": "Phủ định của can.",
    "choices": [
      "don’t can",
      "cann’t",
      "can not to",
      "cannot / can’t"
    ],
    "answer": 3,
    "explain": "Cannot hoặc can’t là dạng đúng.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 121,
    "lesson": 7,
    "q": "I bought ___ new laptop.",
    "choices": [
      "some",
      "many",
      "a",
      "an"
    ],
    "answer": 2,
    "explain": "Laptop là danh từ đếm được số ít, âm đầu phụ âm.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 122,
    "lesson": 7,
    "q": "She is ___ engineer.",
    "choices": [
      "some",
      "an",
      "a",
      "the always"
    ],
    "answer": 1,
    "explain": "Engineer bắt đầu bằng âm nguyên âm.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 123,
    "lesson": 7,
    "q": "I waited for ___ hour.",
    "choices": [
      "a",
      "some",
      "many",
      "an"
    ],
    "answer": 3,
    "explain": "H trong hour không phát âm.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 124,
    "lesson": 7,
    "q": "He studies at ___ university.",
    "choices": [
      "some",
      "any",
      "an",
      "a"
    ],
    "answer": 3,
    "explain": "University bắt đầu bằng âm /juː/, dùng a.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 125,
    "lesson": 7,
    "q": "Please close ___ door.",
    "choices": [
      "the",
      "a random",
      "Ø",
      "an"
    ],
    "answer": 0,
    "explain": "Người nghe biết cánh cửa nào.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 126,
    "lesson": 7,
    "q": "I need ___ information.",
    "choices": [
      "informations",
      "an",
      "some",
      "many"
    ],
    "answer": 2,
    "explain": "Information không đếm được.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 127,
    "lesson": 7,
    "q": "She gave me ___ useful advice.",
    "choices": [
      "some",
      "an",
      "many",
      "a"
    ],
    "answer": 0,
    "explain": "Advice không đếm được.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 128,
    "lesson": 7,
    "q": "Do you have ___ questions?",
    "choices": [
      "a",
      "some always",
      "much",
      "any"
    ],
    "answer": 3,
    "explain": "Any thường dùng trong câu hỏi.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 129,
    "lesson": 7,
    "q": "Would you like ___ coffee?",
    "choices": [
      "a coffees",
      "any",
      "many",
      "some"
    ],
    "answer": 3,
    "explain": "Lời mời thường dùng some.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 130,
    "lesson": 7,
    "q": "We don’t have ___ milk.",
    "choices": [
      "many",
      "few",
      "any",
      "a"
    ],
    "answer": 2,
    "explain": "Any thường dùng trong phủ định.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 131,
    "lesson": 7,
    "q": "How ___ customers called?",
    "choices": [
      "many",
      "much",
      "little",
      "a little"
    ],
    "answer": 0,
    "explain": "Customers đếm được số nhiều.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 132,
    "lesson": 7,
    "q": "How ___ time do we have?",
    "choices": [
      "much",
      "a few",
      "many",
      "several"
    ],
    "answer": 0,
    "explain": "Time không đếm được.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 133,
    "lesson": 7,
    "q": "I have ___ work today.",
    "choices": [
      "a lot of",
      "many",
      "a few",
      "an"
    ],
    "answer": 0,
    "explain": "Work không đếm được; a lot of dùng tự nhiên.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 134,
    "lesson": 7,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Information không đếm được.",
    "choices": [
      "I need some information.",
      "I need an information.",
      "I need informations.",
      "I need many information."
    ],
    "answer": 0,
    "explain": "Information không đếm được.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 135,
    "lesson": 7,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Furniture không đếm được.",
    "choices": [
      "We bought a furniture.",
      "We bought many furnitures.",
      "We bought furnitures.",
      "We bought a lot of furniture."
    ],
    "answer": 3,
    "explain": "Furniture không đếm được.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 136,
    "lesson": 7,
    "q": "Dịch: “Tôi còn một ít tiền.”",
    "choices": [
      "I have a few money left.",
      "I have many money left.",
      "I have an money left.",
      "I have a little money left."
    ],
    "answer": 3,
    "explain": "Money không đếm được, dùng a little.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 137,
    "lesson": 7,
    "q": "“Few people came” mang ý gì?",
    "choices": [
      "Rất nhiều người.",
      "Rất ít người, gần như không đủ.",
      "Không có người nào.",
      "Một vài người, đủ dùng."
    ],
    "answer": 1,
    "explain": "Few mang sắc thái tiêu cực.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 138,
    "lesson": 7,
    "q": "“A few people helped” mang ý gì?",
    "choices": [
      "Quá nhiều người giúp.",
      "Có một vài người giúp.",
      "Không ai giúp.",
      "Gần như không ai giúp."
    ],
    "answer": 1,
    "explain": "A few có nghĩa một vài, sắc thái tích cực hơn.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 139,
    "lesson": 7,
    "q": "Nói chung về cà phê.",
    "choices": [
      "The coffee always keeps all people awake.",
      "Coffee keeps me awake.",
      "Coffees keeps me awake.",
      "A coffee keeps me awake in general."
    ],
    "answer": 1,
    "explain": "Danh từ không đếm được nói chung không cần mạo từ.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 140,
    "lesson": 7,
    "q": "Lần đầu nhắc một con chó.",
    "choices": [
      "I saw the dog outside, dù chưa biết con nào.",
      "I saw a dog outside.",
      "I saw an dog outside.",
      "I saw dog outside."
    ],
    "answer": 1,
    "explain": "Lần đầu, chưa xác định: a dog.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 141,
    "lesson": 8,
    "q": "This laptop is ___ than mine.",
    "choices": [
      "more fast",
      "faster",
      "fastest",
      "the faster"
    ],
    "answer": 1,
    "explain": "Fast dùng faster.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 142,
    "lesson": 8,
    "q": "This option is ___ than that one.",
    "choices": [
      "most expensive",
      "expensiver",
      "more expensive than than",
      "more expensive"
    ],
    "answer": 3,
    "explain": "Tính từ dài dùng more.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 143,
    "lesson": 8,
    "q": "This is ___ option.",
    "choices": [
      "the cheapest",
      "cheapest without the",
      "most cheap",
      "cheaper"
    ],
    "answer": 0,
    "explain": "So sánh nhất cần the.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 144,
    "lesson": 8,
    "q": "My new phone is much ___.",
    "choices": [
      "best",
      "gooder",
      "more good",
      "better"
    ],
    "answer": 3,
    "explain": "Good có dạng better.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 145,
    "lesson": 8,
    "q": "Traffic is ___ today.",
    "choices": [
      "worse",
      "badder",
      "worst",
      "more bad"
    ],
    "answer": 0,
    "explain": "Bad có dạng worse.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 146,
    "lesson": 8,
    "q": "Nam is ___ Minh.",
    "choices": [
      "more tall than",
      "tallest than",
      "taller than",
      "as taller as"
    ],
    "answer": 2,
    "explain": "Tính từ ngắn dùng -er + than.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 147,
    "lesson": 8,
    "q": "Lan is ___ Mai.",
    "choices": [
      "as older as",
      "older as",
      "as old as",
      "more old than"
    ],
    "answer": 2,
    "explain": "So sánh bằng dùng as...as.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 148,
    "lesson": 8,
    "q": "A bus is not ___ a taxi.",
    "choices": [
      "as faster as",
      "as fast as",
      "fast than",
      "more fast as"
    ],
    "answer": 1,
    "explain": "Phủ định so sánh bằng: not as...as.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 149,
    "lesson": 8,
    "q": "This is ___ task in the project.",
    "choices": [
      "the most difficult",
      "most difficult without the",
      "the difficulter",
      "more difficult"
    ],
    "answer": 0,
    "explain": "Tính từ dài dùng the most.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 150,
    "lesson": 8,
    "q": "Today is ___ yesterday.",
    "choices": [
      "hottest than",
      "as hotter as",
      "more hot than",
      "hotter than"
    ],
    "answer": 3,
    "explain": "Hot gấp đôi t rồi thêm -er.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 151,
    "lesson": 8,
    "q": "My bag is ___ yours.",
    "choices": [
      "more heavy than",
      "heavyer than",
      "heavier than",
      "the heaviest than"
    ],
    "answer": 2,
    "explain": "Heavy đổi y thành i rồi thêm -er.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 152,
    "lesson": 8,
    "q": "The blue room is ___ smaller.",
    "choices": [
      "most",
      "very",
      "more",
      "a little"
    ],
    "answer": 3,
    "explain": "A little bổ nghĩa cho so sánh hơn.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 153,
    "lesson": 8,
    "q": "The new method is ___ more useful.",
    "choices": [
      "most",
      "many",
      "very",
      "far"
    ],
    "answer": 3,
    "explain": "Far more useful nghĩa là hữu ích hơn nhiều.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 154,
    "lesson": 8,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Không dùng more hoặc very trước cheaper.",
    "choices": [
      "This phone is very cheaper.",
      "This phone cheaper than.",
      "This phone is cheaper.",
      "This phone is more cheaper."
    ],
    "answer": 2,
    "explain": "Không dùng more hoặc very trước cheaper.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 155,
    "lesson": 8,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Friendly → friendliest và cần the.",
    "choices": [
      "She is more friendliest.",
      "She is friendliest person.",
      "She is the friendliest person here.",
      "She is the most friendlyest person."
    ],
    "answer": 2,
    "explain": "Friendly → friendliest và cần the.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 156,
    "lesson": 8,
    "q": "Dịch: “Đây là nhà hàng tốt nhất.”",
    "choices": [
      "This is best restaurant.",
      "This is the most good restaurant.",
      "This is the better restaurant.",
      "This is the best restaurant."
    ],
    "answer": 3,
    "explain": "Best là so sánh nhất của good.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 157,
    "lesson": 8,
    "q": "Dịch: “Xe buýt chậm hơn taxi.”",
    "choices": [
      "A bus slower a taxi.",
      "A bus is slower than a taxi.",
      "A bus is slowest than a taxi.",
      "A bus is more slow than a taxi."
    ],
    "answer": 1,
    "explain": "Slow dùng slower than.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 158,
    "lesson": 8,
    "q": "So sánh của little về lượng.",
    "choices": [
      "less",
      "more little",
      "least than",
      "littler"
    ],
    "answer": 0,
    "explain": "Little → less → least.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 159,
    "lesson": 8,
    "q": "So sánh của many/much.",
    "choices": [
      "more",
      "manyer",
      "most than",
      "mucher"
    ],
    "answer": 0,
    "explain": "Many/much → more → most.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 160,
    "lesson": 8,
    "q": "Tìm lỗi: “My laptop is very faster.”",
    "choices": [
      "My laptop",
      "không có lỗi",
      "very faster",
      "is"
    ],
    "answer": 2,
    "explain": "Dùng much faster, không dùng very faster.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 161,
    "lesson": 9,
    "q": "If you heat ice, it ___.",
    "choices": [
      "would melt",
      "melts",
      "melted",
      "will melt"
    ],
    "answer": 1,
    "explain": "Sự thật dùng điều kiện loại 0.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 162,
    "lesson": 9,
    "q": "If it rains, we ___ home.",
    "choices": [
      "will stay",
      "stay yesterday",
      "would stay",
      "stayed"
    ],
    "answer": 0,
    "explain": "Khả năng tương lai dùng loại 1.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 163,
    "lesson": 9,
    "q": "If Nam ___ early, we will start.",
    "choices": [
      "arrives",
      "will arrive",
      "arrive without s",
      "arrived"
    ],
    "answer": 0,
    "explain": "Sau if loại 1 dùng hiện tại đơn.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 164,
    "lesson": 9,
    "q": "If I had more time, I ___ English.",
    "choices": [
      "will study",
      "would studied",
      "studied",
      "would study"
    ],
    "answer": 3,
    "explain": "Giả định hiện tại dùng would + V.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 165,
    "lesson": 9,
    "q": "If I ___ you, I would refuse.",
    "choices": [
      "were",
      "am",
      "had been",
      "will be"
    ],
    "answer": 0,
    "explain": "Cụm chuẩn If I were you.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 166,
    "lesson": 9,
    "q": "If we had left earlier, we ___ the train.",
    "choices": [
      "would have caught",
      "caught",
      "will catch",
      "would catch"
    ],
    "answer": 0,
    "explain": "Quá khứ không thật dùng would have + V3.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 167,
    "lesson": 9,
    "q": "Unless you ___ now, you’ll be late.",
    "choices": [
      "left",
      "will leave",
      "don’t leave",
      "leave"
    ],
    "answer": 3,
    "explain": "Unless đã mang nghĩa nếu không.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 168,
    "lesson": 9,
    "q": "If people don’t drink water, they ___.",
    "choices": [
      "will became thirsty",
      "would thirsty",
      "become thirsty",
      "became always"
    ],
    "answer": 2,
    "explain": "Quy luật chung dùng hiện tại đơn.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 169,
    "lesson": 9,
    "q": "If you send the file today, I ___ it tonight.",
    "choices": [
      "would checked",
      "will checked",
      "check yesterday",
      "will check"
    ],
    "answer": 3,
    "explain": "Loại 1 dùng will + V.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 170,
    "lesson": 9,
    "q": "If she had checked the address, she ___ lost.",
    "choices": [
      "wouldn’t have got",
      "didn’t got",
      "wouldn’t get",
      "won’t get"
    ],
    "answer": 0,
    "explain": "Loại 3 dùng would have + V3.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 171,
    "lesson": 9,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Sau if loại 1 không dùng will.",
    "choices": [
      "If it will rain, we will stay home.",
      "If it rains, we will stay home.",
      "If it rains, we would stayed home.",
      "If it rained, we will stay home."
    ],
    "answer": 1,
    "explain": "Sau if loại 1 không dùng will.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 172,
    "lesson": 9,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Loại 2: past + would + V.",
    "choices": [
      "If I had money, I would buy a house.",
      "If I had money, I will buy a house.",
      "If I have money, I would buy a house.",
      "If I would have money, I bought a house."
    ],
    "answer": 0,
    "explain": "Loại 2: past + would + V.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 173,
    "lesson": 9,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Loại 3 cần had + V3 và would have + V3.",
    "choices": [
      "If I had leave, I would caught the bus.",
      "If I left earlier, I would have catch the bus.",
      "If I had left earlier, I would have caught the bus.",
      "If I had left, I will catch the bus."
    ],
    "answer": 2,
    "explain": "Loại 3 cần had + V3 và would have + V3.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 174,
    "lesson": 9,
    "q": "Dịch: “Nếu trời mưa, chúng tôi sẽ ở nhà.”",
    "choices": [
      "If it rained, we will stay home.",
      "If it will rain, we stay home.",
      "If rain, we will stayed home.",
      "If it rains, we will stay home."
    ],
    "answer": 3,
    "explain": "Loại 1 dùng hiện tại sau if.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 175,
    "lesson": 9,
    "q": "Dịch: “Nếu tôi là bạn, tôi sẽ đợi.”",
    "choices": [
      "If I was you, I will wait.",
      "If I were you, I waited.",
      "If I am you, I will wait.",
      "If I were you, I would wait."
    ],
    "answer": 3,
    "explain": "If I were you là mẫu chuẩn.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 176,
    "lesson": 9,
    "q": "Câu nào là loại 0?",
    "choices": [
      "If I drink coffee at night, I can’t sleep.",
      "If I had money, I’d travel.",
      "If I had known, I’d have helped.",
      "If it rains tomorrow, we’ll stay home."
    ],
    "answer": 0,
    "explain": "Loại 0 nói kết quả thường xuyên.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 177,
    "lesson": 9,
    "q": "Câu nào là loại 2?",
    "choices": [
      "If I had left, I would have arrived.",
      "If I lived near the office, I would walk.",
      "If she calls, I will answer.",
      "If water freezes, it expands."
    ],
    "answer": 1,
    "explain": "Loại 2 dùng past + would.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 178,
    "lesson": 9,
    "q": "Câu nào là loại 3?",
    "choices": [
      "If we know, we help.",
      "If we know, we will help.",
      "If we knew, we would help.",
      "If we had known, we would have helped."
    ],
    "answer": 3,
    "explain": "Loại 3 nói quá khứ không thật.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 179,
    "lesson": 9,
    "q": "Tìm lỗi: “Unless you don’t hurry...”",
    "choices": [
      "Unless",
      "don’t",
      "hurry",
      "không có lỗi"
    ],
    "answer": 1,
    "explain": "Không thêm phủ định sau unless.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 180,
    "lesson": 9,
    "q": "Tìm lỗi: “If she will call, I will answer.”",
    "choices": [
      "không có lỗi",
      "will call",
      "If",
      "I will answer"
    ],
    "answer": 1,
    "explain": "Mệnh đề if loại 1 dùng hiện tại: calls.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 181,
    "lesson": 10,
    "q": "The woman ___ called me was polite.",
    "choices": [
      "which",
      "who",
      "where",
      "whose"
    ],
    "answer": 1,
    "explain": "Who dùng cho người.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 182,
    "lesson": 10,
    "q": "The laptop ___ is on the table is mine.",
    "choices": [
      "who",
      "where",
      "whose",
      "which"
    ],
    "answer": 3,
    "explain": "Which dùng cho vật.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 183,
    "lesson": 10,
    "q": "The phone ___ I bought is expensive.",
    "choices": [
      "who",
      "where",
      "that",
      "whose"
    ],
    "answer": 2,
    "explain": "That dùng cho vật trong mệnh đề xác định.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 184,
    "lesson": 10,
    "q": "The employee ___ car was stolen went home.",
    "choices": [
      "whose",
      "who",
      "which",
      "where"
    ],
    "answer": 0,
    "explain": "Whose chỉ sở hữu.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 185,
    "lesson": 10,
    "q": "This is the office ___ I work.",
    "choices": [
      "who",
      "which",
      "where",
      "whose"
    ],
    "answer": 2,
    "explain": "Where dùng cho địa điểm.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 186,
    "lesson": 10,
    "q": "The bus ___ goes to the airport stops here.",
    "choices": [
      "that",
      "whose",
      "where",
      "who person only"
    ],
    "answer": 0,
    "explain": "That làm chủ ngữ cho vật.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 187,
    "lesson": 10,
    "q": "I know a woman ___ repairs phones.",
    "choices": [
      "which",
      "whose",
      "who",
      "where"
    ],
    "answer": 2,
    "explain": "Who thay cho người.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 188,
    "lesson": 10,
    "q": "The report ___ you sent has an error.",
    "choices": [
      "who",
      "whose",
      "where",
      "which"
    ],
    "answer": 3,
    "explain": "Which/that có thể làm tân ngữ cho vật.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 189,
    "lesson": 10,
    "q": "The restaurant ___ we had lunch was crowded.",
    "choices": [
      "whose",
      "where",
      "who",
      "that person"
    ],
    "answer": 1,
    "explain": "Where nói địa điểm.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 190,
    "lesson": 10,
    "q": "The customer ___ order was delayed complained.",
    "choices": [
      "which",
      "where",
      "whose",
      "who"
    ],
    "answer": 2,
    "explain": "Whose order = đơn hàng của khách.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 191,
    "lesson": 10,
    "q": "Có thể bỏ đại từ trong câu nào?",
    "choices": [
      "The bus which goes downtown stops here.",
      "The phone (that) I bought is expensive.",
      "The man who called is here.",
      "The phone that costs ten million is on sale."
    ],
    "answer": 1,
    "explain": "Có thể bỏ khi đại từ quan hệ là tân ngữ.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 192,
    "lesson": 10,
    "q": "Không thể bỏ đại từ trong câu nào?",
    "choices": [
      "The person whom I met was kind.",
      "The phone that costs ten million is on sale.",
      "The phone that I bought is new.",
      "The report which you sent is useful."
    ],
    "answer": 1,
    "explain": "That là chủ ngữ của costs nên không thể bỏ.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 193,
    "lesson": 10,
    "q": "Chọn câu đúng. Chủ điểm cần kiểm tra: Mệnh đề không xác định dùng who, không dùng that.",
    "choices": [
      "Lan, that lives next door, is a nurse.",
      "Lan, whose lives next door, is a nurse.",
      "Lan, who lives next door, is a nurse.",
      "Lan, which lives next door, is a nurse."
    ],
    "answer": 2,
    "explain": "Mệnh đề không xác định dùng who, không dùng that.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 194,
    "lesson": 10,
    "q": "Gộp: The man is my manager. He is wearing blue.",
    "choices": [
      "The man whose wearing blue is my manager.",
      "The man who is wearing blue is my manager.",
      "The man which wearing blue is my manager.",
      "The man where wears blue is my manager."
    ],
    "answer": 1,
    "explain": "Who thay cho người và làm chủ ngữ.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 195,
    "lesson": 10,
    "q": "Gộp: I bought a phone. It was expensive.",
    "choices": [
      "The phone where I bought was expensive.",
      "The phone who I bought was expensive.",
      "The phone whose I bought was expensive.",
      "The phone that I bought was expensive."
    ],
    "answer": 3,
    "explain": "That thay cho vật và làm tân ngữ.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 196,
    "lesson": 10,
    "q": "Dịch: “Đây là nơi tôi làm việc.”",
    "choices": [
      "This is the place which I work at it.",
      "This is the place whose I work.",
      "This is the place who I work.",
      "This is the place where I work."
    ],
    "answer": 3,
    "explain": "Where dùng cho địa điểm.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 197,
    "lesson": 10,
    "q": "Tìm lỗi: “The woman which called me...”",
    "choices": [
      "which",
      "The woman",
      "không có lỗi",
      "called me"
    ],
    "answer": 0,
    "explain": "Dùng who cho người.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 198,
    "lesson": 10,
    "q": "Tìm lỗi: “The man who car was stolen...”",
    "choices": [
      "who car",
      "The man",
      "was stolen",
      "không có lỗi"
    ],
    "answer": 0,
    "explain": "Dùng whose car.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 199,
    "lesson": 10,
    "q": "Mệnh đề giữa dấu phẩy có vai trò gì?",
    "choices": [
      "Bổ sung thông tin không thiết yếu.",
      "Xác định bắt buộc đối tượng.",
      "Luôn chỉ thời gian.",
      "Luôn có thể dùng that."
    ],
    "answer": 0,
    "explain": "Mệnh đề không xác định chỉ bổ sung.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 200,
    "lesson": 10,
    "q": "Sau dấu phẩy không dùng từ nào?",
    "choices": [
      "which",
      "whose",
      "who",
      "that"
    ],
    "answer": 3,
    "explain": "Không dùng that trong mệnh đề không xác định.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 201,
    "lesson": 11,
    "q": "The office ___ every evening.",
    "choices": [
      "cleans",
      "cleaned itself",
      "is cleaning",
      "is cleaned"
    ],
    "answer": 3,
    "explain": "Hiện tại đơn bị động: is + V3.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 202,
    "lesson": 11,
    "q": "My phone ___ yesterday.",
    "choices": [
      "was stolen",
      "has stole",
      "stole",
      "was stole"
    ],
    "answer": 0,
    "explain": "Quá khứ đơn bị động: was + V3.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 203,
    "lesson": 11,
    "q": "The documents ___ this morning.",
    "choices": [
      "sent themselves",
      "was sent",
      "were sent",
      "were send"
    ],
    "answer": 2,
    "explain": "Documents số nhiều dùng were sent.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 204,
    "lesson": 11,
    "q": "The problem ___.",
    "choices": [
      "has been fixed",
      "has fixed",
      "has been fix",
      "was fix"
    ],
    "answer": 0,
    "explain": "Hiện tại hoàn thành bị động: has been + V3.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 205,
    "lesson": 11,
    "q": "The results ___ tomorrow.",
    "choices": [
      "will be announced",
      "are announce",
      "will announce",
      "will announced"
    ],
    "answer": 0,
    "explain": "Tương lai bị động: will be + V3.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 206,
    "lesson": 11,
    "q": "The form ___.",
    "choices": [
      "must be sign",
      "must signed",
      "must to sign",
      "must be signed"
    ],
    "answer": 3,
    "explain": "Modal bị động: must be + V3.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 207,
    "lesson": 11,
    "q": "This problem ___.",
    "choices": [
      "can be solved",
      "can be solve",
      "can solved",
      "can to solve"
    ],
    "answer": 0,
    "explain": "Can be + V3.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 208,
    "lesson": 11,
    "q": "The report ___.",
    "choices": [
      "should be checked",
      "should be check",
      "should to check",
      "should checked"
    ],
    "answer": 0,
    "explain": "Should be + V3.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 209,
    "lesson": 11,
    "q": "English ___ in many countries.",
    "choices": [
      "is spoken",
      "spoken",
      "is spoke",
      "speaks"
    ],
    "answer": 0,
    "explain": "Speak-spoke-spoken; bị động is spoken.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 210,
    "lesson": 11,
    "q": "Coffee ___ in this region.",
    "choices": [
      "is grow",
      "grows by people always",
      "is grown",
      "was grew"
    ],
    "answer": 2,
    "explain": "Grow-grew-grown; bị động is grown.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 211,
    "lesson": 11,
    "q": "Chuyển bị động: Someone stole my phone.",
    "choices": [
      "My phone stole someone.",
      "My phone was stole.",
      "My phone was stolen.",
      "Someone was stolen my phone."
    ],
    "answer": 2,
    "explain": "Tân ngữ lên đầu; quá khứ dùng was + V3.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 212,
    "lesson": 11,
    "q": "Chuyển bị động: They cancelled the meeting.",
    "choices": [
      "The meeting was cancel.",
      "They were cancelled the meeting.",
      "The meeting was cancelled.",
      "The meeting cancelled."
    ],
    "answer": 2,
    "explain": "Was + cancelled.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 213,
    "lesson": 11,
    "q": "Chuyển bị động: Someone has fixed the printer.",
    "choices": [
      "The printer was been fixed.",
      "The printer has fixed.",
      "The printer has been fixed.",
      "The printer has been fix."
    ],
    "answer": 2,
    "explain": "Has been + V3.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 214,
    "lesson": 11,
    "q": "Chuyển bị động: They will deliver the order.",
    "choices": [
      "The order will delivered.",
      "The order will be deliver.",
      "The order is will delivered.",
      "The order will be delivered."
    ],
    "answer": 3,
    "explain": "Will be + V3.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 215,
    "lesson": 11,
    "q": "Chuyển bị động: The manager must approve it.",
    "choices": [
      "It must be approved by the manager.",
      "It must to be approved.",
      "It must approved.",
      "It must be approve."
    ],
    "answer": 0,
    "explain": "Must be + V3.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 216,
    "lesson": 11,
    "q": "Khi nào nên dùng bị động?",
    "choices": [
      "Chỉ dùng khi có by.",
      "Khi người làm không biết hoặc không quan trọng.",
      "Luôn dùng thay chủ động.",
      "Chỉ dùng với tương lai."
    ],
    "answer": 1,
    "explain": "Bị động nhấn mạnh đối tượng chịu tác động.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 217,
    "lesson": 11,
    "q": "Có cần “by a mechanic” trong “My bike was repaired”?",
    "choices": [
      "Chỉ khi dùng hiện tại.",
      "Không, nếu người sửa không quan trọng.",
      "Luôn bắt buộc.",
      "Bị động không bao giờ dùng by."
    ],
    "answer": 1,
    "explain": "By chỉ thêm khi tác nhân quan trọng.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 218,
    "lesson": 11,
    "q": "Tìm lỗi: “The report has completed.”",
    "choices": [
      "The report",
      "has completed",
      "không có lỗi",
      "report"
    ],
    "answer": 1,
    "explain": "Cần has been completed.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 219,
    "lesson": 11,
    "q": "Tìm lỗi: “The files were send.”",
    "choices": [
      "không có lỗi",
      "send",
      "were",
      "The files"
    ],
    "answer": 1,
    "explain": "V3 của send là sent.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 220,
    "lesson": 11,
    "q": "Tìm lỗi: “The form should checked.”",
    "choices": [
      "The form",
      "form",
      "không có lỗi",
      "should checked"
    ],
    "answer": 3,
    "explain": "Cần should be checked.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 221,
    "lesson": 12,
    "q": "___ you work here?",
    "choices": [
      "Do",
      "Are",
      "Did yesterday",
      "Have"
    ],
    "answer": 0,
    "explain": "Hiện tại đơn với động từ thường dùng Do.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 222,
    "lesson": 12,
    "q": "___ Nam work here?",
    "choices": [
      "Is",
      "Has",
      "Does",
      "Do"
    ],
    "answer": 2,
    "explain": "Nam số ít dùng Does.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 223,
    "lesson": 12,
    "q": "___ Lan busy yesterday?",
    "choices": [
      "Was",
      "Has",
      "Did",
      "Does"
    ],
    "answer": 0,
    "explain": "Be quá khứ đảo Was.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 224,
    "lesson": 12,
    "q": "Chọn câu hỏi đúng để xác nhận họ có ở nhà tối qua hay không.",
    "choices": [
      "Were they at home last night?",
      "Did they at home last night?",
      "Was they at home last night?",
      "Are they at home last night?"
    ],
    "answer": 0,
    "explain": "Câu hỏi với be ở quá khứ đảo were lên trước chủ ngữ they.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 225,
    "lesson": 12,
    "q": "___ you finished the report?",
    "choices": [
      "Have",
      "Do",
      "Did",
      "Are"
    ],
    "answer": 0,
    "explain": "Hiện tại hoàn thành đưa Have lên trước.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 226,
    "lesson": 12,
    "q": "___ she working now?",
    "choices": [
      "Is",
      "Does",
      "Has",
      "Did"
    ],
    "answer": 0,
    "explain": "Tiếp diễn đảo Is.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 227,
    "lesson": 12,
    "q": "___ you help me?",
    "choices": [
      "Can",
      "Have",
      "Do can",
      "Are"
    ],
    "answer": 0,
    "explain": "Modal can lên trước chủ ngữ.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 228,
    "lesson": 12,
    "q": "___ we wait?",
    "choices": [
      "Are",
      "Do should",
      "Did",
      "Should"
    ],
    "answer": 3,
    "explain": "Modal should lên trước chủ ngữ.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 229,
    "lesson": 12,
    "q": "Where ___ you work?",
    "choices": [
      "does",
      "are",
      "did yesterday",
      "do"
    ],
    "answer": 3,
    "explain": "Từ hỏi + do + S + V.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 230,
    "lesson": 12,
    "q": "When ___ she arrive?",
    "choices": [
      "has",
      "does",
      "was",
      "did"
    ],
    "answer": 3,
    "explain": "Hỏi thời điểm quá khứ dùng did.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 231,
    "lesson": 12,
    "q": "How long ___ you lived here? Chủ điểm cần kiểm tra: How long + have + V3.",
    "choices": [
      "are",
      "do",
      "did",
      "have"
    ],
    "answer": 3,
    "explain": "How long + have + V3.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 232,
    "lesson": 12,
    "q": "How many emails ___ you send?",
    "choices": [
      "did",
      "were",
      "have yesterday",
      "was"
    ],
    "answer": 0,
    "explain": "Quá khứ dùng did + send.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 233,
    "lesson": 12,
    "q": "Why ___ they waiting?",
    "choices": [
      "are",
      "have",
      "do",
      "did"
    ],
    "answer": 0,
    "explain": "Tiếp diễn dùng are waiting.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 234,
    "lesson": 12,
    "q": "Ai đã gọi Lan?",
    "choices": [
      "Who did call Lan?",
      "Who called Lan?",
      "Who Lan called?",
      "Who does called Lan?"
    ],
    "answer": 1,
    "explain": "Who là chủ ngữ nên không dùng did.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 235,
    "lesson": 12,
    "q": "Lan đã gọi ai?",
    "choices": [
      "Who called Lan?",
      "Who did Lan call?",
      "Who Lan did called?",
      "Who did call Lan?"
    ],
    "answer": 1,
    "explain": "Lan là chủ ngữ; who là tân ngữ.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 236,
    "lesson": 12,
    "q": "Sắp xếp: work / where / you / do",
    "choices": [
      "Where do you work?",
      "Where you do work?",
      "Do where you work?",
      "Where are you work?"
    ],
    "answer": 0,
    "explain": "Trật tự từ hỏi + trợ động từ + S + V.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 237,
    "lesson": 12,
    "q": "Sắp xếp: finished / have / you / report / the",
    "choices": [
      "Have finished you the report?",
      "Do you have finished the report?",
      "You have finished the report?",
      "Have you finished the report?"
    ],
    "answer": 3,
    "explain": "Đảo Have lên trước chủ ngữ.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 238,
    "lesson": 12,
    "q": "Tìm lỗi: “Does he works here?”",
    "choices": [
      "Does",
      "here",
      "he",
      "works"
    ],
    "answer": 3,
    "explain": "Sau does dùng work.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 239,
    "lesson": 12,
    "q": "Tìm lỗi: “Did she called?”",
    "choices": [
      "không có lỗi",
      "she",
      "called",
      "Did"
    ],
    "answer": 2,
    "explain": "Sau did dùng call.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 240,
    "lesson": 12,
    "q": "Tìm lỗi: “Where you work?”",
    "choices": [
      "you",
      "Where",
      "thiếu do",
      "work"
    ],
    "answer": 2,
    "explain": "Cần Where do you work?",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 241,
    "lesson": 13,
    "q": "I enjoy ___ English.",
    "choices": [
      "learning",
      "to learning",
      "to learn",
      "learn"
    ],
    "answer": 0,
    "explain": "Enjoy đi với V-ing.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 242,
    "lesson": 13,
    "q": "We decided ___ early.",
    "choices": [
      "to leave",
      "leave",
      "leaving",
      "to leaving"
    ],
    "answer": 0,
    "explain": "Decide đi với to + V.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 243,
    "lesson": 13,
    "q": "She finished ___ the report.",
    "choices": [
      "write",
      "to write",
      "writing",
      "to writing"
    ],
    "answer": 2,
    "explain": "Finish đi với V-ing.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 244,
    "lesson": 13,
    "q": "Nam plans ___ jobs.",
    "choices": [
      "to change",
      "to changing",
      "changing",
      "change"
    ],
    "answer": 0,
    "explain": "Plan đi với to + V.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 245,
    "lesson": 13,
    "q": "Avoid ___ your phone while driving.",
    "choices": [
      "use",
      "using",
      "to use",
      "to using"
    ],
    "answer": 1,
    "explain": "Avoid đi với V-ing.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 246,
    "lesson": 13,
    "q": "I hope ___ you soon.",
    "choices": [
      "to see",
      "see",
      "to seeing",
      "seeing"
    ],
    "answer": 0,
    "explain": "Hope đi với to + V.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 247,
    "lesson": 13,
    "q": "He suggested ___ a taxi.",
    "choices": [
      "to take",
      "taking",
      "take",
      "to taking"
    ],
    "answer": 1,
    "explain": "Suggest đi với V-ing.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 248,
    "lesson": 13,
    "q": "They agreed ___ the bill.",
    "choices": [
      "to pay",
      "to paying",
      "pay",
      "paying"
    ],
    "answer": 0,
    "explain": "Agree đi với to + V.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 249,
    "lesson": 13,
    "q": "Do you mind ___ the window?",
    "choices": [
      "to open",
      "opening",
      "open",
      "to opening"
    ],
    "answer": 1,
    "explain": "Mind đi với V-ing.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 250,
    "lesson": 13,
    "q": "Lan promised ___ me.",
    "choices": [
      "to call",
      "call",
      "calling",
      "to calling"
    ],
    "answer": 0,
    "explain": "Promise đi với to + V.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 251,
    "lesson": 13,
    "q": "Thank you for ___ me.",
    "choices": [
      "helping",
      "helped",
      "to help",
      "help"
    ],
    "answer": 0,
    "explain": "Sau giới từ for dùng V-ing.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 252,
    "lesson": 13,
    "q": "She left without ___ goodbye.",
    "choices": [
      "saying",
      "say",
      "said",
      "to say"
    ],
    "answer": 0,
    "explain": "Sau without dùng V-ing.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 253,
    "lesson": 13,
    "q": "I am interested in ___ English.",
    "choices": [
      "to learn",
      "learned",
      "learning",
      "learn"
    ],
    "answer": 2,
    "explain": "Sau in dùng V-ing.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 254,
    "lesson": 13,
    "q": "Remember ___ the door before leaving.",
    "choices": [
      "lock",
      "locking already happened",
      "to lock",
      "to locking"
    ],
    "answer": 2,
    "explain": "Remember to do = nhớ phải làm.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 255,
    "lesson": 13,
    "q": "I remember ___ him at the meeting.",
    "choices": [
      "meet",
      "to meet future",
      "meeting",
      "to meeting"
    ],
    "answer": 2,
    "explain": "Remember doing = nhớ đã làm.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "id": 256,
    "lesson": 13,
    "q": "Nam stopped ___ because it was unhealthy.",
    "choices": [
      "smoking",
      "smoke",
      "to smoke for purpose",
      "to smoking"
    ],
    "answer": 0,
    "explain": "Stop doing = dừng hẳn hành động.",
    "type": "Điền từ",
    "level": "Cơ bản"
  },
  {
    "id": 257,
    "lesson": 13,
    "q": "We stopped ___ some water.",
    "choices": [
      "to buying",
      "buy",
      "to buy",
      "buying permanently"
    ],
    "answer": 2,
    "explain": "Stop to do = dừng việc khác để làm việc này.",
    "type": "Chọn đáp án",
    "level": "Cơ bản"
  },
  {
    "id": 258,
    "lesson": 13,
    "q": "I look forward to ___ from you.",
    "choices": [
      "heard",
      "hearing",
      "hear",
      "to hear"
    ],
    "answer": 1,
    "explain": "To là giới từ trong cấu trúc này.",
    "type": "Tìm lỗi",
    "level": "Vừa"
  },
  {
    "id": 259,
    "lesson": 13,
    "q": "She considered ___ to another city.",
    "choices": [
      "moving",
      "to moving",
      "to move",
      "move"
    ],
    "answer": 0,
    "explain": "Consider đi với V-ing.",
    "type": "Dịch Việt-Anh",
    "level": "Vừa"
  },
  {
    "id": 260,
    "lesson": 13,
    "q": "Tìm lỗi: “I enjoy to read.”",
    "choices": [
      "to read",
      "enjoy",
      "I",
      "không có lỗi"
    ],
    "answer": 0,
    "explain": "Enjoy đi với reading.",
    "type": "Sắp xếp từ",
    "level": "Vận dụng"
  },
  {
    "lesson": 14,
    "sourceLesson": 1,
    "q": "Câu nào có cấu trúc S + be + danh từ nghề nghiệp?",
    "choices": [
      "Hoa at an office.",
      "Hoa is an architect.",
      "Hoa designs houses.",
      "Hoa works carefully."
    ],
    "answer": 1,
    "explain": "Architect là danh từ nghề nghiệp nên đứng sau động từ be.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 261
  },
  {
    "lesson": 14,
    "sourceLesson": 1,
    "q": "Chọn cách viết đúng cho ý “Cuộc họp diễn ra tại phòng 302 lúc 9 giờ.”",
    "choices": [
      "The meeting is in Room 302 at 9 o’clock.",
      "The meeting in Room 302 at 9 o’clock.",
      "At 9 o’clock the meeting Room 302.",
      "The meeting does in Room 302 at 9 o’clock."
    ],
    "answer": 0,
    "explain": "Câu cần động từ be; địa điểm đứng trước thời gian.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 262
  },
  {
    "lesson": 14,
    "sourceLesson": 1,
    "q": "Trong câu “The receptionist handed the visitor a form”, “a form” giữ vai trò gì?",
    "choices": [
      "Tân ngữ gián tiếp.",
      "Chủ ngữ.",
      "Động từ.",
      "Tân ngữ trực tiếp."
    ],
    "answer": 3,
    "explain": "A form là vật được trao nên là tân ngữ trực tiếp.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 263
  },
  {
    "lesson": 14,
    "sourceLesson": 2,
    "q": "This month, our team ___ in a temporary office while the main building is repaired.",
    "choices": [
      "is working",
      "work yesterday",
      "has work",
      "works every month"
    ],
    "answer": 0,
    "explain": "Tình huống tạm thời trong tháng này dùng hiện tại tiếp diễn.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 264
  },
  {
    "lesson": 14,
    "sourceLesson": 2,
    "q": "Which sentence describes a permanent fact rather than a temporary action?",
    "choices": [
      "Lan is using my desk this morning.",
      "The Earth moves around the Sun.",
      "The technicians are testing the system today.",
      "I am staying near the office this week."
    ],
    "answer": 1,
    "explain": "Sự thật khoa học dùng hiện tại đơn.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 265
  },
  {
    "lesson": 14,
    "sourceLesson": 2,
    "q": "Nam usually drives, but today he ___ the bus because his car is at the garage.",
    "choices": [
      "takes usually",
      "is taking",
      "take",
      "took every day"
    ],
    "answer": 1,
    "explain": "Sự khác thường đang diễn ra hôm nay dùng hiện tại tiếp diễn.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 266
  },
  {
    "lesson": 14,
    "sourceLesson": 3,
    "q": "By the time the manager arrived, what happened first in this simple sequence: “I printed the report, put it in a folder, and left it on her desk”?",
    "choices": [
      "I put it in a folder.",
      "I left it on her desk.",
      "I printed the report.",
      "The manager arrived."
    ],
    "answer": 2,
    "explain": "Trong chuỗi quá khứ đơn, hành động được kể theo thứ tự xảy ra.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 267
  },
  {
    "lesson": 14,
    "sourceLesson": 3,
    "q": "Choose the correct negative form of “The printer stopped at noon.”",
    "choices": [
      "The printer did not stop at noon.",
      "The printer not stopped at noon.",
      "The printer was not stop at noon.",
      "The printer did not stopped at noon."
    ],
    "answer": 0,
    "explain": "Sau did not dùng động từ nguyên mẫu stop.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 268
  },
  {
    "lesson": 14,
    "sourceLesson": 3,
    "q": "Which verb completes the sentence? “The courier ___ the parcel and then asked me to sign.”",
    "choices": [
      "bringed",
      "has bring",
      "brought",
      "brang"
    ],
    "answer": 2,
    "explain": "Quá khứ của bring là brought.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 269
  },
  {
    "lesson": 14,
    "sourceLesson": 4,
    "q": "The client ___ three messages so far today, and the working day is not over.",
    "choices": [
      "has sent",
      "sent yesterday",
      "is send",
      "have sent"
    ],
    "answer": 0,
    "explain": "So far today và khoảng thời gian chưa kết thúc dùng hiện tại hoàn thành.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 270
  },
  {
    "lesson": 14,
    "sourceLesson": 4,
    "q": "Which sentence means the speaker still works at the company?",
    "choices": [
      "I work there in March 2022.",
      "I worked at this company from March to June.",
      "I have worked at this company since March.",
      "I was working there last March."
    ],
    "answer": 2,
    "explain": "Hiện tại hoàn thành với since cho biết trạng thái còn tiếp tục.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 271
  },
  {
    "lesson": 14,
    "sourceLesson": 4,
    "q": "Choose the best response: “Is the meeting room ready?”",
    "choices": [
      "Yes, I arranged the chairs last year.",
      "Yes, I already arranging the chairs.",
      "Yes, I have arrange the chairs.",
      "Yes, I have already arranged the chairs."
    ],
    "answer": 3,
    "explain": "Already thường đi với hiện tại hoàn thành để nêu kết quả hiện tại.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 272
  },
  {
    "lesson": 14,
    "sourceLesson": 5,
    "q": "A colleague drops a stack of papers. What is the most natural immediate offer?",
    "choices": [
      "I will to help you pick them up.",
      "I’ll help you pick them up.",
      "I’m going helping you yesterday.",
      "I help you every week."
    ],
    "answer": 1,
    "explain": "Lời đề nghị ngay lúc nói dùng will + động từ nguyên mẫu.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 273
  },
  {
    "lesson": 14,
    "sourceLesson": 5,
    "q": "The calendar shows a confirmed online interview at 10 tomorrow. Choose the natural sentence.",
    "choices": [
      "I’m having an online interview at 10 tomorrow.",
      "I will having an online interview at 10.",
      "I have an online interview every 10 tomorrow.",
      "I am have an online interview tomorrow."
    ],
    "answer": 0,
    "explain": "Cuộc hẹn đã chốt dùng hiện tại tiếp diễn.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 274
  },
  {
    "lesson": 14,
    "sourceLesson": 5,
    "q": "There is fuel on the floor beside a hot machine. Choose the evidence-based prediction.",
    "choices": [
      "The fuel catches fire every day.",
      "The fuel is going to catch fire.",
      "The fuel will catching fire.",
      "The fuel is catch fire."
    ],
    "answer": 1,
    "explain": "Dự đoán dựa trên dấu hiệu rõ dùng be going to.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 275
  },
  {
    "lesson": 14,
    "sourceLesson": 6,
    "q": "A sign says “Authorized staff only.” What should a visitor understand?",
    "choices": [
      "Visitors must not enter.",
      "Visitors can entering.",
      "Visitors should to enter.",
      "Visitors do not have to enter, but may do so."
    ],
    "answer": 0,
    "explain": "Must not diễn tả điều bị cấm.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 276
  },
  {
    "lesson": 14,
    "sourceLesson": 6,
    "q": "The deadline was moved to next week. Which sentence expresses lack of necessity today?",
    "choices": [
      "We don’t have finish the report today.",
      "We can’t to finish the report today.",
      "We mustn’t finish the report today.",
      "We don’t have to finish the report today."
    ],
    "answer": 3,
    "explain": "Don’t have to nghĩa là không cần thiết.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 277
  },
  {
    "lesson": 14,
    "sourceLesson": 6,
    "q": "Choose the most polite request to a customer on the phone.",
    "choices": [
      "Could you repeat the order number, please?",
      "Do you can repeat the order number?",
      "Could you to repeat the order number?",
      "You must repeat the order number."
    ],
    "answer": 0,
    "explain": "Could you...? là lời nhờ lịch sự; sau could dùng động từ nguyên mẫu.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 278
  },
  {
    "lesson": 14,
    "sourceLesson": 7,
    "q": "The office bought three desks and two chairs. Which noun is uncountable in the same context?",
    "choices": [
      "chair",
      "furniture",
      "employee",
      "desk"
    ],
    "answer": 1,
    "explain": "Furniture là danh từ không đếm được.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 279
  },
  {
    "lesson": 14,
    "sourceLesson": 7,
    "q": "A caller asks for details about a vacancy. Choose the correct sentence.",
    "choices": [
      "Could you give me informations?",
      "Could you give me many information?",
      "Could you give me some information about the position?",
      "Could you give me an information about the position?"
    ],
    "answer": 2,
    "explain": "Information không đếm được, dùng some information.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 280
  },
  {
    "lesson": 14,
    "sourceLesson": 7,
    "q": "You mention a printer for the first time, then mention it again. Which pair is correct?",
    "choices": [
      "I saw printer. Printer was broken.",
      "I saw the printer. A printer was broken.",
      "I saw a printer. The printer was broken.",
      "I saw an printer. The printer was broken."
    ],
    "answer": 2,
    "explain": "Lần đầu dùng a; lần sau dùng the vì đã xác định.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 281
  },
  {
    "lesson": 14,
    "sourceLesson": 8,
    "q": "Laptop A weighs 1.2 kg and Laptop B weighs 1.8 kg. Which sentence is accurate?",
    "choices": [
      "Laptop A is the lightest than Laptop B.",
      "Laptop A is more light than Laptop B.",
      "Laptop A is lighter than Laptop B.",
      "Laptop A is as heavy than Laptop B."
    ],
    "answer": 2,
    "explain": "Light là tính từ ngắn; dạng so sánh hơn là lighter than.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 282
  },
  {
    "lesson": 14,
    "sourceLesson": 8,
    "q": "Of four routes, Route D takes the least time. Choose the correct description.",
    "choices": [
      "Route D is the fastest route.",
      "Route D is fastest than all routes.",
      "Route D is the more fast route.",
      "Route D is faster route."
    ],
    "answer": 0,
    "explain": "So sánh nhất dùng the fastest.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 283
  },
  {
    "lesson": 14,
    "sourceLesson": 8,
    "q": "The new process takes 10 minutes; the old one takes 40. Choose the strongest natural comparison.",
    "choices": [
      "The new process is much quicker than the old one.",
      "The new process is quickest than the old one.",
      "The new process is very quicker than the old one.",
      "The new process is more quicker."
    ],
    "answer": 0,
    "explain": "Much có thể nhấn mạnh dạng so sánh hơn; không dùng very quicker.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 284
  },
  {
    "lesson": 14,
    "sourceLesson": 9,
    "q": "You are giving real instructions for tomorrow. Complete: “If the client approves the design, we ___ production.”",
    "choices": [
      "started",
      "will start",
      "will started",
      "would start"
    ],
    "answer": 1,
    "explain": "Khả năng thực tế tương lai dùng điều kiện loại 1.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 285
  },
  {
    "lesson": 14,
    "sourceLesson": 9,
    "q": "The speaker cannot speak Japanese now. Choose the correct hypothetical sentence.",
    "choices": [
      "If I speak Japanese, I would apply.",
      "If I had spoken Japanese, I would apply now yesterday.",
      "If I will speak Japanese, I apply.",
      "If I spoke Japanese, I would apply for that job."
    ],
    "answer": 3,
    "explain": "Giả định không thật ở hiện tại dùng loại 2.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 286
  },
  {
    "lesson": 14,
    "sourceLesson": 9,
    "q": "The team missed the deadline because it started late. Which sentence regrets that past result?",
    "choices": [
      "If the team started earlier, it would meet the deadline last week.",
      "If the team starts earlier, it will meet the deadline yesterday.",
      "If the team had start earlier, it would have meet the deadline.",
      "If the team had started earlier, it would have met the deadline."
    ],
    "answer": 3,
    "explain": "Quá khứ không thật dùng had + V3 và would have + V3.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 287
  },
  {
    "lesson": 14,
    "sourceLesson": 10,
    "q": "Combine the ideas: “The technician fixed the server. The technician joined us last week.”",
    "choices": [
      "The technician who joined us last week fixed the server.",
      "The technician whose joined us fixed the server.",
      "The technician where joined us fixed the server.",
      "The technician which joined us fixed the server."
    ],
    "answer": 0,
    "explain": "Who dùng cho người và làm chủ ngữ của joined.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 288
  },
  {
    "lesson": 14,
    "sourceLesson": 10,
    "q": "Choose the sentence that correctly shows possession.",
    "choices": [
      "I spoke to a supplier where invoice was incorrect.",
      "I spoke to a supplier which invoice was incorrect.",
      "I spoke to a supplier whose invoice was incorrect.",
      "I spoke to a supplier who invoice was incorrect."
    ],
    "answer": 2,
    "explain": "Whose đứng trước danh từ để chỉ sở hữu.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 289
  },
  {
    "lesson": 14,
    "sourceLesson": 10,
    "q": "Which sentence has a non-defining relative clause?",
    "choices": [
      "The person who manages the branch is on leave.",
      "The branch that opened yesterday is busy.",
      "The office where I work is nearby.",
      "Mr Long, who manages the branch, is on leave."
    ],
    "answer": 3,
    "explain": "Mệnh đề giữa hai dấu phẩy bổ sung thông tin không thiết yếu.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 290
  },
  {
    "lesson": 14,
    "sourceLesson": 11,
    "q": "The company sends invoices every Friday. Choose the passive form.",
    "choices": [
      "Invoices were sent every Friday tomorrow.",
      "Invoices are sent every Friday.",
      "Invoices send every Friday.",
      "Invoices are send every Friday."
    ],
    "answer": 1,
    "explain": "Hiện tại đơn bị động: are + V3.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 291
  },
  {
    "lesson": 14,
    "sourceLesson": 11,
    "q": "Someone is interviewing the candidates now. Choose the passive form.",
    "choices": [
      "The candidates have interviewed now.",
      "The candidates being interview now.",
      "The candidates are interviewed now by every day.",
      "The candidates are being interviewed now."
    ],
    "answer": 3,
    "explain": "Hiện tại tiếp diễn bị động: am/is/are being + V3.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 292
  },
  {
    "lesson": 14,
    "sourceLesson": 11,
    "q": "By next Monday, the team will complete the audit. Choose the correct passive future sentence.",
    "choices": [
      "The audit will be completed by next Monday.",
      "The audit will be complete by the team yesterday.",
      "The audit is will completed by Monday.",
      "The audit will completed by next Monday."
    ],
    "answer": 0,
    "explain": "Tương lai bị động dùng will be + V3.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 293
  },
  {
    "lesson": 14,
    "sourceLesson": 12,
    "q": "You know the package arrived, but not the time. What should you ask?",
    "choices": [
      "When the package arrived?",
      "When did the package arrived?",
      "When did the package arrive?",
      "When was the package arrive?"
    ],
    "answer": 2,
    "explain": "Quá khứ đơn với động từ thường: When did + S + V.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 294
  },
  {
    "lesson": 14,
    "sourceLesson": 12,
    "q": "You want to know the person responsible for deleting a file. Choose the question.",
    "choices": [
      "Who the file deleted?",
      "Whom did deleted the file?",
      "Who did delete the file?",
      "Who deleted the file?"
    ],
    "answer": 3,
    "explain": "Who là chủ ngữ nên không dùng did.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 295
  },
  {
    "lesson": 14,
    "sourceLesson": 12,
    "q": "Choose the correct indirect question.",
    "choices": [
      "Could you tell me where does the meeting room be?",
      "Could you tell me where the meeting room is?",
      "Could you tell me where is the meeting room?",
      "Could you tell me where the meeting room?"
    ],
    "answer": 1,
    "explain": "Trong câu hỏi gián tiếp, dùng trật tự khẳng định: where + S + be.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 296
  },
  {
    "lesson": 14,
    "sourceLesson": 13,
    "q": "The manager asked us to avoid ___ confidential files by email.",
    "choices": [
      "to sending",
      "send",
      "to send",
      "sending"
    ],
    "answer": 3,
    "explain": "Avoid đi với V-ing.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 297
  },
  {
    "lesson": 14,
    "sourceLesson": 13,
    "q": "After two hours of work, we stopped ___ a short break.",
    "choices": [
      "take",
      "to taking",
      "taking permanently",
      "to take"
    ],
    "answer": 3,
    "explain": "Stop to do nghĩa là dừng việc đang làm để thực hiện việc khác.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 298
  },
  {
    "lesson": 14,
    "sourceLesson": 13,
    "q": "Choose the sentence in which “remember” refers to a past memory.",
    "choices": [
      "I remember meet her yesterday.",
      "I remember to meeting her.",
      "I remember meeting her at a conference.",
      "Remember to meet her tomorrow."
    ],
    "answer": 2,
    "explain": "Remember doing nói về ký ức của việc đã xảy ra.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 299
  },
  {
    "lesson": 14,
    "sourceLesson": 4,
    "q": "A project began in January and is still active. Which sentence is correct?",
    "choices": [
      "We have work on the project for January.",
      "We have worked on the project since January.",
      "We are worked on the project since January.",
      "We worked on the project since January and still do."
    ],
    "answer": 1,
    "explain": "Since đi với điểm bắt đầu và hiện tại hoàn thành cho việc còn tiếp tục.",
    "type": "Kiểm tra tổng hợp",
    "level": "Tổng hợp",
    "id": 300
  }
]
