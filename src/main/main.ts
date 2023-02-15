import path from "path";
import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";
import { resolveHtmlPath } from "./util";

let mainWindow: BrowserWindow | null = null;

// 测试IPC频道
ipcMain.on("ipc-example", async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(arg, msgTemplate(arg));
  event.reply("ipc-example", msgTemplate("pong"));
});

// 切换黑暗模式的通道
ipcMain.on("dark-mode:toggle", async (event) => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = "light";
  } else {
    nativeTheme.themeSource = "dark";
  }
  event.reply("dark-mode:toggle", nativeTheme.shouldUseDarkColors);
});

const createWindow = async () => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, "assets")
    : path.join(__dirname, "../../assets");

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 728,
    icon: getAssetPath("icon.png"),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, "preload.js")
        : path.join(__dirname, "../../.erb/dll/preload.js"),
    },
  });

  mainWindow.loadURL(resolveHtmlPath("index.html"));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on("activate", () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

app.on("window-all-closed", () => {
  // Respect the OSX convention of having the application in memory even after all windows have been closed
  if (process.platform !== "darwin") {
    app.quit();
  }
});
