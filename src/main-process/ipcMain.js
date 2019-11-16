import { ipcMain } from "electron";

ipcMain.on("ping", (event, arg) => {
  console.log("reacting to ping message with value", arg);
  event.returnValue = arg + 1;
});
