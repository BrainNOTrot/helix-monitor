import React, { useEffect, useState } from 'react'
import { SystemData } from '../shared/system'

const App: React.FC = () => {
  const [data, setData] = useState<SystemData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    window.electronAPI.getSystemData()
      .then(setData)
      .catch((err: Error) => setError(err.message))
  }, [])

  return (
    <div style={{
      backgroundColor: '#0f1117',
      color: '#e2e8f0',
      height: '100vh',
      padding: '2rem',
      fontFamily: 'monospace',
      overflow: 'auto'
    }}>
      <h1>⬡ Helix Monitor — IPC Test</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!data && !error && <p>Loading system data...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default App