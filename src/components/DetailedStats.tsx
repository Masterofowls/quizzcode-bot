import { Card } from '@/components/ui/card'
import { UserProgress, Topic } from '@/lib/types'
import { TOPICS } from '@/lib/quizData'
import { Trophy, Target, Lightning, Clock } from '@phosphor-icons/react'

interface DetailedStatsProps {
  progress: UserProgress | undefined
}

export function DetailedStats({ progress }: DetailedStatsProps) {
  if (!progress || progress.totalQuizzes === 0) {
    return (
      <Card className="p-8 text-center bg-card">
        <Trophy size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
        <h3 className="text-xl font-semibold mb-2">No stats yet</h3>
        <p className="text-muted-foreground">Complete some quizzes to see your detailed statistics</p>
      </Card>
    )
  }

  const topicStats = TOPICS.map(topic => {
    const topicProgress = progress.topicProgress[topic.id]
    return {
      ...topic,
      progress: topicProgress,
      accuracy: topicProgress ? Math.round(topicProgress.score) : 0,
      completed: topicProgress?.completed || 0
    }
  }).sort((a, b) => b.completed - a.completed)

  const bestTopic = topicStats.filter(t => t.completed > 0).sort((a, b) => b.accuracy - a.accuracy)[0]
  const mostPracticed = topicStats.filter(t => t.completed > 0)[0]

  const recentActivity = progress.quizHistory.slice(0, 10)
  const recentAccuracy = recentActivity.length > 0
    ? Math.round((recentActivity.filter(r => r.correct).length / recentActivity.length) * 100)
    : 0

  const avgTime = progress.totalQuizzes > 0
    ? Math.round(progress.totalTimeSpent / progress.totalQuizzes / 1000)
    : 0

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 bg-card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Best Topic</h3>
              <p className="text-sm text-muted-foreground">Highest accuracy</p>
            </div>
            <Trophy size={32} className="text-success" weight="fill" />
          </div>
          {bestTopic ? (
            <div>
              <p className="text-2xl font-bold mb-1">{bestTopic.name}</p>
              <p className="text-3xl font-bold text-success">{bestTopic.accuracy}%</p>
              <p className="text-sm text-muted-foreground mt-2">
                {bestTopic.completed} quizzes completed
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground">No data yet</p>
          )}
        </Card>

        <Card className="p-6 bg-card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Most Practiced</h3>
              <p className="text-sm text-muted-foreground">Most attempts</p>
            </div>
            <Target size={32} className="text-accent" weight="fill" />
          </div>
          {mostPracticed ? (
            <div>
              <p className="text-2xl font-bold mb-1">{mostPracticed.name}</p>
              <p className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
                {mostPracticed.completed}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {mostPracticed.accuracy}% accuracy
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground">No data yet</p>
          )}
        </Card>

        <Card className="p-6 bg-card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Recent Performance</h3>
              <p className="text-sm text-muted-foreground">Last 10 quizzes</p>
            </div>
            <Lightning size={32} className="text-primary" weight="fill" />
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">{recentAccuracy}%</p>
            <p className="text-sm text-muted-foreground mt-2">
              {recentActivity.filter(r => r.correct).length} of {recentActivity.length} correct
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Average Speed</h3>
              <p className="text-sm text-muted-foreground">Per quiz</p>
            </div>
            <Clock size={32} className="text-destructive" weight="fill" />
          </div>
          <div>
            <p className="text-3xl font-bold text-destructive">{avgTime}s</p>
            <p className="text-sm text-muted-foreground mt-2">
              Total time: {Math.round(progress.totalTimeSpent / 1000 / 60)}m
            </p>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card">
        <h3 className="text-lg font-semibold mb-4">Topic Progress</h3>
        <div className="space-y-4">
          {topicStats.filter(t => t.completed > 0).map(topic => (
            <div key={topic.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{topic.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {topic.completed} / {topic.totalQuizzes} quizzes
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg" style={{ color: topic.color }}>
                    {topic.accuracy}%
                  </p>
                </div>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: `${(topic.completed / topic.totalQuizzes) * 100}%`,
                    backgroundColor: topic.color
                  }}
                />
              </div>
            </div>
          ))}
          {topicStats.filter(t => t.completed > 0).length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No progress yet. Start a quiz to see your stats!
            </p>
          )}
        </div>
      </Card>

      <Card className="p-6 bg-card">
        <h3 className="text-lg font-semibold mb-4">Milestones</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-secondary rounded-lg">
            <Trophy size={32} className="mx-auto mb-2 text-success" weight="fill" />
            <p className="text-2xl font-bold">{progress.totalQuizzes}</p>
            <p className="text-sm text-muted-foreground">Quizzes Taken</p>
          </div>
          <div className="text-center p-4 bg-secondary rounded-lg">
            <Target size={32} className="mx-auto mb-2 text-accent" weight="fill" />
            <p className="text-2xl font-bold">{progress.correctAnswers}</p>
            <p className="text-sm text-muted-foreground">Correct Answers</p>
          </div>
          <div className="text-center p-4 bg-secondary rounded-lg">
            <Lightning size={32} className="mx-auto mb-2 text-destructive" weight="fill" />
            <p className="text-2xl font-bold">{progress.bestStreak}</p>
            <p className="text-sm text-muted-foreground">Best Streak</p>
          </div>
          <div className="text-center p-4 bg-secondary rounded-lg">
            <Clock size={32} className="mx-auto mb-2 text-primary" weight="fill" />
            <p className="text-2xl font-bold">{Object.keys(progress.topicProgress).length}</p>
            <p className="text-sm text-muted-foreground">Topics Tried</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
