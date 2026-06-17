import React, { useState, useEffect } from 'react'

export const Header: React.FC = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const timeString = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  const dateString = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="header">
      <div className="header-left">
        <span className="header-logo">⬡</span>
        <div>
          <div className="header-title">Helix Monitor</div>
          <div className="header-subtitle">System Dashboard</div>
        </div>
      </div>
      <div className="header-right">
        <div className="header-time">{timeString}</div>
        <div className="header-date">{dateString}</div>
      </div>
    </header>
  )
}