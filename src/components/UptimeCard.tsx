import React from 'react'

interface UptimeCardProps {
  uptime: number
}

function formatUptime(seconds: number): { value: string; label: string } {
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  if (days > 0) {
    return { value: `${days}d ${hours}h`, label: `${minutes}m uptime` }
  }
  if (hours > 0) {
    return { value: `${hours}h ${minutes}m`, label: 'uptime' }
  }
  return { value: `${minutes}m`, label: 'uptime' }
}

export const UptimeCard: React.FC<UptimeCardProps> = ({ uptime }) => {
  const formatted = formatUptime(uptime)

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <span className="card-icon">⏱️</span>
          <span className="card-title">Uptime</span>
        </div>
      </div>

      <div className="card-value" style={{ fontSize: '1.8rem' }}>
        {formatted.value}
      </div>
      <div className="card-label">{formatted.label}</div>
    </div>
  )
}