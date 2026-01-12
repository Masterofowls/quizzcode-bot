import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy, ArrowLeft, Target } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface QuizResultsProps {
  score: number
  total: number
  topicName: string
  onRestart: () => void
  onBackToDashboard: () => void
}

export function QuizResults({ score, total, topicName, onRestart, onBackToDashboard }: QuizResultsProps) {
  const percentage = Math.round((score / total) * 100)
  const passed = percentage >= 70

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="p-8 bg-card border-2 border-accent text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <Trophy 
            size={80} 
            weight="fill" 
            className={`mx-auto mb-6 ${passed ? 'text-accent' : 'text-muted-foreground'}`}
          />
        </motion.div>

        <h1 className="text-4xl font-bold mb-2">
          {passed ? 'Congratulations!' : 'Good Effort!'}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          You completed the {topicName} quiz
        </p>

        <div className="mb-8">
          <div className="text-6xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
            {score}/{total}
          </div>
          <div className="text-2xl text-muted-foreground">
            {percentage}% Correct
          </div>
        </div>

        {passed ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-4 bg-success/10 border-2 border-success rounded-lg mb-8"
          >
            <Target size={32} className="mx-auto mb-2 text-success" />
            <p className="text-success font-semibold">
              Excellent work! You've mastered this topic!
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-4 bg-accent/10 border-2 border-accent rounded-lg mb-8"
          >
            <p className="text-accent font-semibold">
              Keep practicing! You're on the right track.
            </p>
          </motion.div>
        )}

        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={onBackToDashboard} className="gap-2">
            <ArrowLeft size={18} />
            Dashboard
          </Button>
          <Button onClick={onRestart} className="gap-2">
            Try Again
            <Trophy size={18} />
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
