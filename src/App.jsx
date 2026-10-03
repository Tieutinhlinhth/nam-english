import { useEffect, useMemo, useRef, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import {
  ArrowLeft, ArrowRight, BarChart3, BookOpen, CheckCircle2,
  GraduationCap, History, Home, ListChecks, LogIn, LogOut, Menu, RotateCcw,
  Target, Trophy, UserPlus, X, XCircle, User, Eye, EyeOff, KeyRound,
  Cloud, CloudOff, RefreshCw, Save, ShieldCheck,
  Headphones, Mic, BookOpenCheck, PenLine, Sparkles, ChevronRight, ChevronDown,
  Volume2, VolumeX, Swords, Settings
} from 'lucide-react'
import { LESSONS, QUESTIONS as QUESTIONS_BASE } from './questions'
import { QUESTIONS_EXTRA } from './questions-extra'
import {
  QUESTIONS_TOPIC_EXTRA,
  getQuestionsByTopicLevel,
  countQuestionsByTopicLevel,
  mapLegacyLevel
} from './questions-topics'
import { GRAMMAR_LEVELS } from './skills/GrammarLevelPicker'
import SkillsSection from './skills/SkillsHub'
import Listening from './skills/Listening'
import Speaking from './skills/Speaking'
import Reading from './skills/Reading'
import Writing from './skills/Writing'
import AdminPanel from './skills/AdminPanel'
import ComprehensiveTest from './skills/ComprehensiveTest'
import GrammarLevelPicker from './skills/GrammarLevelPicker'
import { loadContentFromSupabase, setContent as setContentStore } from './skills/contentStore'
import { playCorrect, playWrong, soundEnabled, toggleSound } from './skills/utils'

const QUESTIONS = [...QUESTIONS_BASE, ...QUESTIONS_EXTRA, ...QUESTIONS_TOPIC_EXTRA]

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const supabase = url && key ? createClient(url, key) : null
const read = (k, fb) => { try { return JSON.parse(localStorage.getItem(k)) ?? fb } catch { return fb } }
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v))
const lessonName = id => id === 14 ? 'Kiểm tra tổng hợp' : LESSONS.find(x => x.id === id)?.title || 'Bài tập'

const SUPERADMIN_EMAILS = (import.meta.env.VITE_SUPERADMIN_EMAILS || '')
  .split(',').map(s => s.trim().toLowerCase()).filter(Boolean)

const BTN_VARIANTS = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
  danger:  'bg-red-600 text-white hover:bg-red-700 shadow-sm',
  ghost:   'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50',
  outline: 'border border-blue-600 bg-white text-blue-700 hover:bg-blue-50',
  white:   'bg-white text-blue-700 hover:bg-blue-50 shadow-sm',
  accent:  'bg-rose-500 text-white hover:bg-rose-600 shadow-sm',
  glass:   'border border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur'
}

const Btn = ({ children, className = '', variant = 'primary', ...p }) => (
  <button className={`rounded-xl px-4 py-2.5 font-semibold transition active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-45 ${
    BTN_VARIANTS[variant] || BTN_VARIANTS.primary
  } ${className}`} {...p}>{children}</button>
)

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>
)

const Progress = ({ value, color = 'bg-blue-600' }) => (
  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
    <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
  </div>
)

const Stat = ({ icon, title, value, note }) => (
  <Card className="p-5">
    <div className="flex items-center gap-4">
      <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">{icon}</div>
      <div>
        <div className="text-2xl font-black tabular-nums text-slate-900">{value}</div>
        <div className="font-medium text-slate-600">{title}</div>
        {note && <div className="text-xs text-slate-400">{note}</div>}
      </div>
    </div>
  </Card>
)

const MAIN_ENTRIES = [
  { id: 'grammar',       title: 'Ngữ pháp',      vi: '13 chủ điểm • 3 cấp độ • 500+ câu', icon: <BookOpen />,      gradient: 'from-blue-600 to-indigo-700',   tags: ['Cơ bản', 'Trung cấp', 'Nâng cao'] },
  { id: 'listening',     title: 'Luyện Nghe',    vi: 'Nghe – trả lời & chép chính tả',    icon: <Headphones />,    gradient: 'from-sky-500 to-blue-700',       tags: ['Cấp A1–C2'] },
  { id: 'speaking',      title: 'Luyện Nói',     vi: 'Đọc theo mẫu, chấm phát âm',        icon: <Mic />,           gradient: 'from-rose-500 to-pink-700',      tags: ['Cấp A1–C2'] },
  { id: 'reading',       title: 'Luyện Đọc',     vi: 'Đọc hiểu – trắc nghiệm',            icon: <BookOpenCheck />, gradient: 'from-emerald-500 to-teal-700',   tags: ['Cấp A1–C2'] },
  { id: 'writing',       title: 'Luyện Viết',    vi: 'Viết luận, chấm sơ bộ',             icon: <PenLine />,       gradient: 'from-amber-500 to-orange-700',   tags: ['Cấp A1–C2'] },
  { id: 'comprehensive', title: 'Thi tổng hợp',  vi: 'Kiểm tra toàn diện theo cấp độ',    icon: <Swords />,        gradient: 'from-indigo-600 to-purple-800',  tags: ['Đề trộn', 'Đếm ngược', 'Xếp cấp'] }
]

export default function App() {
  const [view, setView] = useState('home')
  const [lessonId, setLessonId] = useState(1)
  const [grammarLevel, setGrammarLevel] = useState(null)
  const [answers, setAnswers] = useState(() => read('eg-answers', {}))
  const [history, setHistory] = useState(() => read('eg-history', []))
  const [session, setSession] = useState(() => read('eg-session', null))
  const [skillProgress, setSkillProgress] = useState(() => read('eg-skills', {}))
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [authMode, setAuthMode] = useState('login')
  const [notice, setNotice] = useState('')
  const [syncing, setSyncing] = useState(false)
  const [syncStatus, setSyncStatus] = useState('local')
  const [menu, setMenu] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [online, setOnline] = useState(navigator.onLine)
  const [recovery, setRecovery] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [soundOn, setSoundOn] = useState(() => soundEnabled())

  useEffect(() => save('eg-answers', answers), [answers])
  useEffect(() => save('eg-history', history), [history])
  useEffect(() => save('eg-skills', skillProgress), [skillProgress])
  useEffect(() => { session ? save('eg-session', session) : localStorage.removeItem('eg-session') }, [session])

  useEffect(() => {
    const on = () => setOnline(true), off = () => setOnline(false)
    window.addEventListener('online', on); window.addEventListener('offline', off)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off) }
  }, [])

  useEffect(() => {
    try {
      const cached = JSON.parse(localStorage.getItem('eg-content') || 'null')
      if (cached) setContentStore(cached)
    } catch {}
  }, [])

  useEffect(() => {
    if (!supabase) return
    loadContentFromSupabase(supabase)
      .then(data => { if (data) { setContentStore(data); try { localStorage.setItem('eg-content', JSON.stringify(data)) } catch {} } })
      .catch(err => console.warn('[content] load failed:', err.message))
  }, [])

  useEffect(() => {
    if (!supabase) return
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user || null)
      setDisplayName(data.session?.user?.user_metadata?.display_name || '')
    })
    const { data } = supabase.auth.onAuthStateChange((event, ses) => {
      setUser(ses?.user || null)
      setDisplayName(ses?.user?.user_metadata?.display_name || '')
      if (event === 'PASSWORD_RECOVERY') { setRecovery(true); setView('auth') }
    })
    return () => data.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!supabase || !user || !online) return
    setSyncing(true); setSyncStatus('syncing')
    Promise.all([
      supabase.from('learning_progress').select('answers,history,current_session,skill_progress,updated_at').eq('user_id', user.id).maybeSingle(),
      supabase.from('profiles').select('display_name').eq('id', user.id).maybeSingle()
    ]).then(([progress, profile]) => {
      if (progress.error) { setSyncStatus('error') } else {
        const cloud = progress.data || {}
        setAnswers(local => ({ ...cloud.answers, ...local }))
        setHistory(local => mergeHistory(cloud.history || [], local))
        setSession(local => local || cloud.current_session || null)
        setSkillProgress(local => ({ ...(cloud.skill_progress || {}), ...local }))
        setSyncStatus('saved')
      }
      if (profile.data?.display_name) setDisplayName(profile.data.display_name)
    }).finally(() => setSyncing(false))
  }, [user?.id, online])

  useEffect(() => {
    if (!supabase || !user || !online) return
    const t = setTimeout(async () => {
      setSyncing(true); setSyncStatus('syncing')
      const { error } = await supabase.from('learning_progress').upsert({
        user_id: user.id, answers, history, current_session: session,
        skill_progress: skillProgress, updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' })
      setSyncStatus(error ? 'error' : 'saved'); setSyncing(false)
    }, 900)
    return () => clearTimeout(t)
  }, [answers, history, session, skillProgress, user?.id, online])

  const lesson = LESSONS.find(x => x.id === lessonId)
  const sessionQuestions = useMemo(
    () => session?.questionIds?.map(id => QUESTIONS.find(q => q.id === id)).filter(Boolean) || [],
    [session?.questionIds]
  )
  const current = sessionQuestions[session?.index || 0]
  const currentChoice = current ? session?.responses?.[current.id] : undefined
  const done = Object.keys(answers).length
  const correct = Object.entries(answers).filter(([id, v]) => QUESTIONS.find(q => q.id === +id)?.answer === v).length
  const TOTAL_QUESTIONS = QUESTIONS.length

  const go = v => { setView(v); setMenu(false); window.scrollTo(0, 0) }
  const isSuperAdmin = !!(user?.email && SUPERADMIN_EMAILS.includes(user.email.toLowerCase()))

  const startQuiz = (lessonNumber, mode = 'practice', ids = null, level = null) => {
    let pool
    if (ids?.length) {
      pool = ids
    } else if (level) {
      pool = getQuestionsByTopicLevel(QUESTIONS, lessonNumber, level).map(q => q.id)
    } else {
      pool = QUESTIONS.filter(q => q.lesson === lessonNumber).map(q => q.id)
    }
    setSession({ lesson: lessonNumber, mode, level, questionIds: pool, index: 0, responses: {}, checked: {}, startedAt: new Date().toISOString() })
    go('quiz')
  }
  const continueQuiz = () => session && go('quiz')
  const selectChoice = i => {
    if (!current || session.checked?.[current.id] || session.completed) return
    setSession(s => ({ ...s, responses: { ...s.responses, [current.id]: i } }))
  }
  const checkCurrent = () => {
    if (currentChoice === undefined) return
    setSession(s => ({ ...s, checked: { ...s.checked, [current.id]: true } }))
    setAnswers(a => ({ ...a, [current.id]: currentChoice }))
    if (soundOn) { currentChoice === current.answer ? playCorrect() : playWrong() }
  }
  const move = delta => setSession(s => ({ ...s, index: Math.min(s.questionIds.length - 1, Math.max(0, s.index + delta)) }))
  const jump = index => setSession(s => ({ ...s, index }))
  const finishQuiz = () => {
    const responses = session.responses || {}
    Object.entries(responses).forEach(([id, v]) => setAnswers(a => ({ ...a, [id]: v })))
    const qs = sessionQuestions
    const right = qs.filter(q => responses[q.id] === q.answer).length
    const wrongIds = qs.filter(q => responses[q.id] !== q.answer).map(q => q.id)
    const attempt = { id: Date.now(), lesson: session.lesson, mode: session.mode, level: session.level, score: right, total: qs.length, wrongIds, date: new Date().toISOString(), responses }
    setHistory(h => [attempt, ...h].slice(0, 100))
    setSession(s => ({ ...s, completed: true, result: attempt }))
    go('result')
  }
  const quitQuiz = () => { if (confirm('Thoát bài? Tiến độ hiện tại vẫn được lưu.')) go('home') }
  const clearSession = () => { setSession(null); go('home') }

  const markSkill = (skillId, itemId, score = 100) => {
    setSkillProgress(prev => {
      const s = prev[skillId] || { done: 0, items: {}, total: 0 }
      const items = { ...s.items, [itemId]: Math.max(s.items[itemId] || 0, score) }
      return { ...prev, [skillId]: { ...s, items, done: Object.keys(items).length } }
    })
  }

  const auth = async e => {
    e.preventDefault(); setNotice('')
    if (!supabase) { setNotice('Chưa kết nối Supabase.'); return }
    if (authMode === 'signup' && password !== confirmPassword) { setNotice('Hai mật khẩu chưa khớp.'); return }
    setNotice('Đang xử lý...')
    const r = authMode === 'login'
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password, options: { data: { display_name: displayName }, emailRedirectTo: window.location.origin } })
    setNotice(r.error ? translateAuthError(r.error.message) : authMode === 'login' ? 'Đăng nhập thành công.' : 'Đăng ký thành công.')
    if (!r.error && authMode === 'login') go('home')
  }
  const logout = async (scope = 'local') => { await supabase?.auth.signOut({ scope }); setUser(null); setSyncStatus('local'); go('home') }
  const forgotPassword = async () => {
    if (!supabase || !email) { setNotice('Hãy nhập email trước.'); return }
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin })
    setNotice(error ? translateAuthError(error.message) : 'Đã gửi liên kết đặt lại mật khẩu.')
  }
  const updatePassword = async () => {
    if (newPassword.length < 6) { setNotice('Mật khẩu mới cần ít nhất 6 ký tự.'); return }
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    setNotice(error ? translateAuthError(error.message) : 'Đã đổi mật khẩu thành công.')
    if (!error) { setRecovery(false); setNewPassword('') }
  }
  const saveProfile = async () => {
    if (!supabase || !user) return
    setSyncStatus('syncing')
    const [a, b] = await Promise.all([
      supabase.auth.updateUser({ data: { display_name: displayName } }),
      supabase.from('profiles').upsert({ id: user.id, display_name: displayName, updated_at: new Date().toISOString() }, { onConflict: 'id' })
    ])
    setNotice(a.error || b.error ? 'Không thể lưu hồ sơ.' : 'Đã lưu hồ sơ.')
    setSyncStatus(a.error || b.error ? 'error' : 'saved')
  }
  const syncNow = async () => {
    if (!supabase || !user || !online) return
    setSyncing(true); setSyncStatus('syncing')
    const { error } = await supabase.from('learning_progress').upsert({
      user_id: user.id, answers, history, current_session: session,
      skill_progress: skillProgress, updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' })
    setSyncStatus(error ? 'error' : 'saved'); setSyncing(false)
  }

  const handleToggleSound = () => setSoundOn(toggleSound())

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header user={user} displayName={displayName} syncing={syncing} syncStatus={syncStatus}
        online={online} logout={logout} go={go} menu={menu} setMenu={setMenu}
        isSuperAdmin={isSuperAdmin} soundOn={soundOn} onToggleSound={handleToggleSound} />

      <main className="mx-auto max-w-7xl px-4 py-8">
        {view === 'home' && (
          <HomePage done={done} correct={correct} totalQuestions={TOTAL_QUESTIONS} session={session}
            continueQuiz={continueQuiz} startQuiz={startQuiz} go={go}
            history={history} skillProgress={skillProgress} answers={answers} />
        )}

        {view === 'grammar' && (
          grammarLevel ? (
            <GrammarPage level={grammarLevel} onBack={() => setGrammarLevel(null)}
              answers={answers} history={history}
              openLesson={id => { setLessonId(id); go('lesson') }}
              practice={(id, lvl) => startQuiz(id, 'practice', null, lvl)}
              exam={(id, lvl) => startQuiz(id, 'exam', null, lvl)} />
          ) : (
            <GrammarLevelPicker onPick={lvl => setGrammarLevel(lvl)} onBack={() => go('home')} totalQuestions={TOTAL_QUESTIONS} />
          )
        )}

        {view === 'lesson' && lesson && (
          <LessonPage lesson={lesson} go={go}
            practice={() => startQuiz(lesson.id, 'practice')}
            exam={() => startQuiz(lesson.id, 'exam')} />
        )}

        {view === 'quiz' && session && current && (
          <QuizPage session={session} questions={sessionQuestions} current={current} choice={currentChoice}
            selectChoice={selectChoice} checkCurrent={checkCurrent} move={move} jump={jump}
            finish={finishQuiz} quit={quitQuiz} />
        )}

        {view === 'result' && session?.result && (
          <ResultPage attempt={session.result} questions={sessionQuestions}
            startQuiz={startQuiz} clear={clearSession} go={go} />
        )}

        {view === 'progress' && <ProgressPage answers={answers} history={history} startQuiz={startQuiz} go={go} totalQuestions={TOTAL_QUESTIONS} />}

        {view === 'auth' && (
          <AuthPage authMode={authMode} setAuthMode={setAuthMode} email={email} setEmail={setEmail}
            password={password} setPassword={setPassword}
            confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
            displayName={displayName} setDisplayName={setDisplayName}
            notice={notice} auth={auth} forgotPassword={forgotPassword}
            showPassword={showPassword} setShowPassword={setShowPassword}
            recovery={recovery} newPassword={newPassword} setNewPassword={setNewPassword}
            updatePassword={updatePassword} />
        )}

        {view === 'admin' && isSuperAdmin && (
          <AdminPanel user={user} supabase={supabase} onBack={() => go('home')} />
        )}

        {view === 'profile' && user && (
          <ProfilePage user={user} displayName={displayName} setDisplayName={setDisplayName}
            notice={notice} saveProfile={saveProfile} syncStatus={syncStatus}
            online={online} syncNow={syncNow} logout={logout} />
        )}

        {view === 'listening' && <Listening onBack={() => go('home')} onComplete={(id, s) => markSkill('listening', id, s)} />}
        {view === 'speaking'  && <Speaking  onBack={() => go('home')} onComplete={(id, s) => markSkill('speaking',  id, s)} />}
        {view === 'reading'   && <Reading   onBack={() => go('home')} onComplete={(id, s) => markSkill('reading',   id, s)} />}
        {view === 'writing'   && <Writing   onBack={() => go('home')} onComplete={(id, s) => markSkill('writing',   id, s)} />}

        {view === 'comprehensive' && (
          <ComprehensiveTest onBack={() => go('home')}
            onComplete={(id, score) => markSkill('comprehensive', id, score)} />
        )}
      </main>
    </div>
  )
}

// ============================================================
// Header
// ============================================================
function Header({ user, displayName, syncing, syncStatus, online, logout, go, menu, setMenu, isSuperAdmin, soundOn, onToggleSound }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpenDropdown(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const closeAll = () => setOpenDropdown(null)
  const goAndClose = (v) => { setOpenDropdown(null); setMenu(false); go(v) }
  const toggle = (key) => setOpenDropdown(cur => cur === key ? null : key)

  const syncLabel = !online ? 'Ngoại tuyến'
    : syncing || syncStatus === 'syncing' ? 'Đang đồng bộ'
    : syncStatus === 'error' ? 'Lỗi đồng bộ'
    : syncStatus === 'saved' ? 'Đã lưu' : 'Lưu cục bộ'

  const LEARN_ITEMS = [
    { id: 'grammar',   label: 'Ngữ pháp',  icon: <BookOpen />,      desc: '13 chủ điểm · 3 cấp độ' },
    { id: 'listening', label: 'Luyện Nghe', icon: <Headphones />,    desc: 'Nghe & chép chính tả' },
    { id: 'speaking',  label: 'Luyện Nói',  icon: <Mic />,           desc: 'Đọc mẫu, chấm phát âm' },
    { id: 'reading',   label: 'Luyện Đọc',  icon: <BookOpenCheck />, desc: 'Đọc hiểu theo cấp độ' },
    { id: 'writing',   label: 'Luyện Viết', icon: <PenLine />,       desc: 'Viết luận & chấm sơ bộ' }
  ]
  const TEST_ITEMS = [
    { id: 'comprehensive', label: 'Thi tổng hợp', icon: <Swords />,    desc: 'Kỳ thi trộn, đếm ngược, xếp cấp' },
    { id: 'progress',      label: 'Kết quả',      icon: <BarChart3 />, desc: 'Tiến độ & lịch sử làm bài' }
  ]

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <button onClick={() => goAndClose('home')} className="flex shrink-0 items-center gap-2 font-black tracking-tight">
          <span className="rounded-xl bg-blue-600 p-2 text-white shadow-sm"><GraduationCap size={18} /></span>
          <span className="hidden text-lg sm:inline">Nam English</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavButton onClick={() => goAndClose('home')} icon={<Home />}>Trang chủ</NavButton>

          <DropdownMenu label="Học tập" icon={<BookOpen />} open={openDropdown === 'learn'} onToggle={() => toggle('learn')}>
            {LEARN_ITEMS.map(item => (
              <DropdownItem key={item.id} icon={item.icon} label={item.label} desc={item.desc} onClick={() => goAndClose(item.id)} />
            ))}
          </DropdownMenu>

          <DropdownMenu label="Kiểm tra" icon={<Swords />} open={openDropdown === 'test'} onToggle={() => toggle('test')}>
            {TEST_ITEMS.map(item => (
              <DropdownItem key={item.id} icon={item.icon} label={item.label} desc={item.desc} onClick={() => goAndClose(item.id)} />
            ))}
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2">
          {user && (
            <span className={`hidden items-center gap-1 text-xs xl:flex ${syncStatus === 'error' ? 'text-red-600' : 'text-slate-400'}`}>
              {online ? <Cloud className="h-4 w-4" /> : <CloudOff className="h-4 w-4" />}{syncLabel}
            </span>
          )}

          {user ? (
            <div className="relative">
              <button
                onClick={() => toggle('user')}
                className="flex max-w-[180px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                  {(displayName || user.email || '?')[0].toUpperCase()}
                </span>
                <span className="hidden truncate sm:inline">{displayName || user.email}</span>
                <ChevronDown className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition ${openDropdown === 'user' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'user' && (
                <div className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                  <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Tài khoản</div>
                    <div className="mt-1 truncate text-sm font-bold text-slate-900">{displayName || 'Người dùng'}</div>
                    <div className="truncate text-xs text-slate-500">{user.email}</div>
                  </div>

                  <div className="p-1.5">
                    <UserMenuItem icon={<User />} label="Hồ sơ cá nhân" onClick={() => goAndClose('profile')} />
                    <UserMenuItem icon={<BarChart3 />} label="Kết quả học tập" onClick={() => goAndClose('progress')} />
                    {isSuperAdmin && (
                      <UserMenuItem icon={<ShieldCheck />} label="Trang quản trị" danger onClick={() => goAndClose('admin')} />
                    )}
                  </div>

                  <div className="border-t border-slate-100">
                    <div className="px-4 pb-1 pt-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Cài đặt
                    </div>
                    <div className="p-1.5 pt-0">
                      <button
                        onClick={onToggleSound}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition hover:bg-slate-100"
                      >
                        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${soundOn ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                          {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                        </span>
                        <span className="flex-1 text-sm font-medium text-slate-700">Âm thanh</span>
                        <span className={`relative h-5 w-9 shrink-0 rounded-full transition ${soundOn ? 'bg-blue-600' : 'bg-slate-300'}`}>
                          <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${soundOn ? 'left-4' : 'left-0.5'}`} />
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 p-1.5">
                    <UserMenuItem
                      icon={<LogOut className="rotate-180" />}
                      label="Đăng xuất"
                      danger
                      onClick={() => { closeAll(); logout('local') }}
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="relative">
                <button
                  onClick={() => toggle('settings')}
                  title="Cài đặt"
                  className={`rounded-xl p-2 transition ${
                    openDropdown === 'settings'
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                  }`}
                >
                  <Settings className={`h-4 w-4 transition ${openDropdown === 'settings' ? 'rotate-90' : ''}`} />
                </button>

                {openDropdown === 'settings' && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                    <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Cài đặt</div>
                    </div>
                    <div className="p-1.5">
                      <button
                        onClick={onToggleSound}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition hover:bg-slate-100"
                      >
                        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${soundOn ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                          {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                        </span>
                        <span className="flex-1 text-sm font-medium text-slate-700">Âm thanh</span>
                        <span className={`relative h-5 w-9 shrink-0 rounded-full transition ${soundOn ? 'bg-blue-600' : 'bg-slate-300'}`}>
                          <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${soundOn ? 'left-4' : 'left-0.5'}`} />
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <Btn onClick={() => goAndClose('auth')}>
                <LogIn className="mr-2 inline h-4 w-4" />
                <span className="hidden sm:inline">Đăng nhập</span>
              </Btn>
            </>
          )}

          <button className="rounded-lg p-2 lg:hidden" onClick={() => setMenu(!menu)} aria-label="Mở menu">
            <Menu />
          </button>
        </div>
      </div>

      {menu && (
        <MobileMenu
          go={goAndClose}
          user={user}
          displayName={displayName}
          isSuperAdmin={isSuperAdmin}
          logout={logout}
          soundOn={soundOn}
          onToggleSound={onToggleSound}
        />
      )}
    </header>
  )
}

function NavButton({ icon, children, ...p }) {
  return (
    <button className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900" {...p}>
      <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>{children}
    </button>
  )
}

function DropdownMenu({ label, icon, open, onToggle, children }) {
  return (
    <div className="relative">
      <button onClick={onToggle}
        className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition ${
          open ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`}>
        <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="p-1.5">{children}</div>
        </div>
      )}
    </div>
  )
}

function DropdownItem({ icon, label, desc, onClick }) {
  return (
    <button onClick={onClick} className="group flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-blue-50">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-blue-100 group-hover:text-blue-700 [&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">{label}</div>
        {desc && <div className="mt-0.5 text-xs text-slate-500">{desc}</div>}
      </div>
    </button>
  )
}

function UserMenuItem({ icon, label, onClick, danger = false }) {
  return (
    <button onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
        danger ? 'text-red-600 hover:bg-red-50' : 'text-slate-700 hover:bg-slate-100'
      }`}>
      <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>{label}
    </button>
  )
}

function MobileMenu({ go, user, displayName, isSuperAdmin, logout, soundOn, onToggleSound }) {
  return (
    <div className="border-t border-slate-200 bg-white p-3 lg:hidden">
      <MobileMenuGroup label="Chung" />
      <MobileMenuItem icon={<Home />} label="Trang chủ" onClick={() => go('home')} />

      <MobileMenuGroup label="Học tập" />
      <MobileMenuItem icon={<BookOpen />} label="Ngữ pháp" onClick={() => go('grammar')} />
      <MobileMenuItem icon={<Headphones />} label="Luyện Nghe" onClick={() => go('listening')} />
      <MobileMenuItem icon={<Mic />} label="Luyện Nói" onClick={() => go('speaking')} />
      <MobileMenuItem icon={<BookOpenCheck />} label="Luyện Đọc" onClick={() => go('reading')} />
      <MobileMenuItem icon={<PenLine />} label="Luyện Viết" onClick={() => go('writing')} />

      <MobileMenuGroup label="Kiểm tra" />
      <MobileMenuItem icon={<Swords />} label="Thi tổng hợp" onClick={() => go('comprehensive')} />
      <MobileMenuItem icon={<BarChart3 />} label="Kết quả" onClick={() => go('progress')} />

      <MobileMenuGroup label="Cài đặt" />
      <button
        onClick={onToggleSound}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
      >
        <span className="[&>svg]:h-4 [&>svg]:w-4">
          {soundOn ? <Volume2 /> : <VolumeX />}
        </span>
        <span className="flex-1">Âm thanh</span>
        <span className={`relative h-5 w-9 rounded-full transition ${soundOn ? 'bg-blue-600' : 'bg-slate-300'}`}>
          <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${soundOn ? 'left-4' : 'left-0.5'}`} />
        </span>
      </button>

      {user ? (
        <>
          <MobileMenuGroup label="Tài khoản" />
          <MobileMenuItem icon={<User />} label={displayName || 'Hồ sơ'} onClick={() => go('profile')} />
          {isSuperAdmin && <MobileMenuItem icon={<ShieldCheck />} label="Trang quản trị" onClick={() => go('admin')} danger />}
          <MobileMenuItem icon={<LogOut className="rotate-180" />} label="Đăng xuất" onClick={() => logout('local')} danger />
        </>
      ) : (
        <>
          <MobileMenuGroup label="Tài khoản" />
          <MobileMenuItem icon={<LogIn />} label="Đăng nhập" onClick={() => go('auth')} />
        </>
      )}
    </div>
  )
}

function MobileMenuGroup({ label }) {
  return <div className="px-3 pb-1 pt-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</div>
}

function MobileMenuItem({ icon, label, onClick, danger = false }) {
  return (
    <button onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
        danger ? 'text-red-600 hover:bg-red-50' : 'text-slate-700 hover:bg-slate-100'
      }`}>
      <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>{label}
    </button>
  )
}

// ============================================================
// Home
// ============================================================
function HomePage({ done, correct, totalQuestions, session, continueQuiz, startQuiz, go, history, skillProgress, answers }) {
  const last = history[0]
  const grammarDone = Object.keys(answers).length
  const grammarPct = totalQuestions ? Math.round((grammarDone / totalQuestions) * 100) : 0

  const progressItems = [
    { id: 'grammar', label: 'Ngữ pháp', icon: <BookOpen className="h-4 w-4" />, color: 'bg-blue-500',
      done: grammarDone, total: totalQuestions, pct: grammarPct },
    ...['listening', 'speaking', 'reading', 'writing'].map(id => {
      const p = skillProgress[id] || { total: 0, done: 0 }
      const pct = p.total ? Math.round((p.done / p.total) * 100) : 0
      const meta = {
        listening: { label: 'Luyện Nghe', icon: <Headphones className="h-4 w-4" />, color: 'bg-sky-500' },
        speaking:  { label: 'Luyện Nói',  icon: <Mic className="h-4 w-4" />,        color: 'bg-rose-500' },
        reading:   { label: 'Luyện Đọc',  icon: <BookOpenCheck className="h-4 w-4" />, color: 'bg-emerald-500' },
        writing:   { label: 'Luyện Viết', icon: <PenLine className="h-4 w-4" />,     color: 'bg-amber-500' }
      }[id]
      return { id, ...meta, done: p.done, total: p.total, pct }
    }),
    (() => {
      const p = skillProgress.comprehensive || { total: 0, done: 0 }
      return { id: 'comprehensive', label: 'Thi tổng hợp', icon: <Swords className="h-4 w-4" />, color: 'bg-indigo-500',
        done: p.done, total: p.total, pct: p.total ? Math.round((p.done / p.total) * 100) : 0 }
    })()
  ]

  return (
    <div className="space-y-8">
      <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-900 p-8 text-white shadow-xl md:grid-cols-2 md:p-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Học rõ.<br />Luyện thật.<br />Nhớ lâu.
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn variant="white" onClick={() => go('comprehensive')}>
              <Swords className="mr-2 inline h-4 w-4" />Thi tổng hợp
            </Btn>
            <Btn variant="glass" onClick={() => go('progress')}>Xem tiến độ</Btn>
          </div>
        </div>

        <Card className="border-0 bg-white/10 p-6 text-white backdrop-blur">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-wider text-white/70">Tiến độ học tập</span>
            <span className="text-xs text-white/60">{grammarDone}/{totalQuestions} câu ngữ pháp</span>
          </div>

          <div className="mt-5 space-y-3.5">
            {progressItems.map(item => (
              <button key={item.id} onClick={() => go(item.id)} className="group w-full text-left transition">
                <div className="flex items-center gap-3">
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${item.color} text-white shadow-sm`}>
                    {item.icon}
                  </span>
                  <span className="flex-1 text-sm font-medium">{item.label}</span>
                  <span className="text-xs font-bold tabular-nums text-white/85">{item.done}/{item.total || '—'}</span>
                  <span className="w-10 text-right text-xs font-bold tabular-nums text-white/70">{item.pct}%</span>
                </div>
                <div className="ml-10 mt-1 h-1.5 overflow-hidden rounded-full bg-white/15">
                  <div className={`h-full rounded-full ${item.color} transition-all duration-500`}
                    style={{ width: `${Math.min(100, item.pct)}%` }} />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/15 pt-5 text-center">
            <div>
              <div className="text-2xl font-black tabular-nums">{correct}</div>
              <div className="text-xs text-white/70">Câu đúng</div>
            </div>
            <div>
              <div className="text-2xl font-black tabular-nums">{grammarDone ? Math.round((correct / grammarDone) * 100) : 0}%</div>
              <div className="text-xs text-white/70">Chính xác</div>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-black md:text-3xl">Chọn nội dung học tập</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MAIN_ENTRIES.map(entry => {
            let percentText = '', progress = 0
            if (entry.id === 'grammar') {
              const doneCount = Object.keys(answers).length
              progress = totalQuestions ? (doneCount / totalQuestions) * 100 : 0
              percentText = `${doneCount}/${totalQuestions} câu`
            } else if (entry.id === 'comprehensive') {
              const p = skillProgress.comprehensive || { total: 0, done: 0 }
              progress = p.total ? (p.done / p.total) * 100 : 0
              percentText = p.done ? `${p.done} bài` : 'Chưa thi'
            } else {
              const p = skillProgress[entry.id] || { total: 0, done: 0 }
              progress = p.total ? (p.done / p.total) * 100 : 0
              percentText = `${p.done}/${p.total} bài`
            }
            return (
              <button key={entry.id} onClick={() => go(entry.id)}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${entry.gradient} p-6 text-left text-white shadow-lg transition hover:scale-[1.02] hover:shadow-2xl active:scale-[.99]`}>
                <div className="flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur">
                    <span className="[&>svg]:h-7 [&>svg]:w-7">{entry.icon}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 opacity-70 transition group-hover:translate-x-1" />
                </div>
                <h3 className="mt-5 text-2xl font-black">{entry.title}</h3>
                <p className="mt-1 text-sm text-white/85">{entry.vi}</p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                  {entry.tags.map(t => (
                    <span key={t} className="rounded-full bg-white/15 px-2 py-0.5 backdrop-blur">{t}</span>
                  ))}
                </div>
                <div className="mt-5">
                  <div className="mb-1 flex justify-between text-xs text-white/85">
                    <span>Tiến độ</span><span className="tabular-nums">{percentText}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full rounded-full bg-white/85 transition-all" style={{ width: `${Math.min(100, progress)}%` }} />
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {session && !session.completed && (
        <Card className="border-blue-200 bg-blue-50 p-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="font-bold text-blue-900">Tiếp tục bài đang làm</div>
              <p className="text-sm text-blue-700">
                {lessonName(session.lesson)} • Câu {session.index + 1}/{session.questionIds.length} •{' '}
                {Object.keys(session.responses || {}).length} câu đã trả lời
              </p>
            </div>
            <Btn onClick={continueQuiz}>Tiếp tục<ArrowRight className="ml-2 inline h-4 w-4" /></Btn>
          </div>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        <Stat icon={<ListChecks />} title="Câu đã làm" value={`${done}/${totalQuestions}`} />
        <Stat icon={<CheckCircle2 />} title="Đáp án đúng" value={correct} />
        <Stat icon={<History />} title="Lượt gần nhất"
          value={last ? `${last.score}/${last.total}` : 'Chưa có'} note={last && lessonName(last.lesson)} />
      </div>
    </div>
  )
}

// ============================================================
// Grammar by level
// ============================================================
function GrammarPage({ level, onBack, answers, history, openLesson, practice, exam }) {
  const meta = GRAMMAR_LEVELS.find(l => l.id === level) || GRAMMAR_LEVELS[0]
  const counts = countQuestionsByTopicLevel(QUESTIONS)

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" /> Chọn cấp độ khác
      </button>

      <header className={`rounded-3xl bg-gradient-to-br ${meta.color} p-8 text-white shadow-lg md:p-10`}>
        <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-medium">Cấp độ: {meta.title}</span>
        <h1 className="mt-4 text-3xl font-black md:text-4xl">Ngữ pháp – {meta.title}</h1>
        <p className="mt-3 max-w-2xl text-white/90">{meta.desc}</p>
        <div className="mt-4 flex gap-2 text-sm">
          <span className="rounded-full bg-white/15 px-3 py-1">13 chủ điểm</span>
          <span className="rounded-full bg-white/15 px-3 py-1">
            {Object.values(counts).reduce((s, c) => s + (c[level] || 0), 0)} câu hỏi
          </span>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {LESSONS.map(l => {
          const topicQs = getQuestionsByTopicLevel(QUESTIONS, l.id, level)
          const n = topicQs.filter(q => answers[q.id] !== undefined).length
          const best = history
            .filter(h => h.lesson === l.id)
            .sort((a, b) => b.score / b.total - a.score / a.total)[0]
          return (
            <Card key={l.id} className="p-5 transition hover:shadow-md">
              <div className="flex justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-100 font-black text-blue-700 tabular-nums">{l.id}</div>
                {best && (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 tabular-nums">
                    Cao nhất {best.score}/{best.total}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold">{l.title}</h3>
              <p className="mt-1 min-h-10 text-sm text-slate-500">{l.short}</p>
              <div className="mt-3">
                <div className="mb-1 flex justify-between text-xs text-slate-400 tabular-nums">
                  <span>Đã làm</span><span>{n}/{topicQs.length}</span>
                </div>
                <Progress value={topicQs.length ? (n / topicQs.length) * 100 : 0} />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <Btn variant="ghost" className="px-2" onClick={() => openLesson(l.id)}>Học</Btn>
                <Btn className="px-2" onClick={() => practice(l.id, level)} disabled={topicQs.length === 0}>Luyện</Btn>
                <Btn variant="ghost" className="px-2" onClick={() => exam(l.id, level)} disabled={topicQs.length === 0}>Kiểm tra</Btn>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

// ============================================================
// Lesson page
// ============================================================
function LessonPage({ lesson, go, practice, exam }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 p-7 text-white shadow-lg">
        <div className="text-white/80">Bài {lesson.id}/13</div>
        <h1 className="mt-2 text-3xl font-black">{lesson.title}</h1>
        <p className="mt-2 text-blue-100">{lesson.short}</p>
        {lesson.objectives && (
          <div className="mt-5 rounded-2xl bg-white/10 p-4 backdrop-blur">
            <div className="text-xs font-bold uppercase tracking-wider text-white/70">Mục tiêu bài học</div>
            <ul className="mt-2 space-y-1 text-sm">
              {lesson.objectives.map((o, i) => (
                <li key={i} className="flex gap-2"><span className="text-emerald-300">✓</span><span>{o}</span></li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6 space-y-4">
        {lesson.sections.map((s, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-100 font-bold text-blue-700 tabular-nums">{i + 1}</span>
              <div className="min-w-0">
                <h2 className="text-xl font-bold">{s.heading}</h2>
                <p className="mt-2 leading-7 text-slate-700">{s.text}</p>
                {s.formula && <div className="mt-4 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 font-mono font-bold text-amber-950">{s.formula}</div>}
                {s.example && <div className="mt-3 rounded-xl bg-blue-50 p-4 text-blue-900"><strong>Ví dụ: </strong>{s.example}</div>}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {lesson.vocabulary?.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-black">
            <span className="rounded-xl bg-emerald-100 p-2 text-emerald-700">📚</span>Từ vựng chủ đề
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {lesson.vocabulary.map((v, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <strong className="text-lg text-emerald-700">{v.word}</strong>
                  <span className="text-xs font-mono text-slate-400">{v.ipa}</span>
                </div>
                <div className="mt-1 text-sm font-medium text-slate-700">{v.meaning}</div>
                <div className="mt-2 text-sm italic text-slate-500">“{v.example}”</div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {lesson.commonMistakes?.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-black">
            <span className="rounded-xl bg-red-100 p-2 text-red-700">⚠️</span>Lỗi người Việt hay mắc
          </h2>
          <div className="space-y-3">
            {lesson.commonMistakes.map((m, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="grid sm:grid-cols-2">
                  <div className="border-b border-red-100 bg-red-50 p-4 sm:border-b-0 sm:border-r">
                    <div className="text-xs font-bold uppercase tracking-wider text-red-600">❌ Sai</div>
                    <div className="mt-1 font-medium text-red-900 line-through">{m.wrong}</div>
                  </div>
                  <div className="bg-emerald-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">✓ Đúng</div>
                    <div className="mt-1 font-medium text-emerald-900">{m.right}</div>
                  </div>
                </div>
                <div className="border-t border-slate-100 bg-white p-3 text-sm text-slate-600"><strong>Vì sao:</strong> {m.why}</div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {lesson.tips?.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-black">
            <span className="rounded-xl bg-amber-100 p-2 text-amber-700">💡</span>Mẹo ghi nhớ
          </h2>
          <Card className="p-5">
            <ul className="space-y-3">
              {lesson.tips.map((t, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">{i + 1}</span>
                  <span className="leading-7">{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      )}

      {lesson.realLife?.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-black">
            <span className="rounded-xl bg-blue-100 p-2 text-blue-700">🌱</span>Ứng dụng thực tế
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {lesson.realLife.map((r, i) => (
              <Card key={i} className="border-l-4 border-l-blue-500 p-4">
                <div className="text-sm text-slate-700">{r}</div>
              </Card>
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 flex flex-wrap justify-between gap-3">
        <Btn variant="ghost" onClick={() => go('grammar')}>← Danh sách bài</Btn>
        <div className="flex gap-2">
          <Btn variant="ghost" onClick={exam}>Kiểm tra</Btn>
          <Btn onClick={practice}>Luyện tập có giải thích</Btn>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// Quiz
// ============================================================
function QuizPage({ session, questions, current, choice, selectChoice, checkCurrent, move, jump, finish, quit }) {
  const isPractice = session.mode === 'practice'
  const answered = Object.keys(session.responses || {}).length
  const checked = session.checked?.[current.id]

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm text-slate-500">
            {lessonName(session.lesson)} • {isPractice ? 'Luyện tập' : 'Kiểm tra'}
            {session.level && <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold">{session.level}</span>}
          </div>
          <h1 className="text-2xl font-black tabular-nums">Câu {session.index + 1}/{questions.length}</h1>
        </div>
        <Btn variant="ghost" onClick={quit}><X className="mr-2 inline h-4 w-4" />Thoát</Btn>
      </div>
      <Progress value={((session.index + 1) / questions.length) * 100} />
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_270px]">
        <Card className="p-6 md:p-7">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">{current.type}</span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{current.level}</span>
          </div>
          <h2 className="text-xl font-semibold leading-8">{current.q}</h2>
          <div className="mt-6 space-y-3">
            {current.choices.map((x, i) => {
              const right = i === current.answer
              const chosen = i === choice
              return (
                <button disabled={isPractice && checked} key={i} onClick={() => selectChoice(i)}
                  className={`flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition ${
                    isPractice && checked && right ? 'border-emerald-500 bg-emerald-50'
                    : isPractice && checked && chosen && !right ? 'border-red-500 bg-red-50'
                    : chosen ? 'border-blue-600 bg-blue-50'
                    : 'border-slate-200 hover:border-blue-300'
                  }`}>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border font-semibold">{String.fromCharCode(65 + i)}</span>
                  <span>{x}</span>
                  {isPractice && checked && right && <CheckCircle2 className="ml-auto text-emerald-600" />}
                  {isPractice && checked && chosen && !right && <XCircle className="ml-auto text-red-600" />}
                </button>
              )
            })}
          </div>
          {isPractice && checked && (
            <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-amber-950">
              <strong>{choice === current.answer ? 'Chính xác.' : 'Chưa đúng.'}</strong> {current.explain}
            </div>
          )}
          <div className="mt-7 flex flex-wrap justify-between gap-2">
            <Btn variant="ghost" disabled={session.index === 0} onClick={() => move(-1)}>
              <ArrowLeft className="mr-2 inline h-4 w-4" />Câu trước
            </Btn>
            <div className="flex gap-2">
              {isPractice && !checked && <Btn disabled={choice === undefined} onClick={checkCurrent}>Kiểm tra</Btn>}
              {session.index < questions.length - 1
                ? <Btn disabled={isPractice && !checked} onClick={() => move(1)}>Câu sau<ArrowRight className="ml-2 inline h-4 w-4" /></Btn>
                : <Btn disabled={answered === 0} onClick={finish}>Nộp bài</Btn>}
            </div>
          </div>
        </Card>
        <QuestionNavigator questions={questions} session={session} jump={jump} finish={finish} />
      </div>
    </div>
  )
}

function QuestionNavigator({ questions, session, jump, finish }) {
  return (
    <Card className="h-fit p-4 lg:sticky lg:top-24">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Danh sách câu</h3>
        <span className="text-sm text-slate-500 tabular-nums">{Object.keys(session.responses || {}).length}/{questions.length}</span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {questions.map((q, i) => {
          const response = session.responses?.[q.id]
          const checked = session.checked?.[q.id]
          const right = checked && response === q.answer
          const wrong = checked && response !== q.answer
          return (
            <button title={`Câu ${i + 1}`} onClick={() => jump(i)} key={q.id}
              className={`h-9 rounded-lg text-sm font-bold tabular-nums transition ${
                i === session.index ? 'ring-2 ring-blue-600 ring-offset-2'
                : right ? 'bg-emerald-500 text-white'
                : wrong ? 'bg-red-500 text-white'
                : response !== undefined ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}>{i + 1}</button>
          )
        })}
      </div>
      <div className="mt-4 space-y-1 text-xs text-slate-500">
        <div><span className="mr-2 inline-block h-3 w-3 rounded bg-blue-600" />Đã trả lời</div>
        {session.mode === 'practice' && <>
          <div><span className="mr-2 inline-block h-3 w-3 rounded bg-emerald-500" />Đúng</div>
          <div><span className="mr-2 inline-block h-3 w-3 rounded bg-red-500" />Sai</div>
        </>}
      </div>
      {session.mode === 'exam' && (
        <Btn className="mt-5 w-full" disabled={!Object.keys(session.responses || {}).length} onClick={finish}>Nộp bài</Btn>
      )}
    </Card>
  )
}

// ============================================================
// Result
// ============================================================
function ResultPage({ attempt, questions, startQuiz, clear, go }) {
  const wrong = questions.filter(q => attempt.wrongIds.includes(q.id))
  const percent = Math.round((attempt.score / attempt.total) * 100)
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-amber-100 text-amber-600"><Trophy size={48} /></div>
        <h1 className="mt-5 text-4xl font-black">
          {percent >= 80 ? 'Hoàn thành tốt!' : percent >= 50 ? 'Bạn đã hoàn thành' : 'Hãy ôn lại thêm'}
        </h1>
        <p className="mt-2 text-slate-500">{lessonName(attempt.lesson)}{attempt.level ? ` • ${attempt.level}` : ''}</p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        <Stat icon={<Target />} title="Điểm" value={`${attempt.score}/${attempt.total}`} />
        <Stat icon={<BarChart3 />} title="Chính xác" value={`${percent}%`} />
        <Stat icon={<XCircle />} title="Câu cần ôn" value={wrong.length} />
      </div>
      {wrong.length > 0 && (
        <Card className="mt-6 p-6">
          <h2 className="text-xl font-bold">Câu trả lời sai</h2>
          <div className="mt-4 space-y-4">
            {wrong.map((q, i) => (
              <div key={q.id} className="rounded-xl border border-red-100 bg-red-50 p-4">
                <div className="font-semibold">{i + 1}. {q.q}</div>
                <div className="mt-2 text-sm text-red-700">Đáp án đúng: {q.choices[q.answer]}</div>
                <div className="mt-1 text-sm text-slate-600">{q.explain}</div>
              </div>
            ))}
          </div>
        </Card>
      )}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {wrong.length > 0 && (
          <Btn variant="danger" onClick={() => startQuiz(attempt.lesson, 'practice', wrong.map(q => q.id))}>
            <RotateCcw className="mr-2 inline h-4 w-4" />Làm lại câu sai
          </Btn>
        )}
        <Btn variant="ghost" onClick={() => startQuiz(attempt.lesson, attempt.mode, null, attempt.level)}>Làm lại toàn bài</Btn>
        <Btn onClick={() => { clear(); go('progress') }}>Xem tiến độ</Btn>
      </div>
    </div>
  )
}

// ============================================================
// Progress
// ============================================================
function ProgressPage({ answers, history, startQuiz, totalQuestions }) {
  const done = Object.keys(answers).length
  const correct = Object.entries(answers).filter(([id, v]) => QUESTIONS.find(q => q.id === +id)?.answer === v).length
  const wrongIds = Object.entries(answers).filter(([id, v]) => QUESTIONS.find(q => q.id === +id)?.answer !== v).map(([id]) => +id)

  const levelStats = {}
  GRAMMAR_LEVELS.forEach(l => {
    const qs = QUESTIONS.filter(q => mapLegacyLevel(q.level) === l.id)
    const doneCount = qs.filter(q => answers[q.id] !== undefined).length
    const correctCount = qs.filter(q => answers[q.id] === q.answer).length
    levelStats[l.id] = { total: qs.length, done: doneCount, correct: correctCount }
  })

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black">Kết quả học tập</h1>
          <p className="mt-2 text-slate-500">Theo dõi điểm cao nhất, lần gần nhất và những câu cần ôn.</p>
        </div>
        {wrongIds.length > 0 && (
          <Btn variant="danger" onClick={() => startQuiz(0, 'practice', wrongIds)}>
            <RotateCcw className="mr-2 inline h-4 w-4" />Luyện {wrongIds.length} câu sai
          </Btn>
        )}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Stat icon={<ListChecks />} title="Đã làm" value={`${done}/${totalQuestions}`} />
        <Stat icon={<CheckCircle2 />} title="Câu đúng" value={correct} />
        <Stat icon={<Target />} title="Độ chính xác" value={`${done ? Math.round(correct / done * 100) : 0}%`} />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {GRAMMAR_LEVELS.map(level => {
          const s = levelStats[level.id] || { total: 0, done: 0, correct: 0 }
          const pct = s.done ? Math.round((s.correct / s.done) * 100) : 0
          return (
            <Card key={level.id} className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">{level.title}</h3>
                <span className="text-xs font-bold tabular-nums text-slate-500">{s.done}/{s.total}</span>
              </div>
              <Progress value={s.total ? (s.done / s.total) * 100 : 0} />
              <p className="mt-2 text-sm text-slate-500">Đúng {s.correct} · {pct}%</p>
            </Card>
          )
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card className="p-6">
          <h2 className="text-xl font-bold">Theo từng bài (13 chủ điểm)</h2>
          <div className="mt-5 space-y-5">
            {LESSONS.map(l => {
              const qs = QUESTIONS.filter(q => q.lesson === l.id)
              const n = qs.filter(q => answers[q.id] !== undefined).length
              const attempts = history.filter(h => h.lesson === l.id)
              const last = attempts[0]
              const best = [...attempts].sort((a, b) => b.score / b.total - a.score / a.total)[0]
              return (
                <div key={l.id}>
                  <div className="mb-2 flex flex-wrap justify-between gap-2 text-sm">
                    <span className="font-medium">Bài {l.id}: {l.title}</span>
                    <span className="text-slate-500 tabular-nums">
                      Đã làm {n}/{qs.length}
                      {best ? ` • Cao nhất ${best.score}/${best.total}` : ''}
                      {last ? ` • Gần nhất ${last.score}/${last.total}` : ''}
                    </span>
                  </div>
                  <Progress value={qs.length ? (n / qs.length) * 100 : 0} />
                </div>
              )
            })}
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold">Lịch sử gần đây</h2>
          <div className="mt-4 space-y-3">
            {history.length ? history.slice(0, 10).map(h => (
              <div key={h.id} className="rounded-xl bg-slate-50 p-3">
                <div className="flex justify-between">
                  <strong>{lessonName(h.lesson)}</strong>
                  <span className="font-bold text-blue-700 tabular-nums">{h.score}/{h.total}</span>
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  {new Date(h.date).toLocaleString('vi-VN')} • {h.mode === 'practice' ? 'Luyện tập' : 'Kiểm tra'}{h.level ? ` • ${h.level}` : ''}
                </div>
              </div>
            )) : <p className="text-slate-500">Chưa có lượt làm nào.</p>}
          </div>
        </Card>
      </div>
    </div>
  )
}

// ============================================================
// Auth
// ============================================================
function AuthPage({
  authMode, setAuthMode, email, setEmail, password, setPassword,
  confirmPassword, setConfirmPassword, displayName, setDisplayName,
  notice, auth, forgotPassword, showPassword, setShowPassword,
  recovery, newPassword, setNewPassword, updatePassword
}) {
  if (recovery) return (
    <div className="mx-auto max-w-md py-10">
      <Card className="p-6">
        <div className="flex items-center gap-3"><KeyRound className="text-blue-600" /><h1 className="text-2xl font-black">Đặt mật khẩu mới</h1></div>
        <div className="relative mt-5">
          <input className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:border-blue-500"
            type={showPassword ? 'text' : 'password'} minLength="6" placeholder="Mật khẩu mới"
            value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          <button className="absolute right-3 top-3 text-slate-400" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <Btn className="mt-4 w-full" onClick={updatePassword}>Cập nhật mật khẩu</Btn>
        {notice && <p className="mt-4 rounded-xl bg-blue-50 p-3 text-sm text-blue-800">{notice}</p>}
      </Card>
    </div>
  )

  return (
    <div className="mx-auto max-w-md py-10">
      <Card className="p-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-blue-600" />
          <h1 className="text-2xl font-black">{authMode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}</h1>
        </div>
        <form onSubmit={auth} className="mt-5 space-y-4">
          {authMode === 'signup' && (
            <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              required placeholder="Tên hiển thị" value={displayName} onChange={e => setDisplayName(e.target.value)} />
          )}
          <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <div className="relative">
            <input className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:border-blue-500"
              type={showPassword ? 'text' : 'password'} minLength="6" required placeholder="Mật khẩu"
              value={password} onChange={e => setPassword(e.target.value)} />
            <button type="button" className="absolute right-3 top-3 text-slate-400" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {authMode === 'signup' && (
            <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              type={showPassword ? 'text' : 'password'} minLength="6" required placeholder="Nhập lại mật khẩu"
              value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          )}
          <Btn className="w-full" type="submit">
            {authMode === 'login'
              ? <><LogIn className="mr-2 inline h-4 w-4" />Đăng nhập</>
              : <><UserPlus className="mr-2 inline h-4 w-4" />Đăng ký</>}
          </Btn>
        </form>
        {authMode === 'login' && (
          <button className="mt-4 text-sm font-medium text-blue-600 hover:underline" onClick={forgotPassword}>Quên mật khẩu?</button>
        )}
        {notice && <p className="mt-4 rounded-xl bg-blue-50 p-3 text-sm text-blue-800">{notice}</p>}
        <button className="mt-5 text-sm font-medium text-blue-600 hover:underline"
          onClick={() => setAuthMode(x => x === 'login' ? 'signup' : 'login')}>
          {authMode === 'login' ? 'Chưa có tài khoản? Đăng ký' : 'Đã có tài khoản? Đăng nhập'}
        </button>
      </Card>
    </div>
  )
}

// ============================================================
// Profile
// ============================================================
function ProfilePage({ user, displayName, setDisplayName, notice, saveProfile, syncStatus, online, syncNow, logout }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-blue-100 text-blue-700"><User size={32} /></div>
        <div>
          <h1 className="text-3xl font-black">Tài khoản của bạn</h1>
          <p className="text-slate-500">{user.email}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-bold">Hồ sơ</h2>
          <label className="mt-4 block text-sm font-medium">Tên hiển thị</label>
          <input className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            value={displayName} onChange={e => setDisplayName(e.target.value)} />
          <Btn className="mt-4 w-full" onClick={saveProfile}>
            <Save className="mr-2 inline h-4 w-4" />Lưu hồ sơ
          </Btn>
          {notice && <p className="mt-3 rounded-xl bg-blue-50 p-3 text-sm text-blue-800">{notice}</p>}
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold">Đồng bộ dữ liệu</h2>
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-50 p-4">
            {online ? <Cloud className="text-emerald-600" /> : <CloudOff className="text-red-600" />}
            <div>
              <div className="font-semibold">{online ? 'Đang kết nối' : 'Đang ngoại tuyến'}</div>
              <div className="text-sm text-slate-500">Trạng thái: {syncStatus}</div>
            </div>
          </div>
          <Btn className="mt-4 w-full" disabled={!online} onClick={syncNow}>
            <RefreshCw className="mr-2 inline h-4 w-4" />Đồng bộ ngay
          </Btn>
        </Card>
      </div>
      <Card className="mt-6 p-6">
        <h2 className="text-xl font-bold">Bảo mật phiên đăng nhập</h2>
        <p className="mt-2 text-slate-500">Đăng xuất thiết bị này hoặc tất cả thiết bị đang dùng cùng tài khoản.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Btn variant="ghost" onClick={() => logout('local')}>Đăng xuất thiết bị này</Btn>
          <Btn variant="danger" onClick={() => logout('global')}>Đăng xuất tất cả thiết bị</Btn>
        </div>
      </Card>
    </div>
  )
}

// ============================================================
// Helpers
// ============================================================
function translateAuthError(message = '') {
  const m = message.toLowerCase()
  if (m.includes('invalid login')) return 'Email hoặc mật khẩu chưa đúng.'
  if (m.includes('already registered')) return 'Email này đã được đăng ký.'
  if (m.includes('password')) return 'Mật khẩu chưa hợp lệ hoặc quá yếu.'
  if (m.includes('email not confirmed')) return 'Bạn cần xác nhận email trước khi đăng nhập.'
  if (m.includes('rate limit')) return 'Bạn thao tác quá nhanh. Hãy chờ một lúc rồi thử lại.'
  return message || 'Đã có lỗi xảy ra.'
}

function mergeHistory(a, b) {
  const map = new Map()
  ;[...a, ...b].forEach(x => map.set(x.id, x))
  return [...map.values()].sort((x, y) => new Date(y.date) - new Date(x.date)).slice(0, 100)
}