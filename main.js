"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
var express = require('express');
var serverapp = express();
var server = require('http').createServer(serverapp);
serverapp.use(express.static(__dirname + '/node_modules'));
serverapp.post('/', function (req, res, next) {
    console.log(req.headers.data);
    res.sendFile(__dirname + '/index.html');
});
server.listen(8000, function () {
    console.log('listening on 8000...');
});
var mainWindow = null;
electron_1.app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('ready', function () {
    mainWindow = new electron_1.BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
//# sourceMappingURL=main.js.map