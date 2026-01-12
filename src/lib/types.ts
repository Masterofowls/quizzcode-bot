export interface Quiz {
  id: string
  topic: string
  question: string
  code?: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface UserProgress {
  totalQuizzes: number
  correctAnswers: number
  streak: number
  topicProgress: Record<string, TopicProgress>
  quizHistory: QuizResult[]
  totalTimeSpent: number
  averageScore: number
  bestStreak: number
  lastActivity: number
}

export interface TopicProgress {
  completed: number
  total: number
  score: number
  lastAttempt?: number
}

export interface QuizResult {
  quizId: string
  topic: string
  correct: boolean
  timestamp: number
  timeSpent: number
}

export interface Topic {
  id: string
  name: string
  icon: string
  description: string
  color: string
  totalQuizzes: number
  difficulty: 'easy' | 'medium' | 'hard'
  category?: string
}
