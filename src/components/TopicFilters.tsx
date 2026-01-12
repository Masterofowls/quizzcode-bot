import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sliders, SortAscending, SortDescending, FunnelSimple } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export type DifficultyFilter = 'all' | 'easy' | 'medium' | 'hard'
export type SortOption = 'name-asc' | 'name-desc' | 'difficulty-asc' | 'difficulty-desc' | 'progress-asc' | 'progress-desc'

interface TopicFiltersProps {
  selectedDifficulty: DifficultyFilter
  onDifficultyChange: (difficulty: DifficultyFilter) => void
  sortBy: SortOption
  onSortChange: (sort: SortOption) => void
  totalTopics: number
  filteredCount: number
}

export function TopicFilters({
  selectedDifficulty,
  onDifficultyChange,
  sortBy,
  onSortChange,
  totalTopics,
  filteredCount
}: TopicFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)

  const difficultyOptions: { value: DifficultyFilter; label: string; color: string }[] = [
    { value: 'all', label: 'All Levels', color: 'text-foreground' },
    { value: 'easy', label: 'Easy', color: 'text-success' },
    { value: 'medium', label: 'Medium', color: 'text-accent' },
    { value: 'hard', label: 'Hard', color: 'text-destructive' }
  ]

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'difficulty-asc', label: 'Difficulty (Easy first)' },
    { value: 'difficulty-desc', label: 'Difficulty (Hard first)' },
    { value: 'progress-asc', label: 'Progress (Low to High)' },
    { value: 'progress-desc', label: 'Progress (High to Low)' }
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant={showFilters ? "default" : "outline"}
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <FunnelSimple size={16} />
            Filters
          </Button>
          {selectedDifficulty !== 'all' && (
            <Badge variant="secondary" className="gap-1">
              <span className="capitalize">{selectedDifficulty}</span>
              <button
                onClick={() => onDifficultyChange('all')}
                className="ml-1 hover:text-foreground"
              >
                ×
              </button>
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {filteredCount} of {totalTopics} topics
          </span>
          <Select value={sortBy} onValueChange={(value) => onSortChange(value as SortOption)}>
            <SelectTrigger className="w-[200px]">
              <div className="flex items-center gap-2">
                <Sliders size={16} />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-card border border-border rounded-lg space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <FunnelSimple size={16} />
                  Difficulty Level
                </h3>
                <div className="flex flex-wrap gap-2">
                  {difficultyOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant={selectedDifficulty === option.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => onDifficultyChange(option.value)}
                      className={`${option.color} transition-all`}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
