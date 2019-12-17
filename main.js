/**
 *  electron 主进程
 */
const path = require('path')

const { app, BrowserWindow, ipcMain } = require('electron')
// 判断是否开发环境
const isDev = require('electron-is-dev')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
  })
  const urlLocation = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, './build/index.html')}`
  mainWindow.loadURL(urlLocation)
})
