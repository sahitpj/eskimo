"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const app = electron_1.remote.app;
const BrowserWindow = electron_1.remote.BrowserWindow;
const dialog = electron_1.remote.dialog;
function hello() {
    var options = {
        title: 'Hello world',
        type: 'info',
        buttons: ['OK', 'Cancel'],
        message: 'Hi',
        detail: 'hello'
    };
    var win = BrowserWindow.getFocusedWindow();
    dialog.showMessageBox(win, options);
}
document.getElementById('btnShowHello').onclick = hello;
//# sourceMappingURL=index.js.map