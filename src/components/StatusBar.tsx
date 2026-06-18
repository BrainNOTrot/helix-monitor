import React, { useState, useEffect } from 'react'

interface StatusBarProps {
  lastUpdated: number | null
}

export const StatusBar: React.FC<StatusBarProps> = ({ lastUpdated }) => {
  const [, setTick] = useState(0)

  // Re-render every second so the time ago counter ticks
  useEffect(() => {
    const timer = setInterval(() => setTick(t => t + 1), 1000)
    return () => clearInterval(timer)
  }, [])

  const timeAgo = lastUpdated
    ? Math.floor((Date.now() - lastUpdated) / 1000)
    : null

  const isStale = timeAgo !== null && timeAgo > 5

  const updatedText = timeAgo === null
    ? 'Waiting...'
    : timeAgo === 0
    ? 'Just now'
    : `${timeAgo}s ago`

  return (
    <div className="status-bar">
      <div className="status-bar-left">
        <div className={`status-dot ${isStale ? 'stale' : ''}`} />
        <span>Live — refreshing every 2s</span>
      </div>
      <div className="status-bar-right">
        Last updated: {updatedText}
      </div>
    </div>
  )
}