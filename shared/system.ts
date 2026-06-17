export interface CpuData {
  usage: number        // percentage 0-100
  cores: number        // physical core count
  model: string        // e.g. "Intel Core i5"
}

export interface RamData {
  total: number        // bytes
  used: number         // bytes
  percentage: number   // 0-100
}

export interface DiskData {
  total: number        // bytes
  used: number         // bytes
  free: number         // bytes
  percentage: number   // 0-100
}

export interface OsData {
  hostname: string     // e.g. "Nova"
  platform: string     // e.g. "linux"
  distro: string       // e.g. "Ubuntu"
  release: string      // e.g. "22.04"
  arch: string         // e.g. "x64"
  uptime: number       // seconds
}

export interface SystemData {
  cpu: CpuData
  ram: RamData
  disk: DiskData
  os: OsData
  timestamp: number    // Date.now()
}