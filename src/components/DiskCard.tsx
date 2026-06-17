import React from 'react'
import { DiskData } from '../../shared/system'
import { ProgressBar } from './ProgressBar'

interface DiskCardProps {
  data: DiskData
}

function formatBytes(bytes: number): string {
  return (bytes / 1024 / 1024 / 1024).toFixed(1)
}

function getUsageColor(percentage: number): string {
  if (percentage < 70) return 'var(--accent-purple)'
  if (percentage < 90) return 'var(--accent-yellow)'
  return 'var(--accent-red)'
}

export const DiskCard: React.FC<DiskCardProps> = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <span className="card-icon">💾</span>
          <span className="card-title">Disk</span>
        </div>
        <span className="card-badge">{formatBytes(data.total)} GB total</span>
      </div>

      <div className="card-value">
        {formatBytes(data.free)}
        <span className="card-value-unit">GB</span>
      </div>
      <div className="card-label">{formatBytes(data.used)} GB used of {formatBytes(data.total)} GB</div>

      <ProgressBar
        percentage={data.percentage}
        color={getUsageColor(data.percentage)}
        leftLabel="Used"
        rightLabel={`${data.percentage}%`}
      />
    </div>
  )
}