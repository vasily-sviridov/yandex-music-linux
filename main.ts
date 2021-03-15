import { app, BrowserWindow } from "electron";

const createWindow = (): void => {
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        },
        icon: "./static/yandex-music-logo.png",

    })

    window.setMenuBarVisibility(false);
    window.loadURL("https://music.yandex.ru");
}

app.whenReady()
    .then(createWindow)

app.on('window-all-closed', (): void => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', (): void => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})