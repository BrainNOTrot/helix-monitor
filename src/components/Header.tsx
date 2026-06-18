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
      {/* Drag region — lets user drag the window */}
      <div className="header-drag-region" />

      <div className="header-left">
        <span className="header-logo">⬡</span>
        <div>
          <div className="header-title">Helix Monitor</div>
          <div className="header-subtitle">System Dashboard</div>
        </div>
      </div>

      <div className="header-center">
        <div className="header-time">{timeString}</div>
        <div className="header-date">{dateString}</div>
      </div>

      <div className="header-right">
        <div className="window-controls">
          <button
            className="window-btn minimize"
            onClick={() => window.electronAPI.minimizeWindow()}
            title="Minimize"
          >
            <svg width="10" height="2" viewBox="0 0 10 2">
              <rect width="10" height="1.5" rx="1" fill="currentColor"/>
            </svg>
          </button>
          <button
            className="window-btn maximize"
            onClick={() => window.electronAPI.maximizeWindow()}
            title="Maximize"
          >
            <svg width="10" height="10" viewBox="0 0 10 10">
              <rect x="0.75" y="0.75" width="8.5" height="8.5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
          <button
            className="window-btn close"
            onClick={() => window.electronAPI.closeWindow()}
            title="Close"
          >
            <svg width="10" height="10" viewBox="0 0 10 10">
              <line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}