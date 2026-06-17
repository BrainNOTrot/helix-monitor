import * as si from 'systeminformation'
import { CpuData, RamData, DiskData, OsData, SystemData } from '../shared/system'

export async function getCpuData(): Promise<CpuData> {
  const [load, cpu] = await Promise.all([
    si.currentLoad(),
    si.cpu()
  ])

  return {
    usage: Math.round(load.currentLoad),
    cores: cpu.cores,
    model: `${cpu.manufacturer} ${cpu.brand}`
  }
}

export async function getRamData(): Promise<RamData> {
  const mem = await si.mem()

  return {
    total: mem.total,
    used: mem.used,
    percentage: Math.round((mem.used / mem.total) * 100)
  }
}

export async function getDiskData(): Promise<DiskData> {
  const disks = await si.fsSize()

  // Use the root partition
  const root = disks.find((d: { mount: string }) => d.mount === '/') ?? disks[0]

  return {
    total: root.size,
    used: root.used,
    free: root.size - root.used,
    percentage: Math.round(root.use)
  }
}

export async function getOsData(): Promise<OsData> {
  const [osInfo, timeData] = await Promise.all([
    si.osInfo(),
    si.time()
  ])

  return {
    hostname: osInfo.hostname,
    platform: osInfo.platform,
    distro: osInfo.distro,
    release: osInfo.release,
    arch: osInfo.arch,
    uptime: timeData.uptime
  }
}

export async function getAllSystemData(): Promise<SystemData> {
  const [cpu, ram, disk, os] = await Promise.all([
    getCpuData(),
    getRamData(),
    getDiskData(),
    getOsData()
  ])

  return { cpu, ram, disk, os, timestamp: Date.now() }
}