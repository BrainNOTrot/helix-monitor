import React from 'react'
import { CpuData } from '../../shared/system'
import { ProgressBar } from './ProgressBar'
import { PercentageBadge } from './PercentageBadge'

interface CpuCardProps {
  data: CpuData
}

function getUsageColor(usage: number): string {
  if (usage < 50) return 'var(--accent-green)'
  if (usage < 80) return 'var(--accent-yellow)'
  return 'var(--accent-red)'
}

export const CpuCard: React.FC<CpuCardProps> = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <span className="card-icon">⚡</span>
          <span className="card-title">CPU</span>
        </div>
        <span className="card-badge">{data.cores} cores</span>
      </div>

      <div className="card-value">
        {data.usage}
        <span className="card-value-unit">%</span>
      </div>
      <div className="card-label">{data.model}</div>

      <ProgressBar
        percentage={data.usage}
        color={getUsageColor(data.usage)}
        leftLabel="Usage"
        rightLabel={<PercentageBadge value={data.usage} thresholds={{ yellow: 50, red: 80 }} />}
      />
    </div>
  )
}