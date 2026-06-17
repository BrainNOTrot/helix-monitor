import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import { getAllSystemData } from './systemInfo'

const isDev = process.env.NODE_ENV === 'development'

function createWindow(): void {
  const preloadPath = path.join(app.getAppPath(), 'preload.js')
  console.log('Preload path:', preloadPath)

  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: false,
    },
    show: false,
  })

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), 'dist/src/index.html'))
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}

ipcMain.handle('get-system-data', async () => {
  return await getAllSystemData()
})

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})