// ============================================================
// TEMPLATE — copy khối dưới, đổi giá trị:
// {
//   id: 'L99', cefr: 'A1',                 // L1..L99, A1|A2|B1|B2|C1|C2
//   title: 'Tên bài', accent: 'en-US', rate: 0.9,
//   script: `đoạn văn bản sẽ được đọc`,
//   questions: [
//     { q: 'Câu hỏi?', choices: ['A','B','C','D'], answer: 0 }
//   ],
//   dictation: 'Câu ngắn để chép chính tả'
// }
// ============================================================

export const LISTENING = [
  // ---------- A1 ----------
  {
    id: 'L1', cefr: 'A1', title: 'Daily routine', accent: 'en-US', rate: 0.85,
    script: `Every morning I wake up at six o'clock. I have breakfast with my family. Then I go to work by bus.`,
    questions: [
      { q: 'What time does the speaker wake up?', choices: ['At 5', 'At 6', 'At 7', 'At 8'], answer: 1 },
      { q: 'Who does the speaker have breakfast with?', choices: ['Friends', 'Family', 'Alone', 'Colleagues'], answer: 1 },
      { q: 'How does the speaker go to work?', choices: ['By car', 'By bus', 'By train', 'On foot'], answer: 1 }
    ],
    dictation: `I have breakfast with my family.`
  },
  {
    id: 'L2', cefr: 'A1', title: 'Greetings', accent: 'en-US', rate: 0.85,
    script: `Hello. My name is Anna. Nice to meet you. I am from Canada. I am a student.`,
    questions: [
      { q: 'What is the speaker\'s name?', choices: ['Anna', 'Emma', 'Laura', 'Sarah'], answer: 0 },
      { q: 'Where is she from?', choices: ['The USA', 'England', 'Canada', 'Australia'], answer: 2 },
      { q: 'What is her job?', choices: ['Teacher', 'Doctor', 'Student', 'Engineer'], answer: 2 }
    ],
    dictation: `Nice to meet you. I am from Canada.`
  },
  {
    id: 'L3', cefr: 'A1', title: 'Numbers and time', accent: 'en-US', rate: 0.85,
    script: `The meeting is at nine thirty. There are twelve people in the room. The room number is two hundred and five.`,
    questions: [
      { q: 'What time is the meeting?', choices: ['9:00', '9:15', '9:30', '10:00'], answer: 2 },
      { q: 'How many people are in the room?', choices: ['Ten', 'Twelve', 'Twenty', 'Two'], answer: 1 },
      { q: 'What is the room number?', choices: ['205', '250', '502', '520'], answer: 0 }
    ],
    dictation: `The meeting is at nine thirty.`
  },
  {
    id: 'L4', cefr: 'A1', title: 'My family', accent: 'en-US', rate: 0.85,
    script: `I have a small family. There are four people: my parents, my sister and me. My mother is a nurse. My father is a driver.`,
    questions: [
      { q: 'How many people are in the family?', choices: ['Three', 'Four', 'Five', 'Six'], answer: 1 },
      { q: 'What does the mother do?', choices: ['Teacher', 'Nurse', 'Cook', 'Driver'], answer: 1 },
      { q: 'What does the father do?', choices: ['Driver', 'Farmer', 'Doctor', 'Pilot'], answer: 0 }
    ],
    dictation: `My mother is a nurse.`
  },

  // ---------- A2 ----------
  {
    id: 'L5', cefr: 'A2', title: 'Shopping', accent: 'en-US', rate: 0.95,
    script: `Good morning. I'd like to buy two T-shirts and a pair of jeans. Do you have them in medium size? The jeans are a bit long, so I need a shorter pair.`,
    questions: [
      { q: 'What size does the customer want?', choices: ['Small', 'Medium', 'Large', 'XL'], answer: 1 },
      { q: 'What is the problem with the jeans?', choices: ['Wrong color', 'Too expensive', 'Too long', 'Too tight'], answer: 2 },
      { q: 'How many T-shirts?', choices: ['One', 'Two', 'Three', 'Four'], answer: 1 }
    ],
    dictation: `I'd like to buy two T-shirts and a pair of jeans.`
  },
  {
    id: 'L6', cefr: 'A2', title: 'Weather forecast', accent: 'en-US', rate: 0.95,
    script: `Good evening, here is the weather for tomorrow. In the morning, Ha Noi will be cloudy with a light breeze. Around noon, there is a chance of rain. The afternoon will be cooler, around twenty-two degrees.`,
    questions: [
      { q: 'What will the morning be like?', choices: ['Sunny', 'Cloudy', 'Stormy', 'Snowy'], answer: 1 },
      { q: 'When is rain likely?', choices: ['Morning', 'Around noon', 'Evening', 'Night'], answer: 1 },
      { q: 'What is the afternoon temperature?', choices: ['About 15°C', 'About 18°C', 'About 22°C', 'About 30°C'], answer: 2 }
    ],
    dictation: `In the morning, Ha Noi will be cloudy.`
  },
  {
    id: 'L7', cefr: 'A2', title: 'At the restaurant', accent: 'en-US', rate: 0.95,
    script: `Welcome to Sunrise Restaurant. A table for two? Right this way, please. Here is the menu. Our specials tonight are grilled salmon and beef steak. Would you like something to drink?`,
    questions: [
      { q: 'How many people?', choices: ['One', 'Two', 'Three', 'Four'], answer: 1 },
      { q: 'What are tonight\'s specials?', choices: ['Pizza and pasta', 'Salmon and beef steak', 'Soup and salad', 'Chicken and fish'], answer: 1 },
      { q: 'What does the waiter offer?', choices: ['The bill', 'A drink', 'Dessert', 'Coffee'], answer: 1 }
    ],
    dictation: `Our specials tonight are grilled salmon and beef steak.`
  },
  {
    id: 'L8', cefr: 'A2', title: 'Giving directions', accent: 'en-US', rate: 0.95,
    script: `Excuse me, how do I get to the post office? Go straight for two blocks, then turn left at the traffic lights. Walk past the bank and you will see the post office on your right.`,
    questions: [
      { q: 'How far should you go straight?', choices: ['One block', 'Two blocks', 'Three blocks', 'Five blocks'], answer: 1 },
      { q: 'Where should you turn?', choices: ['At the bank', 'At the park', 'At the traffic lights', 'At the post office'], answer: 2 },
      { q: 'Where is the post office?', choices: ['On the left', 'On the right', 'Behind a school', 'Next to a hospital'], answer: 1 }
    ],
    dictation: `Go straight for two blocks, then turn left at the traffic lights.`
  },

  // ---------- B1 ----------
  {
    id: 'L9', cefr: 'B1', title: 'At the office', accent: 'en-US', rate: 1.0,
    script: `Hi Nam, this is Lan. The meeting this afternoon starts at two thirty, not three. Please bring the sales report and the updated client list. We will meet in room 402 on the fourth floor.`,
    questions: [
      { q: 'When does the meeting start?', choices: ['2:00', '2:30', '3:00', '4:00'], answer: 1 },
      { q: 'Which room?', choices: ['204', '304', '402', '420'], answer: 2 },
      { q: 'What should Nam bring?', choices: ['A laptop', 'Sales report and client list', 'Coffee', 'The contract'], answer: 1 }
    ],
    dictation: `The meeting this afternoon starts at two thirty.`
  },
  {
    id: 'L10', cefr: 'B1', title: 'Doctor\'s appointment', accent: 'en-US', rate: 1.0,
    script: `Good morning. What can I do for you? I see you have had a sore throat for three days. Let me check your temperature. It is thirty-eight degrees. I will prescribe some medicine. Take it twice a day after meals.`,
    questions: [
      { q: 'What is the patient\'s problem?', choices: ['Headache', 'Sore throat', 'Backache', 'Stomachache'], answer: 1 },
      { q: 'What is the temperature?', choices: ['36°', '37°', '38°', '39°'], answer: 2 },
      { q: 'How often should the patient take the medicine?', choices: ['Once a day', 'Twice a day', 'Three times a day', 'Every four hours'], answer: 1 }
    ],
    dictation: `Take the medicine twice a day after meals.`
  },
  {
    id: 'L11', cefr: 'B1', title: 'Hotel reservation', accent: 'en-US', rate: 1.0,
    script: `Good afternoon, Saigon Grand Hotel. A double room for two nights, from Friday to Sunday. Yes, we have availability. The rate is one million two hundred thousand dong per night, breakfast included.`,
    questions: [
      { q: 'Type of room?', choices: ['Single', 'Double', 'Suite', 'Family'], answer: 1 },
      { q: 'How many nights?', choices: ['One', 'Two', 'Three', 'Four'], answer: 1 },
      { q: 'What is included?', choices: ['Dinner', 'Breakfast', 'Airport transfer', 'Spa'], answer: 1 }
    ],
    dictation: `A double room for two nights, from Friday to Sunday.`
  },
  {
    id: 'L12', cefr: 'B1', title: 'Travel announcement', accent: 'en-US', rate: 1.0,
    script: `Attention passengers. Flight VN 218 to Da Nang is now boarding at gate twelve. Please have your boarding pass ready. Boarding will close fifteen minutes before departure.`,
    questions: [
      { q: 'Where is the flight going?', choices: ['Ha Noi', 'Ho Chi Minh City', 'Da Nang', 'Hue'], answer: 2 },
      { q: 'Which gate?', choices: ['2', '10', '12', '20'], answer: 2 },
      { q: 'When does boarding close?', choices: ['5 min before', '10 min before', '15 min before', '30 min before'], answer: 2 }
    ],
    dictation: `Flight VN 218 to Da Nang is now boarding at gate twelve.`
  },

  // ---------- B2 ----------
  {
    id: 'L13', cefr: 'B2', title: 'Job interview', accent: 'en-US', rate: 1.0,
    script: `Thank you for coming in. Could you tell me about your previous role? In your last job, what was the biggest challenge you faced, and how did you handle it? We're also interested in why you want to join our team.`,
    questions: [
      { q: 'What is the interviewer doing?', choices: ['Offering a job', 'Asking about experience', 'Explaining salary', 'Rejecting'], answer: 1 },
      { q: 'What is asked about the previous job?', choices: ['Salary', 'A challenge', 'Vacation', 'Team size'], answer: 1 },
      { q: 'Why mention "our team"?', choices: ['Praise', 'Ask motivation', 'Fire', 'Change topic'], answer: 1 }
    ],
    dictation: `Could you tell me about your previous role?`
  },
  {
    id: 'L14', cefr: 'B2', title: 'Customer complaint', accent: 'en-US', rate: 1.0,
    script: `Hello, I ordered a laptop last week and it arrived this morning. Unfortunately, the screen is cracked and the keyboard does not work. I would like a full refund or a replacement. Can you tell me how to return this item?`,
    questions: [
      { q: 'What did the customer order?', choices: ['Phone', 'Tablet', 'Laptop', 'Monitor'], answer: 2 },
      { q: 'What is wrong?', choices: ['Wrong color', 'Missing parts', 'Cracked screen and broken keyboard', 'Too expensive'], answer: 2 },
      { q: 'What does the customer want?', choices: ['A discount', 'Refund or replacement', 'A free gift', 'Repair'], answer: 1 }
    ],
    dictation: `The screen is cracked and the keyboard does not work.`
  },
  {
    id: 'L15', cefr: 'B2', title: 'Banking', accent: 'en-US', rate: 1.0,
    script: `Good morning. I would like to open a savings account. Could you tell me the minimum deposit and the interest rate? Also, is there a monthly fee? I prefer online banking, so I do not need a paper statement.`,
    questions: [
      { q: 'What kind of account?', choices: ['Checking', 'Savings', 'Business', 'Student'], answer: 1 },
      { q: 'What does the customer ask about?', choices: ['Location', 'Minimum deposit and interest rate', 'Loans', 'Credit cards'], answer: 1 },
      { q: 'What does the customer prefer?', choices: ['Paper statements', 'Phone banking', 'Online banking', 'Cash only'], answer: 2 }
    ],
    dictation: `I would like to open a savings account.`
  },
  {
    id: 'L16', cefr: 'B2', title: 'Sports news', accent: 'en-US', rate: 1.05,
    script: `In sports news, Vietnam beat Thailand two to one in the final match last night. The winning goal was scored in the eighty-ninth minute by striker Nguyen Van A. The team will now prepare for the SEA Games next month.`,
    questions: [
      { q: 'What was the final score?', choices: ['1-0', '2-1', '3-2', '0-0'], answer: 1 },
      { q: 'When was the winning goal?', choices: ['First half', '60th', '89th', 'Extra time'], answer: 2 },
      { q: 'What is next?', choices: ['World Cup', 'Olympics', 'SEA Games', 'Asian Cup'], answer: 2 }
    ],
    dictation: `Vietnam beat Thailand two to one in the final match.`
  },

  // ---------- C1 ----------
  {
    id: 'L17', cefr: 'C1', title: 'University lecture', accent: 'en-US', rate: 1.05,
    script: `Good morning. Today we will discuss the impact of climate change on agriculture in Southeast Asia. Rising temperatures reduce rice yields and increase water shortages. We will examine three solutions: drought-resistant crops, efficient irrigation systems, and supportive government policies.`,
    questions: [
      { q: 'Main topic?', choices: ['Global trade', 'Climate change and agriculture', 'Rice exports', 'History'], answer: 1 },
      { q: 'How many solutions?', choices: ['One', 'Two', 'Three', 'Four'], answer: 2 },
      { q: 'What happens to rice yields?', choices: ['Increase', 'Stay same', 'Decrease', 'Unknown'], answer: 2 }
    ],
    dictation: `Rising temperatures reduce rice yields and increase water shortages.`
  },
  {
    id: 'L18', cefr: 'C1', title: 'Business meeting', accent: 'en-US', rate: 1.05,
    script: `Let's go over the agenda. First, we review last quarter's sales figures. Second, we need to approve the marketing budget for the new product launch. Third, the HR team will present the hiring plan for the next six months. We need to finish by eleven thirty.`,
    questions: [
      { q: 'What is reviewed first?', choices: ['Budget', 'Sales figures', 'Hiring', 'Schedule'], answer: 1 },
      { q: 'What needs approval?', choices: ['Sales', 'Marketing budget', 'Hiring', 'Meeting time'], answer: 1 },
      { q: 'When must the meeting end?', choices: ['10:30', '11:00', '11:30', '12:00'], answer: 2 }
    ],
    dictation: `Second, we need to approve the marketing budget for the new product launch.`
  },
  {
    id: 'L19', cefr: 'C1', title: 'Tech podcast', accent: 'en-US', rate: 1.05,
    script: `Welcome back to Tech Talk. Today we're discussing how artificial intelligence is reshaping the job market. While AI automates routine tasks, it also creates new roles in data science, prompt engineering, and AI ethics. The key question is not whether jobs will change, but how quickly workers can adapt.`,
    questions: [
      { q: 'What is the episode about?', choices: ['AI and jobs', 'Social media', 'Cryptocurrency', 'Cloud computing'], answer: 0 },
      { q: 'Which is NOT a new role mentioned?', choices: ['Data scientist', 'Prompt engineer', 'AI ethicist', 'Hardware tester'], answer: 3 },
      { q: 'What is the key question?', choices: ['If jobs change', 'How fast workers adapt', 'When AI ends', 'Why tech fails'], answer: 1 }
    ],
    dictation: `The key question is how quickly workers can adapt.`
  },
  {
    id: 'L20', cefr: 'C1', title: 'Conference keynote', accent: 'en-US', rate: 1.05,
    script: `Ladies and gentlemen, welcome to our annual leadership summit. Over the next two days, we will explore three themes: digital transformation, sustainable growth, and inclusive leadership. Our goal is not simply to share ideas, but to commit to concrete actions that will shape the next decade.`,
    questions: [
      { q: 'How many themes?', choices: ['Two', 'Three', 'Four', 'Five'], answer: 1 },
      { q: 'What is the goal?', choices: ['Share ideas only', 'Commit to concrete actions', 'Sell products', 'Hire staff'], answer: 1 },
      { q: 'What timeframe is mentioned?', choices: ['Next month', 'Next year', 'Next decade', 'Next century'], answer: 2 }
    ],
    dictation: `Our goal is to commit to concrete actions that will shape the next decade.`
  },

  // ---------- C2 ----------
  {
    id: 'L21', cefr: 'C2', title: 'Political speech', accent: 'en-US', rate: 1.05,
    script: `Fellow citizens. Throughout our history, we have faced moments that tested our resolve. Today is such a moment. The choices we make in the coming months will echo through generations. We must rise above partisan divisions and reaffirm our shared commitment to justice, dignity, and the common good.`,
    questions: [
      { q: 'What kind of speech is this?', choices: ['Business pitch', 'Political address', 'Academic lecture', 'Wedding toast'], answer: 1 },
      { q: 'What must we rise above?', choices: ['Economic crises', 'Partisan divisions', 'Foreign threats', 'Climate change'], answer: 1 },
      { q: 'What are the shared values?', choices: ['Wealth and power', 'Justice, dignity, common good', 'Independence and security', 'Innovation and speed'], answer: 1 }
    ],
    dictation: `We must rise above partisan divisions and reaffirm our shared commitment.`
  },
  {
    id: 'L22', cefr: 'C2', title: 'Scientific lecture', accent: 'en-US', rate: 1.05,
    script: `Today we will examine the role of quantum entanglement in modern cryptography. Unlike classical systems, quantum key distribution enables two parties to detect any eavesdropping attempt, because measurement inevitably disturbs the quantum state. This property, known as the no-cloning theorem, forms the foundation of secure quantum communication.`,
    questions: [
      { q: 'Main topic?', choices: ['Neural networks', 'Quantum entanglement and cryptography', 'Protein folding', 'Black holes'], answer: 1 },
      { q: 'Why can eavesdropping be detected?', choices: ['Software detects it', 'Measurement disturbs the state', 'Encryption is unbreakable', 'Keys are long'], answer: 1 },
      { q: 'What is the no-cloning theorem?', choices: ['A tool for copying keys', 'Foundation of quantum communication', 'A programming rule', 'A hypothesis'], answer: 1 }
    ],
    dictation: `Measurement inevitably disturbs the quantum state.`
  },
  {
    id: 'L23', cefr: 'C2', title: 'Legal briefing', accent: 'en-US', rate: 1.05,
    script: `Counsel, the court has reviewed your motion for summary judgment. The defendant argues that the contract lacked consideration, thereby rendering it unenforceable. However, the plaintiff has submitted evidence of partial performance, which may constitute sufficient consideration under established precedent. We will hear oral arguments next Tuesday.`,
    questions: [
      { q: 'What has the court reviewed?', choices: ['The evidence', 'Motion for summary judgment', 'A settlement', 'The verdict'], answer: 1 },
      { q: 'What does the defendant argue?', choices: ['Breach of contract', 'Lack of consideration', 'Fraud', 'Delay'], answer: 1 },
      { q: 'What happens next Tuesday?', choices: ['Verdict', 'Sentencing', 'Oral arguments', 'Appeal'], answer: 2 }
    ],
    dictation: `The defendant argues that the contract lacked consideration.`
  },
  {
    id: 'L24', cefr: 'C2', title: 'Academic debate', accent: 'en-US', rate: 1.05,
    script: `My opponent contends that economic growth and environmental protection are fundamentally incompatible. I would argue the opposite: that green innovation is not merely compatible with growth, but essential to sustaining it. The empirical evidence from Scandinavian economies demonstrates that decarbonisation and prosperity can coexist, provided that policy frameworks are carefully designed.`,
    questions: [
      { q: 'What is the opponent\'s view?', choices: ['Growth and environment can coexist', 'Growth and environment are incompatible', 'Environment is irrelevant', 'Growth must be stopped'], answer: 1 },
      { q: 'What does the speaker argue?', choices: ['Growth should slow', 'Green innovation sustains growth', 'Both are impossible', 'Neither matters'], answer: 1 },
      { q: 'Which evidence is cited?', choices: ['African economies', 'Scandinavian economies', 'Asian studies', 'US data'], answer: 1 }
    ],
    dictation: `Green innovation is essential to sustaining economic growth.`
  }
]