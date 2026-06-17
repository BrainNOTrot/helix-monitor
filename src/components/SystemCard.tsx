import React from 'react'
import { OsData } from '../../shared/system'

interface SystemCardProps {
  data: OsData
}

export const SystemCard: React.FC<SystemCardProps> = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <span className="card-icon">🖥️</span>
          <span className="card-title">System</span>
        </div>
      </div>

      <div className="info-row">
        <span className="info-row-label">Hostname</span>
        <span className="info-row-value">{data.hostname}</span>
      </div>
      <div className="info-row">
        <span className="info-row-label">OS</span>
        <span className="info-row-value">{data.distro} {data.release}</span>
      </div>
      <div className="info-row">
        <span className="info-row-label">Platform</span>
        <span className="info-row-value">{data.platform}</span>
      </div>
      <div className="info-row">
        <span className="info-row-label">Architecture</span>
        <span className="info-row-value">{data.arch}</span>
      </div>
    </div>
  )
}