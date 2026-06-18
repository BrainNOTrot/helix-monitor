import React from 'react'
import { SystemData } from '../../shared/system'
import { CpuCard } from '../components/CpuCard'
import { RamCard } from '../components/RamCard'
import { DiskCard } from '../components/DiskCard'
import { UptimeCard } from '../components/UptimeCard'
import { SystemCard } from '../components/SystemCard'

interface DashboardProps {
  data: SystemData | null
  loading: boolean
  error: string | null
}

export const Dashboard: React.FC<DashboardProps> = ({ data, loading, error }) => {
  if (loading) {
    return (
      <div className="state-container">
        <div className="spinner" />
        <span className="state-message">Loading system data...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="state-container">
        <span style={{ fontSize: '1.5rem' }}>⚠️</span>
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