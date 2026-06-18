import { contextBridge, ipcRenderer } from 'electron'
import { SystemData } from '../shared/system'

contextBridge.exposeInMainWorld('electronAPI', {
  getSystemData: (): Promise<SystemData> => ipcRenderer.invoke('get-system-data'),
  minimizeWindow: (): void => { ipcRenderer.send('window-minimize') },
  maximizeWindow: (): void => { ipcRenderer.send('window-maximize') },
  closeWindow: (): void => { ipcRenderer.send('window-close') },
})