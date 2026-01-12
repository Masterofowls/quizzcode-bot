import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Topic } from '@/lib/types'
import { Code, Lightning, CheckCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface TopicCardProps {
  topic: Topic
  progress?: {
    completed: number
    total: number
    score: number
  }
  onClick: () => void
}

export function TopicCard({ topic, progress, onClick }: TopicCardProps) {
  const completionPercentage = progress 
    ? (progress.completed / progress.total) * 100 
    : 0

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className="p-6 cursor-pointer border-2 hover:border-accent transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 bg-card"
        onClick={onClick}
        style={{
          borderColor: completionPercentage === 100 ? topic.color : undefined
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold"
            style={{ backgroundColor: topic.color, color: 'oklch(0.15 0 0)' }}
          >
            {topic.icon === 'js' && 'JS'}
            {topic.icon === 'ts' && 'TS'}
            {topic.icon === 'react' && '⚛'}
            {topic.icon === 'python' && '🐍'}
            {topic.icon === 'django' && 'DJ'}
            {topic.icon === 'css' && 'CSS'}
          </div>
          {completionPercentage === 100 && (
            <CheckCircle weight="fill" className="text-success" size={24} />
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{topic.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{topic.description}</p>
        
        {progress && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {progress.completed} / {progress.total} completed
              </span>
              {progress.completed > 0 && (
                <span className="font-medium" style={{ color: topic.color }}>
                  {Math.round(progress.score)}%
                </span>
              )}
            </div>
            <Progress value={completionPercentage} className="h-2" />
          </div>
        )}
        
        {!progress && (
          <Badge variant="secondary" className="mt-2">
            <Code size={14} className="mr-1" />
            {topic.totalQuizzes} questions
          </Badge>
        )}
      </Card>
    </motion.div>
  )
}
