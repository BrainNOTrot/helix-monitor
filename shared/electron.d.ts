import { SystemData } from './system'

declare global {
  interface Window {
    electronAPI: {
      getSystemData: () => Promise<SystemData>
    }
  }
}

export {}