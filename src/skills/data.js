// ============================================================
// LISTENING – transcript + câu hỏi trắc nghiệm + câu dictation
// ============================================================
export const LISTENING = [
  {
    id: 'L1', title: 'Daily routine', level: 'Cơ bản', accent: 'en-US', rate: 0.9,
    script: `Every morning I wake up at six o'clock. I brush my teeth, take a quick shower and have breakfast with my family. After breakfast I leave home at seven thirty and go to work by bus.`,
    questions: [
      { q: 'What time does the speaker wake up?', choices: ['At 6', 'At 6:30', 'At 7', 'At 7:30'], answer: 0 },
      { q: 'How does the speaker go to work?', choices: ['By car', 'By train', 'By bus', 'On foot'], answer: 2 },
      { q: 'Who does the speaker have breakfast with?', choices: ['Alone', 'With friends', 'With family', 'With colleagues'], answer: 2 }
    ],
    dictation: `Every morning I wake up at six o'clock.`
  },
  {
    id: 'L2', title: 'At the office', level: 'Cơ bản', accent: 'en-US', rate: 0.9,
    script: `Hi Nam, this is Lan. The meeting this afternoon starts at two thirty, not three. Please bring the sales report and the updated client list. We will meet in room 402 on the fourth floor.`,
    questions: [
      { q: 'When does the meeting start?', choices: ['2:00', '2:30', '3:00', '4:00'], answer: 1 },
      { q: 'Which room is the meeting in?', choices: ['204', '304', '402', '420'], answer: 2 },
      { q: 'What should Nam bring?', choices: ['A laptop and a projector', 'The sales report and client list', 'Coffee for everyone', 'The contract'], answer: 1 }
    ],
    dictation: `The meeting this afternoon starts at two thirty.`
  },
  {
    id: 'L3', title: 'Shopping', level: 'Vừa', accent: 'en-US', rate: 1.0,
    script: `Good morning. I'd like to buy two T-shirts and a pair of jeans. Do you have them in medium size? The jeans are a bit long, so I need a shorter pair. Also, is there a discount if I pay by card?`,
    questions: [
      { q: 'What size does the customer want?', choices: ['Small', 'Medium', 'Large', 'Extra large'], answer: 1 },
      { q: 'What problem does the customer have with the jeans?', choices: ['Wrong color', 'Too expensive', 'Too long', 'Too tight'], answer: 2 },
      { q: 'What does the customer ask about?', choices: ['A refund', 'A discount', 'A different shop', 'Free delivery'], answer: 1 }
    ],
    dictation: `I'd like to buy two T-shirts and a pair of jeans.`
  },
  {
    id: 'L4', title: 'Travel announcement', level: 'Vừa', accent: 'en-US', rate: 1.0,
    script: `Attention passengers. Flight VN 218 to Da Nang is now boarding at gate twelve. Please have your boarding pass and identification ready. Boarding will close fifteen minutes before departure.`,
    questions: [
      { q: 'Where is the flight going?', choices: ['Ha Noi', 'Ho Chi Minh City', 'Da Nang', 'Hue'], answer: 2 },
      { q: 'At which gate does the flight board?', choices: ['2', '10', '12', '20'], answer: 2 },
      { q: 'When does boarding close?', choices: ['5 min before departure', '10 min before', '15 min before', '30 min before'], answer: 2 }
    ],
    dictation: `Flight VN 218 to Da Nang is now boarding at gate twelve.`
  },
  {
    id: 'L5', title: 'Job interview', level: 'Nâng cao', accent: 'en-US', rate: 1.0,
    script: `Thank you for coming in. Could you tell me about your previous role? In your last job, what was the biggest challenge you faced, and how did you handle it? We're also interested in why you want to join our team.`,
    questions: [
      { q: 'What is the interviewer mainly doing?', choices: ['Offering a job', 'Asking about experience', 'Explaining salary', 'Rejecting the candidate'], answer: 1 },
      { q: 'What is asked about the previous job?', choices: ['Salary', 'A challenge and how it was handled', 'Vacation days', 'Team size'], answer: 1 },
      { q: 'Why does the interviewer mention "our team"?', choices: ['To praise the team', 'To ask about motivation', 'To fire someone', 'To change the topic'], answer: 1 }
    ],
    dictation: `Could you tell me about your previous role?`
  }
]

// ============================================================
// SPEAKING – câu mẫu, gợi ý, từ khóa
// ============================================================
export const SPEAKING = [
  {
    id: 'S1', title: 'Introduce yourself', level: 'Cơ bản',
    prompt: 'Giới thiệu bản thân trong 4 câu: tên, tuổi/nơi ở, nghề nghiệp, sở thích.',
    target: `Hi, my name is Nam. I am twenty five years old and I live in Ha Noi. I work as a software engineer. In my free time, I enjoy reading and playing football.`,
    keywords: ['name', 'years old', 'live', 'work', 'enjoy']
  },
  {
    id: 'S2', title: 'Order food', level: 'Cơ bản',
    prompt: 'Gọi món ở nhà hàng: chào, gọi món chính, gọi đồ uống, xin hóa đơn.',
    target: `Good evening. I would like a bowl of beef noodles and an iced tea, please. Could I have the bill when you have a moment?`,
    keywords: ['would like', 'please', 'bill']
  },
  {
    id: 'S3', title: 'Ask for directions', level: 'Cơ bản',
    prompt: 'Hỏi đường đến nhà ga và hỏi còn bao xa.',
    target: `Excuse me, could you tell me how to get to the railway station? Is it far from here? Should I take a taxi or can I walk?`,
    keywords: ['excuse me', 'how to get', 'far', 'taxi']
  },
  {
    id: 'S4', title: 'Describe your job', level: 'Vừa',
    prompt: 'Mô tả công việc hiện tại: vai trò, nhiệm vụ chính, điều thích nhất.',
    target: `I work as a marketing executive at a small company. My main tasks are planning campaigns and analyzing customer data. What I like most is meeting new people.`,
    keywords: ['work as', 'main task', 'like most']
  },
  {
    id: 'S5', title: 'Weekend plans', level: 'Vừa',
    prompt: 'Nói về kế hoạch cuối tuần (dùng "going to" hoặc hiện tại tiếp diễn).',
    target: `This weekend I am going to visit my parents in the countryside. On Saturday morning we are going to have a small family lunch, and on Sunday I will come back to the city.`,
    keywords: ['weekend', 'going to', 'Saturday', 'Sunday']
  },
  {
    id: 'S6', title: 'Phone call – appointment', level: 'Nâng cao',
    prompt: 'Gọi điện đặt lịch hẹn với bác sĩ, nói rõ thời gian và lý do.',
    target: `Hello, this is Nam speaking. I would like to make an appointment with Doctor Minh for next Tuesday morning. I have had a sore throat for three days and I need a check-up.`,
    keywords: ['appointment', 'next', 'sore', 'check-up']
  }
]

// ============================================================
// READING – đoạn văn + câu hỏi
// ============================================================
export const READING = [
  {
    id: 'R1', title: 'My family', level: 'Cơ bản',
    passage: `My family has four people: my parents, my younger sister and me. My father is an engineer and my mother is a teacher. My sister is still in high school. We live in a small apartment in Ha Noi. On weekends, we usually have dinner together and talk about our week.`,
    questions: [
      { q: 'How many people are in the family?', choices: ['Two', 'Three', 'Four', 'Five'], answer: 2 },
      { q: 'What does the mother do?', choices: ['Engineer', 'Teacher', 'Doctor', 'Nurse'], answer: 1 },
      { q: 'What does the family do on weekends?', choices: ['Travel abroad', 'Have dinner together', 'Visit the cinema', 'Go shopping'], answer: 1 }
    ]
  },
  {
    id: 'R2', title: 'A trip to Da Nang', level: 'Vừa',
    passage: `Last summer, my friends and I spent five days in Da Nang. We stayed at a small hotel near My Khe beach. In the mornings, we swam and had breakfast at a local café. In the afternoons, we visited Ba Na Hills and the Marble Mountains. The weather was hot but the sea was wonderful. We took hundreds of photos and promised to come back the following year.`,
    questions: [
      { q: 'How long was the trip?', choices: ['3 days', '4 days', '5 days', '7 days'], answer: 2 },
      { q: 'Where did they stay?', choices: ['A resort', 'A small hotel', 'A homestay', 'With friends'], answer: 1 },
      { q: 'What did they do in the afternoons?', choices: ['Swim', 'Sleep', 'Visit places', 'Go shopping'], answer: 2 },
      { q: 'What promise did they make?', choices: ['To return next year', 'To move there', 'To tell everyone', 'To write a blog'], answer: 0 }
    ]
  },
  {
    id: 'R3', title: 'Working from home', level: 'Vừa',
    passage: `Working from home has become common in many companies. Employees save time on commuting and can plan their day more flexibly. However, working from home also has challenges. Some people find it hard to separate work from personal life. Others miss the quick conversations with colleagues in the office. For this reason, many companies now choose a hybrid model, where staff work at home two or three days a week.`,
    questions: [
      { q: 'What is one benefit mentioned?', choices: ['Higher salary', 'Saving commuting time', 'Free lunch', 'Longer holidays'], answer: 1 },
      { q: 'What is one challenge mentioned?', choices: ['Slow internet', 'Difficult to separate work and personal life', 'No promotions', 'Cold weather'], answer: 1 },
      { q: 'What model do many companies choose now?', choices: ['Fully remote', 'Fully office', 'Hybrid', 'Four-day week'], answer: 2 }
    ]
  },
  {
    id: 'R4', title: 'Health and exercise', level: 'Nâng cao',
    passage: `Regular exercise is one of the most effective ways to improve both physical and mental health. According to the World Health Organization, adults should do at least one hundred and fifty minutes of moderate exercise per week. This can include brisk walking, cycling or swimming. Exercise helps control weight, strengthens the heart and reduces stress. Even short sessions of ten minutes can add up and produce real benefits over time.`,
    questions: [
      { q: 'How many minutes of moderate exercise per week does WHO recommend?', choices: ['60', '100', '150', '200'], answer: 2 },
      { q: 'Which of the following is NOT listed as exercise?', choices: ['Brisk walking', 'Cycling', 'Swimming', 'Watching TV'], answer: 3 },
      { q: 'What is one benefit of exercise mentioned?', choices: ['Higher income', 'Reduced stress', 'Better memory of names', 'Longer hair'], answer: 1 },
      { q: 'What does the passage say about short sessions?', choices: ['They are useless', 'They add up over time', 'They replace sleep', 'They cause injury'], answer: 1 }
    ]
  }
]

// ============================================================
// WRITING – đề bài, gợi ý, từ khóa, bài mẫu
// ============================================================
export const WRITING = [
  {
    id: 'W1', title: 'My daily routine', level: 'Cơ bản',
    prompt: 'Viết 5–7 câu (tối thiểu 50 từ) miêu tả thói quen hàng ngày của bạn. Dùng thì hiện tại đơn.',
    minWords: 50,
    keywords: ['wake up', 'breakfast', 'work', 'evening', 'usually', 'every day'],
    sample: `Every day I wake up at six o'clock. I brush my teeth and have breakfast with my family. I usually go to work by motorbike. In the afternoon, I often check my emails and finish my tasks. In the evening, I cook dinner and watch a short video. I go to bed at about eleven.`
  },
  {
    id: 'W2', title: 'Introduce yourself', level: 'Cơ bản',
    prompt: 'Viết một đoạn giới thiệu bản thân (tên, tuổi, nơi ở, nghề nghiệp, sở thích). Tối thiểu 40 từ.',
    minWords: 40,
    keywords: ['name', 'live', 'work', 'hobby', 'like'],
    sample: `My name is Nam. I am twenty-five years old and I live in Ha Noi. I work as a software engineer at a small company. In my free time, I like reading books and playing football with my friends. I also enjoy learning English.`
  },
  {
    id: 'W3', title: 'Email to a colleague', level: 'Vừa',
    prompt: 'Viết email ngắn (tối thiểu 60 từ) cho đồng nghiệp: xin nghỉ 1 ngày, nêu lý do và đề xuất người thay thế.',
    minWords: 60,
    keywords: ['Dear', 'I would like', 'because', 'regards', 'thank you'],
    sample: `Dear Lan, I would like to take one day off next Friday because I have a medical appointment in the morning. I have already told Minh about the pending tasks, and he is happy to help while I am away. Please let me know if you need anything else from me. Thank you very much. Best regards, Nam.`
  },
  {
    id: 'W4', title: 'Describe your hometown', level: 'Vừa',
    prompt: 'Viết một đoạn (tối thiểu 70 từ) miêu tả quê bạn: vị trí, con người, điều bạn thích nhất.',
    minWords: 70,
    keywords: ['located', 'people', 'famous', 'because', 'I love'],
    sample: `My hometown is a small city in the north of Vietnam. It is located near a river and surrounded by green rice fields. The people here are very friendly and always willing to help each other. The city is famous for its traditional food, especially grilled fish. I love my hometown because it is peaceful and the pace of life is slow. Whenever I return, I feel relaxed.`
  },
  {
    id: 'W5', title: 'Complaint email', level: 'Nâng cao',
    prompt: 'Viết email khiếu nại (tối thiểu 80 từ) về một sản phẩm bị lỗi. Nêu vấn đề, yêu cầu và thời hạn.',
    minWords: 80,
    keywords: ['order', 'problem', 'refund', 'replace', 'look forward'],
    sample: `Dear Customer Service, I am writing to report a problem with my recent order number 98765. The laptop I received does not turn on, even after charging for several hours. I believe the device was damaged during shipping. I would like to request a replacement or a full refund within seven working days. Please confirm how I should return the item. I look forward to your reply. Best regards, Nam.`
  },
  {
    id: 'W6', title: 'Opinion paragraph', level: 'Nâng cao',
    prompt: 'Viết đoạn nêu ý kiến (tối thiểu 90 từ): "Học online có thay thế được học trên lớp?" Đưa 2 lý do.',
    minWords: 90,
    keywords: ['In my opinion', 'firstly', 'secondly', 'however', 'therefore'],
    sample: `In my opinion, online learning cannot completely replace classroom learning. Firstly, online courses are flexible and help students save time on commuting, so they are useful for busy people. Secondly, however, classroom learning offers direct interaction with teachers and classmates, which improves motivation and communication skills. Therefore, I believe the best solution is a mix of online and offline learning.`
  }
]

export const SKILL_TOTALS = {
  listening: LISTENING.length,
  speaking: SPEAKING.length,
  reading: READING.length,
  writing: WRITING.length
}