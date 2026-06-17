import { contextBridge, ipcRenderer } from 'electron'
import { SystemData } from '../shared/system'

contextBridge.exposeInMainWorld('electronAPI', {
  getSystemData: (): Promise<SystemData> => ipcRenderer.invoke('get-system-data'),
})