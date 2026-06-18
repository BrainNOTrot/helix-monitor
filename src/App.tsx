import React from 'react'
import { Header } from './components/Header'
import { StatusBar } from './components/StatusBar'
import { Dashboard } from './pages/Dashboard'
import { useSystemData } from './hooks/useSystemData'
import './styles/components.css'

const App: React.FC = () => {
  const { data, loading, error, lastUpdated } = useSystemData()

  return (
    <div className="app-layout">
      <Header />
      <StatusBar lastUpdated={lastUpdated} />
      <main className="main-content">
        <Dashboard data={data} loading={loading} error={error} />
      </main>
    </div>
  )
}

export default App