import { ipcMain } from "electron";

ipcMain.on("ping", (event, arg) => {
  event.returnValue = arg + 1;
});
