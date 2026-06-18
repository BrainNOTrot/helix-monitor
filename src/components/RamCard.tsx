import React from 'react'
import { RamData } from '../../shared/system'
import { ProgressBar } from './ProgressBar'
import { PercentageBadge } from './PercentageBadge'

interface RamCardProps {
  data: RamData
}

function formatBytes(bytes: number): string {
  return (bytes / 1024 / 1024 / 1024).toFixed(1)
}

function getUsageColor(percentage: number): string {
  if (percentage < 60) return 'var(--accent-blue)'
  if (percentage < 85) return 'var(--accent-yellow)'
  return 'var(--accent-red)'
}

export const RamCard: React.FC<RamCardProps> = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <span className="card-icon">🧠</span>
          <span className="card-title">Memory</span>
        </div>
        <span className="card-badge">{formatBytes(data.total)} GB total</span>
      </div>

      <div className="card-value">
        {formatBytes(data.used)}
        <span className="card-value-unit">GB</span>
      </div>
      <div className="card-label">of {formatBytes(data.total)} GB used</div>

      <ProgressBar
        percentage={data.percentage}
        color={getUsageColor(data.percentage)}
        leftLabel="Used"
        rightLabel={<PercentageBadge value={data.percentage} colorScheme="blue" />}
      />
    </div>
  )
}