//
// Serencastアプリの起動
//

'use strict';

// Electronのモジュール
const electron = require("electron");

// アプリケーションをコントロールするモジュール
const app = electron.app;

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow;

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

// 引数解析
var project = process.argv[2];
if(! project) project = "masui";
var page = process.argv[3];
if(! page) page = "Watch";

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
	app.quit();
    }
});

// Electronの初期化完了後に実行
app.on('ready', function() {
    const Screen = electron.screen;
    var size = Screen.getPrimaryDisplay().size;
    
    // メイン画面の表示。ウィンドウの幅、高さを指定できる
    mainWindow = new BrowserWindow({
	width: size.width,
	height: size.height,
	fullscreen: true
    });
    mainWindow.loadURL('file://' + __dirname + `/index.html?project=${project}&page=${page}`);

    // ウィンドウが閉じられたらアプリも終了
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
