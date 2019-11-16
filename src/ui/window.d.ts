/**
 * the following declaration enable to call window.ipcRenderer without Typescript yelling at us
 */

declare global {
  interface Window {
    ipcRenderer: IpcRenderer;
  }
}
