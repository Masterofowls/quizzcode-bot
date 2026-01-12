import { useState, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { TopicCard } from '@/components/TopicCard'
import { TopicFilters, DifficultyFilter, SortOption } from '@/components/TopicFilters'
import { QuizQuestion } from '@/components/QuizQuestion'
import { QuizResults } from '@/components/QuizResults'
import { StatCard } from '@/components/StatCard'
import { DetailedStats } from '@/components/DetailedStats'
import { TOPICS, getRandomQuizzes } from '@/lib/quizData'
import { UserProgress, Quiz, QuizResult, Topic } from '@/lib/types'
import { 
  ChartBar, 
  Lightning, 
  Trophy, 
  CheckCircle, 
  Code,
  SignIn,
  SignOut,
  ArrowLeft,
  Play
} from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

type View = 'dashboard' | 'quiz' | 'results'

interface UserInfo {
  login: string
  avatarUrl: string
  email: string
  isOwner: boolean
}

function App() {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [view, setView] = useState<View>('dashboard')
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [currentQuizzes, setCurrentQuizzes] = useState<Quiz[]>([])
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [startTime, setStartTime] = useState<number>(0)
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all')
  const [sortBy, setSortBy] = useState<SortOption>('name-asc')
  
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('user-progress')
    return saved ? JSON.parse(saved) : {
      totalQuizzes: 0,
      correctAnswers: 0,
      streak: 0,
      topicProgress: {},
      quizHistory: [],
      totalTimeSpent: 0,
      averageScore: 0,
      bestStreak: 0,
      lastActivity: Date.now()
    }
  })

  useEffect(() => {
    localStorage.setItem('user-progress', JSON.stringify(progress))
  }, [progress])

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    try {
      // Try to load user from localStorage first
      const savedUser = localStorage.getItem('quiz-user')
      if (savedUser) {
        setUser(JSON.parse(savedUser))
        return
      }
      
      // Try GitHub Spark (works in Codespaces/Spark environment)
      if (window.spark?.user) {
        const userInfo = await window.spark.user()
        setUser(userInfo)
        localStorage.setItem('quiz-user', JSON.stringify(userInfo))
      } else {
        // Fallback for static deployment - create a guest user
        const guestUser = {
          login: 'Guest User',
          avatarUrl: '',
          email: 'guest@example.com',
          isOwner: false
        }
        setUser(guestUser)
        localStorage.setItem('quiz-user', JSON.stringify(guestUser))
      }
    } catch (error) {
      console.error('Failed to load user:', error)
      // Fallback to guest user on error
      const guestUser = {
        login: 'Guest User',
        avatarUrl: '',
        email: 'guest@example.com',
        isOwner: false
      }
      setUser(guestUser)
      localStorage.setItem('quiz-user', JSON.stringify(guestUser))
    }
  }

  const handleSignIn = async () => {
    await loadUser()
  }

  const handleSignOut = () => {
    localStorage.removeItem('quiz-user')
    setUser(null)
  }

  const startQuiz = (topicId: string) => {
    const quizzes = getRandomQuizzes(topicId, 5)
    setCurrentQuizzes(quizzes)
    setSelectedTopic(topicId)
    setCurrentQuizIndex(0)
    setScore(0)
    setStartTime(Date.now())
    setView('quiz')
  }

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore(prev => prev + 1)
    }

    const quiz = currentQuizzes[currentQuizIndex]
    const timeSpent = Date.now() - startTime
    const result: QuizResult = {
      quizId: quiz.id,
      topic: quiz.topic,
      correct,
      timestamp: Date.now(),
      timeSpent
    }

    setProgress((currentProgress) => {
      if (!currentProgress) {
        currentProgress = {
          totalQuizzes: 0,
          correctAnswers: 0,
          streak: 0,
          topicProgress: {},
          quizHistory: [],
          totalTimeSpent: 0,
          averageScore: 0,
          bestStreak: 0,
          lastActivity: Date.now()
        }
      }
      
      const newProgress: UserProgress = { ...currentProgress }
      newProgress.totalQuizzes = (newProgress.totalQuizzes || 0) + 1
      newProgress.correctAnswers = (newProgress.correctAnswers || 0) + (correct ? 1 : 0)
      newProgress.totalTimeSpent = (newProgress.totalTimeSpent || 0) + timeSpent
      newProgress.lastActivity = Date.now()
      
      if (!newProgress.topicProgress[quiz.topic]) {
        newProgress.topicProgress[quiz.topic] = {
          completed: 0,
          total: TOPICS.find(t => t.id === quiz.topic)?.totalQuizzes || 100,
          score: 0
        }
      }
      
      const topicProg = newProgress.topicProgress[quiz.topic]
      topicProg.completed += 1
      topicProg.score = ((topicProg.score * (topicProg.completed - 1)) + (correct ? 100 : 0)) / topicProg.completed
      topicProg.lastAttempt = Date.now()
      
      newProgress.quizHistory = [result, ...newProgress.quizHistory].slice(0, 100)
      
      const recentResults = newProgress.quizHistory.slice(0, 10)
      const currentStreak = recentResults.every(r => r.correct) ? recentResults.length : 0
      newProgress.streak = currentStreak
      newProgress.bestStreak = Math.max(newProgress.bestStreak || 0, currentStreak)
      
      newProgress.averageScore = newProgress.totalQuizzes > 0
        ? Math.round((newProgress.correctAnswers / newProgress.totalQuizzes) * 100)
        : 0
      
      return newProgress
    })

    if (currentQuizIndex < currentQuizzes.length - 1) {
      setCurrentQuizIndex(prev => prev + 1)
      setStartTime(Date.now())
    } else {
      setView('results')
    }
  }

  const restartQuiz = () => {
    if (selectedTopic) {
      startQuiz(selectedTopic)
    }
  }

  const backToDashboard = () => {
    setView('dashboard')
    setSelectedTopic(null)
    setCurrentQuizzes([])
    setCurrentQuizIndex(0)
    setScore(0)
  }

  const getTopicProgress = (topicId: string) => {
    return progress?.topicProgress?.[topicId]
  }

  const filteredAndSortedTopics = useMemo(() => {
    let filtered = [...TOPICS]

    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(topic => topic.difficulty === difficultyFilter)
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name)
        case 'name-desc':
          return b.name.localeCompare(a.name)
        case 'difficulty-asc': {
          const difficultyOrder = { easy: 0, medium: 1, hard: 2 }
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
        }
        case 'difficulty-desc': {
          const difficultyOrder = { easy: 0, medium: 1, hard: 2 }
          return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]
        }
        case 'progress-asc': {
          const aProgress = getTopicProgress(a.id)
          const bProgress = getTopicProgress(b.id)
          const aPercent = aProgress ? (aProgress.completed / aProgress.total) * 100 : 0
          const bPercent = bProgress ? (bProgress.completed / bProgress.total) * 100 : 0
          return aPercent - bPercent
        }
        case 'progress-desc': {
          const aProgress = getTopicProgress(a.id)
          const bProgress = getTopicProgress(b.id)
          const aPercent = aProgress ? (aProgress.completed / aProgress.total) * 100 : 0
          const bPercent = bProgress ? (bProgress.completed / bProgress.total) * 100 : 0
          return bPercent - aPercent
        }
        default:
          return 0
      }
    })

    return filtered
  }, [difficultyFilter, sortBy, progress])

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-8 max-w-md text-center bg-card">
            <Code size={64} className="mx-auto mb-4 text-accent" weight="duotone" />
            <h1 className="text-4xl font-bold mb-2 tracking-tight">CodeQuizz</h1>
            <p className="text-muted-foreground mb-6">
              Master programming concepts through interactive quizzes
            </p>
            <Button onClick={handleSignIn} size="lg" className="gap-2 w-full">
              <SignIn size={20} />
              Sign In with GitHub
            </Button>
          </Card>
        </motion.div>
      </div>
    )
  }

  if (view === 'quiz' && currentQuizzes.length > 0) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" onClick={backToDashboard} className="gap-2">
              <ArrowLeft size={18} />
              Back
            </Button>
            <Progress 
              value={((currentQuizIndex + 1) / currentQuizzes.length) * 100} 
              className="w-48"
            />
          </div>
          
          <AnimatePresence mode="wait">
            <QuizQuestion
              key={currentQuizIndex}
              quiz={currentQuizzes[currentQuizIndex]}
              onAnswer={handleAnswer}
              questionNumber={currentQuizIndex + 1}
              totalQuestions={currentQuizzes.length}
            />
          </AnimatePresence>
        </div>
      </div>
    )
  }

  if (view === 'results' && selectedTopic) {
    const topic = TOPICS.find(t => t.id === selectedTopic)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <QuizResults
          score={score}
          total={currentQuizzes.length}
          topicName={topic?.name || 'Quiz'}
          onRestart={restartQuiz}
          onBackToDashboard={backToDashboard}
        />
      </div>
    )
  }

  const totalCompleted = progress?.totalQuizzes || 0
  const accuracy = totalCompleted > 0 && progress
    ? Math.round((progress.correctAnswers / progress.totalQuizzes) * 100)
    : 0

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code size={32} className="text-accent" weight="duotone" />
            <h1 className="text-2xl font-bold tracking-tight">CodeQuizz</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={user?.avatarUrl} alt={user?.login} />
              <AvatarFallback>{user?.login?.[0]?.toUpperCase() || 'U'}</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="font-semibold">{user?.login}</p>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <SignOut size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="topics">Topics</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                label="Total Quizzes"
                value={totalCompleted}
                icon={<CheckCircle size={24} weight="fill" />}
                color="var(--accent)"
              />
              <StatCard
                label="Correct Answers"
                value={progress?.correctAnswers || 0}
                icon={<Trophy size={24} weight="fill" />}
                color="var(--success)"
              />
              <StatCard
                label="Accuracy"
                value={accuracy}
                suffix="%"
                icon={<ChartBar size={24} weight="fill" />}
                color="var(--primary)"
              />
              <StatCard
                label="Current Streak"
                value={progress?.streak || 0}
                icon={<Lightning size={24} weight="fill" />}
                color="var(--destructive)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                label="Best Streak"
                value={progress?.bestStreak || 0}
                icon={<Trophy size={24} weight="fill" />}
                color="oklch(0.75 0.15 70)"
              />
              <StatCard
                label="Avg Time/Quiz"
                value={progress && progress.totalQuizzes > 0 
                  ? Math.round(progress.totalTimeSpent / progress.totalQuizzes / 1000) 
                  : 0}
                suffix="s"
                icon={<Lightning size={24} weight="fill" />}
                color="oklch(0.65 0.15 195)"
              />
              <StatCard
                label="Topics Started"
                value={Object.keys(progress?.topicProgress || {}).length}
                icon={<Code size={24} weight="fill" />}
                color="oklch(0.55 0.15 245)"
              />
              <StatCard
                label="Last Active"
                value={progress?.lastActivity 
                  ? Math.floor((Date.now() - progress.lastActivity) / (1000 * 60 * 60 * 24))
                  : 0}
                suffix="d ago"
                icon={<CheckCircle size={24} weight="fill" />}
                color="var(--muted-foreground)"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
              <TopicFilters
                selectedDifficulty={difficultyFilter}
                onDifficultyChange={setDifficultyFilter}
                sortBy={sortBy}
                onSortChange={setSortBy}
                totalTopics={TOPICS.length}
                filteredCount={filteredAndSortedTopics.length}
              />
              {filteredAndSortedTopics.length === 0 ? (
                <Card className="p-12 text-center bg-card mt-4">
                  <Code size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-xl font-semibold mb-2 text-muted-foreground">
                    No topics match your filters
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your difficulty filter to see more topics
                  </p>
                  <Button onClick={() => setDifficultyFilter('all')} variant="outline">
                    Clear Filters
                  </Button>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {filteredAndSortedTopics.map(topic => (
                    <TopicCard
                      key={topic.id}
                      topic={topic}
                      progress={progress?.topicProgress?.[topic.id]}
                      onClick={() => startQuiz(topic.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="topics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">All Topics</h2>
            </div>
            
            <TopicFilters
              selectedDifficulty={difficultyFilter}
              onDifficultyChange={setDifficultyFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalTopics={TOPICS.length}
              filteredCount={filteredAndSortedTopics.length}
            />
            
            {filteredAndSortedTopics.length === 0 ? (
              <Card className="p-12 text-center bg-card">
                <Code size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-xl font-semibold mb-2 text-muted-foreground">
                  No topics match your filters
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your difficulty filter to see more topics
                </p>
                <Button onClick={() => setDifficultyFilter('all')} variant="outline">
                  Clear Filters
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAndSortedTopics.map(topic => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    progress={progress?.topicProgress?.[topic.id]}
                    onClick={() => startQuiz(topic.id)}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <h2 className="text-2xl font-bold">Detailed Statistics</h2>
            <DetailedStats progress={progress} />
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <h2 className="text-2xl font-bold">Recent Activity</h2>
            
            {!progress || progress.quizHistory.length === 0 ? (
              <Card className="p-12 text-center bg-card">
                <Trophy size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-xl font-semibold mb-2 text-muted-foreground">
                  No quiz history yet
                </h3>
                <p className="text-muted-foreground mb-6">
                  Start a quiz to see your progress here
                </p>
                <Button onClick={() => setView('dashboard')} className="gap-2">
                  <Play size={18} />
                  Start Your First Quiz
                </Button>
              </Card>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4 bg-card">
                    <div className="text-sm text-muted-foreground mb-1">Total Attempts</div>
                    <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
                      {progress.quizHistory.length}
                    </div>
                  </Card>
                  <Card className="p-4 bg-card">
                    <div className="text-sm text-muted-foreground mb-1">Success Rate</div>
                    <div className="text-3xl font-bold text-success">
                      {Math.round((progress.quizHistory.filter(r => r.correct).length / progress.quizHistory.length) * 100)}%
                    </div>
                  </Card>
                  <Card className="p-4 bg-card">
                    <div className="text-sm text-muted-foreground mb-1">Avg Response Time</div>
                    <div className="text-3xl font-bold text-primary">
                      {Math.round(progress.quizHistory.reduce((sum, r) => sum + r.timeSpent, 0) / progress.quizHistory.length / 1000)}s
                    </div>
                  </Card>
                </div>

                <div className="space-y-3">
                  {progress.quizHistory.slice(0, 50).map((result, index) => {
                    const topic = TOPICS.find(t => t.id === result.topic)
                    const date = new Date(result.timestamp)
                    
                    return (
                      <motion.div
                        key={`${result.quizId}-${result.timestamp}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.02 }}
                      >
                        <Card className="p-4 bg-card hover:border-accent/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              {result.correct ? (
                                <CheckCircle size={24} weight="fill" className="text-success" />
                              ) : (
                                <Code size={24} className="text-muted-foreground" />
                              )}
                              <div>
                                <p className="font-semibold">{topic?.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {date.toLocaleDateString()} at {date.toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={`font-semibold ${result.correct ? 'text-success' : 'text-muted-foreground'}`}>
                                {result.correct ? 'Correct' : 'Incorrect'}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {Math.round(result.timeSpent / 1000)}s
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App
