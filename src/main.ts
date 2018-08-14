import {BrowserWindow, app} from "electron";
import * as url from "url";
import * as path from "path";

let mainWindow: BrowserWindow | null;

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    // mainWindow.loadFile('index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes:true
    }));
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'readfile.js'),
        protocol: 'file:',
        slashes:true
    }));

}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

