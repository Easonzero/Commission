const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
const {ipcMain} = require('electron');

/**
 * Created by eason on 17-4-3.
 */

let win;

function createWindow() {

    win = new BrowserWindow({width: 800, height: 650,frame: false,minHeight:580,minWidth:300});

    win.loadURL(`file://${__dirname}/index.html`);

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null){
        createWindow();
    }
});

ipcMain.on('closed', (event) => {
    win.close();
});