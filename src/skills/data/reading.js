// ============================================================
// TEMPLATE:
// {
//   id: 'R99', cefr: 'A1', title: 'Tên bài',
//   passage: `đoạn văn tiếng Anh`,
//   questions: [
//     { q: 'Câu hỏi?', choices: ['A','B','C','D'], answer: 0 }
//   ]
// }
// ============================================================

export const READING = [
  // ---------- A1 ----------
  { id: 'R1', cefr: 'A1', title: 'My family',
    passage: `My family has four people: my parents, my younger sister and me. My father is an engineer and my mother is a teacher. We live in a small apartment in Ha Noi. On weekends we have dinner together.`,
    questions: [
      { q: 'How many people?', choices: ['Two', 'Three', 'Four', 'Five'], answer: 2 },
      { q: 'What does the mother do?', choices: ['Engineer', 'Teacher', 'Doctor', 'Nurse'], answer: 1 },
      { q: 'What do they do on weekends?', choices: ['Travel', 'Dinner together', 'Cinema', 'Shopping'], answer: 1 }
    ] },
  { id: 'R2', cefr: 'A1', title: 'My daily routine',
    passage: `I wake up at six every morning. I take a shower and eat breakfast. I go to school by bike. In the evening I do my homework and read books. I go to bed at ten.`,
    questions: [
      { q: 'What time does the writer wake up?', choices: ['5', '6', '7', '8'], answer: 1 },
      { q: 'How do they go to school?', choices: ['Walk', 'Bike', 'Bus', 'Car'], answer: 1 },
      { q: 'When do they go to bed?', choices: ['9', '10', '11', '12'], answer: 1 }
    ] },
  { id: 'R3', cefr: 'A1', title: 'My pet',
    passage: `I have a small dog named Lucky. He is white and brown. He likes to run in the park and play with a ball. Lucky is three years old. He is very friendly and loves children.`,
    questions: [
      { q: 'What pet does the writer have?', choices: ['Cat', 'Dog', 'Bird', 'Fish'], answer: 1 },
      { q: 'What color is the pet?', choices: ['Black', 'White only', 'White and brown', 'Grey'], answer: 2 },
      { q: 'How old is the pet?', choices: ['One', 'Two', 'Three', 'Four'], answer: 2 }
    ] },
  { id: 'R4', cefr: 'A1', title: 'At the market',
    passage: `Every Sunday I go to the market with my mother. We buy fresh vegetables, fruit, and fish. The market is very busy in the morning. I like to look at the colorful fruits. Sometimes my mother buys me a small gift.`,
    questions: [
      { q: 'When do they go to the market?', choices: ['Monday', 'Friday', 'Saturday', 'Sunday'], answer: 3 },
      { q: 'What do they buy?', choices: ['Clothes', 'Vegetables, fruit, and fish', 'Books', 'Toys'], answer: 1 },
      { q: 'What does the writer like?', choices: ['The colors of fruits', 'The smell of fish', 'The crowds', 'The music'], answer: 0 }
    ] },

  // ---------- A2 ----------
  { id: 'R5', cefr: 'A2', title: 'A trip to Da Nang',
    passage: `Last summer, my friends and I spent five days in Da Nang. We stayed at a small hotel near My Khe beach. In the mornings, we swam and had breakfast at a local café. In the afternoons, we visited Ba Na Hills and the Marble Mountains. The weather was hot but the sea was wonderful.`,
    questions: [
      { q: 'How long was the trip?', choices: ['3 days', '4 days', '5 days', '7 days'], answer: 2 },
      { q: 'Where did they stay?', choices: ['A resort', 'A small hotel', 'A homestay', 'With friends'], answer: 1 },
      { q: 'What did they do in the afternoons?', choices: ['Swim', 'Sleep', 'Visit places', 'Shop'], answer: 2 }
    ] },
  { id: 'R6', cefr: 'A2', title: 'My favorite food',
    passage: `My favorite food is pho, a Vietnamese noodle soup. It is made with beef or chicken, rice noodles, and a special broth. Pho is often eaten for breakfast. I like to add lime, chili, and fresh herbs. On cold days, a hot bowl of pho makes me feel warm and happy.`,
    questions: [
      { q: 'What is pho?', choices: ['A dessert', 'A noodle soup', 'A salad', 'A drink'], answer: 1 },
      { q: 'When is pho often eaten?', choices: ['Breakfast', 'Lunch', 'Dinner', 'Midnight'], answer: 0 },
      { q: 'What is added to pho?', choices: ['Sugar', 'Lime, chili, herbs', 'Cheese', 'Butter'], answer: 1 }
    ] },
  { id: 'R7', cefr: 'A2', title: 'A busy weekend',
    passage: `Last weekend I was very busy. On Saturday morning, I cleaned my house. In the afternoon, I went shopping with my sister. On Sunday, I visited my grandparents and helped them in the garden. In the evening, I studied English for two hours.`,
    questions: [
      { q: 'What did the writer do Saturday morning?', choices: ['Shopping', 'Cleaned house', 'Studied', 'Gardened'], answer: 1 },
      { q: 'Who did they shop with?', choices: ['Mother', 'Sister', 'Friend', 'Grandmother'], answer: 1 },
      { q: 'How long did they study English?', choices: ['One hour', 'Two hours', 'Three hours', 'Four hours'], answer: 1 }
    ] },
  { id: 'R8', cefr: 'A2', title: 'The library',
    passage: `Our town library is a quiet and friendly place. It has thousands of books, magazines, and DVDs. Members can borrow up to five items for two weeks. There are also free English classes on Tuesday evenings. The library opens from nine in the morning until eight in the evening.`,
    questions: [
      { q: 'How many items can members borrow?', choices: ['Three', 'Five', 'Ten', 'Fifteen'], answer: 1 },
      { q: 'When are English classes?', choices: ['Monday', 'Tuesday evening', 'Wednesday', 'Sunday'], answer: 1 },
      { q: 'When does the library close?', choices: ['6pm', '7pm', '8pm', '9pm'], answer: 2 }
    ] },

  // ---------- B1 ----------
  { id: 'R9', cefr: 'B1', title: 'Working from home',
    passage: `Working from home has become common in many companies. Employees save time on commuting and can plan their day more flexibly. However, working from home also has challenges. Some people find it hard to separate work from personal life. Others miss the quick conversations with colleagues in the office. For this reason, many companies now choose a hybrid model, where staff work at home two or three days a week.`,
    questions: [
      { q: 'One benefit mentioned?', choices: ['Higher salary', 'Saving commuting time', 'Free lunch', 'Longer holidays'], answer: 1 },
      { q: 'One challenge mentioned?', choices: ['Slow internet', 'Hard to separate work/personal', 'No promotions', 'Cold weather'], answer: 1 },
      { q: 'What model is popular now?', choices: ['Fully remote', 'Fully office', 'Hybrid', 'Four-day week'], answer: 2 }
    ] },
  { id: 'R10', cefr: 'B1', title: 'Health and exercise',
    passage: `Regular exercise is one of the most effective ways to improve both physical and mental health. According to the World Health Organization, adults should do at least one hundred and fifty minutes of moderate exercise per week. Exercise helps control weight, strengthens the heart and reduces stress. Even short sessions of ten minutes can add up over time.`,
    questions: [
      { q: 'How many minutes per week does WHO recommend?', choices: ['60', '100', '150', '200'], answer: 2 },
      { q: 'Which is NOT exercise?', choices: ['Brisk walking', 'Cycling', 'Swimming', 'Watching TV'], answer: 3 },
      { q: 'One benefit mentioned?', choices: ['Higher income', 'Reduced stress', 'Better memory', 'Longer hair'], answer: 1 }
    ] },
  { id: 'R11', cefr: 'B1', title: 'Smartphones in education',
    passage: `Smartphones have become a common tool in modern classrooms. Many teachers use apps to give quizzes, share documents and check attendance. However, smartphones can also distract students. Studies show that students who use their phones during class score lower on exams. To solve this, some schools allow phones only for learning activities.`,
    questions: [
      { q: 'How do teachers use phones?', choices: ['Only games', 'Quizzes, documents, attendance', 'Chat with parents', 'Sell products'], answer: 1 },
      { q: 'What do studies show?', choices: ['Phones improve scores', 'Phone use lowers exam scores', 'Phones banned everywhere', 'No effect'], answer: 1 },
      { q: 'What do some schools do?', choices: ['Ban all phones', 'Give free phones', 'Allow only for learning', 'Ignore problem'], answer: 2 }
    ] },
  { id: 'R12', cefr: 'B1', title: 'Vietnamese cuisine',
    passage: `Vietnamese cuisine is famous around the world for its fresh ingredients and balanced flavors. A typical meal includes rice, vegetables, and a small amount of meat or fish. Fish sauce, herbs, and lime are common seasonings. Pho, a noodle soup with beef or chicken, is perhaps the most well-known dish. Many dishes are low in fat and high in vitamins.`,
    questions: [
      { q: 'What is it famous for?', choices: ['Fried food', 'Fresh ingredients, balanced flavors', 'Sweet desserts', 'Spicy curries'], answer: 1 },
      { q: 'Common seasoning?', choices: ['Soy sauce', 'Fish sauce, herbs, lime', 'Cheese', 'Butter'], answer: 1 },
      { q: 'What is pho?', choices: ['Dessert', 'Noodle soup', 'Salad', 'Drink'], answer: 1 }
    ] },

  // ---------- B2 ----------
  { id: 'R13', cefr: 'B2', title: 'Plastic pollution',
    passage: `Plastic pollution is one of the biggest environmental problems today. Every year, millions of tons of plastic end up in the ocean, harming fish and birds. Reducing single-use plastic is an important step. Simple actions like bringing your own bag and refusing plastic straws can make a real difference. Governments and businesses also play a key role by banning certain plastics and offering eco-friendly alternatives.`,
    questions: [
      { q: 'Main problem?', choices: ['Air pollution', 'Plastic pollution', 'Noise', 'Water shortage'], answer: 1 },
      { q: 'Where does plastic end up?', choices: ['Mountains', 'Ocean', 'Space', 'Underground'], answer: 1 },
      { q: 'Who else plays a key role?', choices: ['Only scientists', 'Governments and businesses', 'Only students', 'No one'], answer: 1 }
    ] },
  { id: 'R14', cefr: 'B2', title: 'Learning a new language',
    passage: `Learning a new language takes time and patience. Experts recommend studying a little every day rather than a lot once a week. Listening to songs, watching films with subtitles, and speaking with native speakers are effective ways to improve. Making mistakes is normal and should not discourage learners. In fact, errors help you remember correct forms better.`,
    questions: [
      { q: 'What do experts recommend?', choices: ['Study once a week', 'Study a little every day', 'Only read', 'Never speak'], answer: 1 },
      { q: 'Which is NOT mentioned?', choices: ['Songs', 'Films with subtitles', 'Speaking with natives', 'Grammar drills only'], answer: 3 },
      { q: 'How are mistakes described?', choices: ['Should be avoided', 'Normal and helpful', 'Shameful', 'Failure'], answer: 1 }
    ] },
  { id: 'R15', cefr: 'B2', title: 'The history of the internet',
    passage: `The internet began in the late nineteen sixties as a project funded by the United States government. Its original purpose was to allow researchers to share information quickly. In nineteen ninety one, Tim Berners-Lee introduced the World Wide Web. Since then, the internet has transformed communication, business, and education. Today, more than five billion people use it every day.`,
    questions: [
      { q: 'When did it begin?', choices: ['1950s', '1960s', '1970s', '1980s'], answer: 1 },
      { q: 'Original purpose?', choices: ['Video games', 'Researcher info sharing', 'Shopping', 'Social media'], answer: 1 },
      { q: 'Who introduced the WWW?', choices: ['Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Mark Zuckerberg'], answer: 2 }
    ] },
  { id: 'R16', cefr: 'B2', title: 'Space exploration',
    passage: `Space exploration has expanded our understanding of the universe and led to many everyday technologies, including GPS and satellite communications. In nineteen sixty-nine, humans first landed on the Moon. Since then, rovers have explored Mars, probes have visited distant planets, and the International Space Station has hosted astronauts from many countries.`,
    questions: [
      { q: 'What technologies came from space?', choices: ['Only rockets', 'GPS and satellites', 'Telescopes only', 'Spacesuits only'], answer: 1 },
      { q: 'When did humans land on the Moon?', choices: ['1959', '1969', '1979', '1989'], answer: 1 },
      { q: 'What has been explored?', choices: ['Only Mars', 'Only Moon', 'Mars, distant planets', 'Nothing'], answer: 2 }
    ] },

  // ---------- C1 ----------
  { id: 'R17', cefr: 'C1', title: 'AI and ethics',
    passage: `Artificial intelligence is rapidly transforming sectors such as healthcare, transportation and finance. In medicine, AI models can detect certain cancers earlier than human radiologists. However, these systems also raise profound ethical questions. Who is accountable when an algorithm makes a harmful decision? How do we ensure that training data is representative? These concerns have prompted regulators worldwide to draft frameworks for responsible AI deployment.`,
    questions: [
      { q: 'What can AI do in medicine?', choices: ['Replace all doctors', 'Detect cancers earlier', 'Reduce costs only', 'Skip training'], answer: 1 },
      { q: 'What ethical question is raised?', choices: ['Is AI fast?', 'Who is accountable?', 'Is it cheap?', 'Is it portable?'], answer: 1 },
      { q: 'What are regulators doing?', choices: ['Banning AI', 'Drafting frameworks', 'Ignoring AI', 'Selling data'], answer: 1 }
    ] },
  { id: 'R18', cefr: 'C1', title: 'Climate change and cities',
    passage: `More than half of the world's population now lives in cities, and this number continues to grow. Climate change is putting additional pressure on urban areas through heatwaves, floods and air pollution. To respond, many cities are investing in green infrastructure such as parks, green roofs, and tree-lined streets. These features cool the air, absorb rainwater, and improve residents' mental health.`,
    questions: [
      { q: 'Percentage in cities?', choices: ['<30%', '~40%', '>50%', '~100%'], answer: 2 },
      { q: 'Climate pressures?', choices: ['Only heat', 'Heat, floods, pollution', 'Only floods', 'Only pollution'], answer: 1 },
      { q: 'What is green infrastructure?', choices: ['Solar panels', 'Parks, green roofs', 'Plastic roads', 'Tunnels'], answer: 1 }
    ] },
  { id: 'R19', cefr: 'C1', title: 'Economic inequality',
    passage: `Economic inequality has widened significantly over the past four decades in most developed countries. While technological innovation and globalisation have created unprecedented wealth, the gains have been unevenly distributed. Economists debate whether the solution lies in progressive taxation, universal basic income, or investment in education and retraining. What is clear is that extreme inequality corrodes social trust and undermines democratic institutions.`,
    questions: [
      { q: 'What has widened?', choices: ['Trust', 'Economic inequality', 'Education', 'Population'], answer: 1 },
      { q: 'What are possible solutions?', choices: ['Only tax cuts', 'Taxation, UBI, education', 'Only tariffs', 'Only charity'], answer: 1 },
      { q: 'What does extreme inequality corrode?', choices: ['Growth', 'Social trust', 'Technology', 'Trade'], answer: 1 }
    ] },
  { id: 'R20', cefr: 'C1', title: 'Media literacy',
    passage: `In the age of social media, media literacy has become an essential skill. Misinformation spreads faster than accurate reporting because it often triggers stronger emotional responses. Citizens must learn to cross-check sources, identify bias, and distinguish opinion from fact. Schools in several countries have introduced media literacy into their curricula, recognising that an informed public is the foundation of a healthy democracy.`,
    questions: [
      { q: 'Why does misinformation spread?', choices: ['It is accurate', 'It triggers emotion', 'It is long', 'It is free'], answer: 1 },
      { q: 'What must citizens learn?', choices: ['Only read', 'Cross-check, identify bias', 'Delete apps', 'Ignore news'], answer: 1 },
      { q: 'What have schools done?', choices: ['Ban social media', 'Add media literacy to curricula', 'Ignore the issue', 'Sell phones'], answer: 1 }
    ] },

  // ---------- C2 ----------
  { id: 'R21', cefr: 'C2', title: 'Consciousness and the brain',
    passage: `The so-called hard problem of consciousness refers to the difficulty of explaining why physical processes in the brain give rise to subjective experience. Functionalist theories argue that mental states are defined by their causal roles, and that any system with the right functional organisation would be conscious, regardless of its substrate. Critics counter that such accounts leave out precisely what needs explaining: the qualitative character of experience, or qualia.`,
    questions: [
      { q: 'What is the hard problem?', choices: ['Brain anatomy', 'Why physical processes yield subjective experience', 'Neural plasticity', 'Memory loss'], answer: 1 },
      { q: 'What do functionalists claim?', choices: ['Only brains can be conscious', 'Any right-org system is conscious', 'Consciousness is fake', 'Only humans matter'], answer: 1 },
      { q: 'What do critics emphasise?', choices: ['Causality', 'Qualia', 'Structure', 'Genetics'], answer: 1 }
    ] },
  { id: 'R22', cefr: 'C2', title: 'Quantum computing',
    passage: `Quantum computers exploit superposition and entanglement to perform certain computations exponentially faster than classical machines. Shor's algorithm, for example, could factor large integers in polynomial time, threatening widely deployed cryptographic systems such as RSA. However, building fault-tolerant quantum hardware remains extraordinarily challenging, and error rates continue to constrain practical deployment.`,
    questions: [
      { q: 'What do quantum computers exploit?', choices: ['Heat', 'Superposition and entanglement', 'Gravity', 'Light only'], answer: 1 },
      { q: 'What does Shor\'s algorithm threaten?', choices: ['Databases', 'RSA cryptography', 'Email', 'Cloud storage'], answer: 1 },
      { q: 'What is the main challenge?', choices: ['Cost', 'Fault-tolerant hardware', 'Speed', 'Size'], answer: 1 }
    ] },
  { id: 'R23', cefr: 'C2', title: 'Globalisation and culture',
    passage: `Globalisation has been celebrated for fostering cross-cultural exchange and economic integration. Yet critics argue that it also homogenises local cultures, marginalising minority languages and traditional practices. The phenomenon of cultural hybridisation suggests a more nuanced picture: rather than simple erasure, global flows often produce new, syncretic forms. The question is whether such hybridity preserves cultural diversity or merely camouflages its erosion.`,
    questions: [
      { q: 'What is globalisation praised for?', choices: ['Uniformity', 'Cross-cultural exchange', 'Isolation', 'Tradition'], answer: 1 },
      { q: 'Critics argue it...', choices: ['Enriches all cultures', 'Homogenises local cultures', 'Stops migration', 'Reduces trade'], answer: 1 },
      { q: 'What does hybridisation suggest?', choices: ['Erasure', 'Nuanced outcomes', 'Simplification', 'Stagnation'], answer: 1 }
    ] },
  { id: 'R24', cefr: 'C2', title: 'Postmodern literature',
    passage: `Postmodern literature is characterised by its scepticism toward grand narratives, its playful use of pastiche, and its blurring of the boundary between fiction and reality. Writers such as Borges, Pynchon and Calvino deliberately undermine the reader's expectations of coherence and closure. Metafiction—fiction that reflects on its own status as fiction—is a hallmark of the mode. Critics remain divided over whether postmodernism represents a liberating pluralism or a sterile exhaustion of form.`,
    questions: [
      { q: 'What characterises postmodern literature?', choices: ['Realism', 'Scepticism toward grand narratives', 'Moral certainty', 'Linear plots'], answer: 1 },
      { q: 'What is metafiction?', choices: ['Historical fiction', 'Fiction about fiction', 'Autobiography', 'Poetry'], answer: 1 },
      { q: 'Critics are divided over...', choices: ['Its age', 'Its value', 'Its language', 'Its authors'], answer: 1 }
    ] }
]