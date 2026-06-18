import React from 'react'

interface PercentageBadgeProps {
  value: number
  thresholds?: {
    yellow: number
    red: number
  }
  colorScheme?: 'default' | 'blue' | 'purple'
}

function getColor(
  value: number,
  thresholds: { yellow: number; red: number },
  colorScheme: string
): string {
  if (colorScheme === 'blue') {
    if (value < thresholds.yellow) return 'blue'
    if (value < thresholds.red) return 'yellow'
    return 'red'
  }
  if (colorScheme === 'purple') {
    if (value < thresholds.yellow) return 'purple'
    if (value < thresholds.red) return 'yellow'
    return 'red'
  }
  if (value < thresholds.yellow) return 'green'
  if (value < thresholds.red) return 'yellow'
  return 'red'
}

export const PercentageBadge: React.FC<PercentageBadgeProps> = ({
  value,
  thresholds = { yellow: 60, red: 85 },
  colorScheme = 'default',
}) => {
  const color = getColor(value, thresholds, colorScheme)

  return (
    <span className={`percentage-badge ${color}`}>
      {value}%
    </span>
  )
}