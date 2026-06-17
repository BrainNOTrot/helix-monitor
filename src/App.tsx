import React from 'react'
import { Header } from './components/Header'
import { Dashboard } from './pages/Dashboard'
import './styles/components.css'

const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  )
}

export default App