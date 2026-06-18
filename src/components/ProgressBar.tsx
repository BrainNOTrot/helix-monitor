import React, { ReactNode } from 'react'

interface ProgressBarProps {
  percentage: number
  color: string
  leftLabel?: ReactNode
  rightLabel?: ReactNode
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color,
  leftLabel,
  rightLabel,
}) => {
  return (
    <div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{
            width: `${Math.min(percentage, 100)}%`,
            backgroundColor: color,
          }}
        />
      </div>
      {(leftLabel || rightLabel) && (
        <div className="progress-bar-labels">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>
      )}
    </div>
  )
}