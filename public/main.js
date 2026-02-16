import { app, BrowserWindow, ipcMain } from "electron"
import fs from "fs"
import path from "path"

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

ipcMain.handle("load-data-from-json", async (event) => {
    const saveDir = path.join(app.getAppPath("userData"), "coordsData", "data.json")
    const data = fs.readFileSync(saveDir)
    console.log(JSON.parse(data))
})

ipcMain.handle("update-data", async (_, newWorlds) => {
    worlds = newWorlds
    console.log(worlds)
}) 

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on("window-all-closed", () => {
    // Save data
    if (process.platform !== "darwin") app.quit()
})