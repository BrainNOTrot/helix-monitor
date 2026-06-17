import React from 'react'
import { useSystemData } from '../hooks/useSystemData'
import { CpuCard } from '../components/CpuCard'
import { RamCard } from '../components/RamCard'
import { DiskCard } from '../components/DiskCard'
import { UptimeCard } from '../components/UptimeCard'
import { SystemCard } from '../components/SystemCard'

export const Dashboard: React.FC = () => {
  const { data, loading, error } = useSystemData()

  if (loading) {
    return (
      <div className="state-container">
        <span className="state-icon">⟳</span>
        <span className="state-message">Loading system data...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="state-container">
        <span className="state-icon">⚠️</span>
        <span className="state-message">Error: {error}</span>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="dashboard-grid">
      <CpuCard data={data.cpu} />
      <RamCard data={data.ram} />
      <DiskCard data={data.disk} />
      <UptimeCard uptime={data.os.uptime} />
      <SystemCard data={data.os} />
    </div>
  )
}