import { Card } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Quiz } from '@/lib/types'
import { useState } from 'react'
import { CheckCircle, XCircle, ArrowRight } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

interface QuizQuestionProps {
  quiz: Quiz
  onAnswer: (correct: boolean) => void
  questionNumber: number
  totalQuestions: number
}

export function QuizQuestion({ quiz, onAnswer, questionNumber, totalQuestions }: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    
    const answerIndex = parseInt(selectedAnswer)
    const correct = answerIndex === quiz.correctAnswer
    setIsCorrect(correct)
    setShowResult(true)
  }

  const handleNext = () => {
    onAnswer(isCorrect)
    setSelectedAnswer(null)
    setShowResult(false)
    setIsCorrect(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <Badge variant="secondary">
          Question {questionNumber} of {totalQuestions}
        </Badge>
        <Badge 
          variant="outline"
          className={
            quiz.difficulty === 'easy' 
              ? 'border-success text-success' 
              : quiz.difficulty === 'medium'
              ? 'border-accent text-accent'
              : 'border-destructive text-destructive'
          }
        >
          {quiz.difficulty}
        </Badge>
      </div>

      <Card className="p-6 bg-card">
        <h2 className="text-2xl font-semibold mb-4">{quiz.question}</h2>
        
        {quiz.code && (
          <div className="mb-6 p-4 bg-background rounded-lg border-2 border-border overflow-x-auto">
            <pre className="text-sm">
              <code className="text-accent">{quiz.code}</code>
            </pre>
          </div>
        )}

        <RadioGroup
          value={selectedAnswer || ''}
          onValueChange={setSelectedAnswer}
          disabled={showResult}
          className="space-y-3"
        >
          {quiz.options.map((option, index) => {
            const isSelected = selectedAnswer === index.toString()
            const isCorrectOption = index === quiz.correctAnswer
            const showCorrect = showResult && isCorrectOption
            const showIncorrect = showResult && isSelected && !isCorrectOption

            return (
              <motion.div
                key={index}
                animate={showIncorrect ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <div
                  className={`flex items-center space-x-3 p-4 border-2 rounded-lg transition-all cursor-pointer ${
                    isSelected && !showResult
                      ? 'border-accent bg-accent/10'
                      : showCorrect
                      ? 'border-success bg-success/10'
                      : showIncorrect
                      ? 'border-destructive bg-destructive/10'
                      : 'border-border hover:border-muted-foreground'
                  }`}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer font-medium"
                  >
                    {option}
                  </Label>
                  {showCorrect && <CheckCircle weight="fill" className="text-success" size={24} />}
                  {showIncorrect && <XCircle weight="fill" className="text-destructive" size={24} />}
                </div>
              </motion.div>
            )
          })}
        </RadioGroup>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-4 rounded-lg border-2"
              style={{
                borderColor: isCorrect ? 'var(--success)' : 'var(--destructive)',
                backgroundColor: isCorrect ? 'var(--success-foreground)' : 'var(--destructive-foreground)'
              }}
            >
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle weight="fill" className="text-success flex-shrink-0 mt-1" size={24} />
                ) : (
                  <XCircle weight="fill" className="text-destructive flex-shrink-0 mt-1" size={24} />
                )}
                <div className="flex-1">
                  <h3 className={`font-semibold mb-2 ${isCorrect ? 'text-success' : 'text-destructive'}`}>
                    {isCorrect ? 'Correct!' : 'Not quite right'}
                  </h3>
                  <p className="text-foreground">{quiz.explanation}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex justify-end">
          {!showResult ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="gap-2"
            >
              Submit Answer
              <ArrowRight size={18} />
            </Button>
          ) : (
            <Button onClick={handleNext} className="gap-2">
              Next Question
              <ArrowRight size={18} />
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
