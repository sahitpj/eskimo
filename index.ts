import * as electron from 'electron'; 
import {remote} from 'electron'; 
const app = remote.app;
const BrowserWindow = remote.BrowserWindow;
const dialog = remote.dialog;

function hello(){
	var options: Electron.MessageBoxOptions = {
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
