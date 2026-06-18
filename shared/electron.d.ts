import { SystemData } from './system'

declare global {
  interface Window {
    electronAPI: {
      getSystemData: () => Promise<SystemData>
      minimizeWindow: () => void
      maximizeWindow: () => void
      closeWindow: () => void
    }
  }
}

export {}