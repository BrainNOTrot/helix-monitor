import React from 'react'

const App: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#0f1117',
      color: '#e2e8f0',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          ⬡ Helix Monitor
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Foundation established. Stack is working.
        </p>
      </div>
    </div>
  )
}

export default App