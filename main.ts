import * as electron from 'electron';
import {app, BrowserWindow} from 'electron';
var express = require('express');  
var serverapp = express();  
var server = require('http').createServer(serverapp);  

serverapp.use(express.static(__dirname + '/node_modules'));  
serverapp.get('/', function(req, res,next) {  
    console.log(req);
    res.sendFile(__dirname + '/index.html');
});

server.listen(8000, function() {
  console.log('listening on 8000...');
});

var mainWindow: Electron.BrowserWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});



