import { app, BrowserWindow, ipcMain } from "electron"
import settings from "electron-settings"

let worlds = []

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences : {
            nodeIntegration : true,
            contextIsolation : false
        },
        fullscreen : false,
        fullscreenable : false,
        maximizable : false
    })


    win.loadURL("http://localhost:5173")
}

ipcMain.handle("load-data-from-json", _ => {
    const data = settings.getSync("data.worlds")
    return data
})

ipcMain.handle("update-data", async (_, newWorlds) => {
    worlds = newWorlds
}) 


app.whenReady().then(() => {
    createWindow()

    if (settings.hasSync("data")) {
        worlds = settings.getSync("data.worlds")
    } else {
        settings.setSync("data", { worlds : [] })
    } 
    
    app.on("activate", () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on("window-all-closed", () => {
    if (worlds.length >= 1) {
        settings.setSync("data.worlds", worlds )
    } else {
        settings.setSync("data.worlds", [ worlds ] )
    }
    if (process.platform !== "darwin") app.quit()
})