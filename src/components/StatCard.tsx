import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface StatCardProps {
  label: string
  value: number
  icon: React.ReactNode
  color?: string
  suffix?: string
}

export function StatCard({ label, value, icon, color = 'var(--accent)', suffix = '' }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const duration = 1000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setDisplayValue(end)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 bg-card border-2 hover:border-accent/50 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{label}</p>
            <p className="text-3xl font-bold" style={{ color }}>
              {displayValue}{suffix}
            </p>
          </div>
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: color, opacity: 0.2 }}
          >
            <div style={{ color }}>{icon}</div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
