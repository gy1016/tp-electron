import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProviders } from "./context";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <AppProviders>
    <App />
  </AppProviders>
);

// window.electron.ipcRenderer.once("ipc-example", (arg) => {
//   console.log(arg);
// });
// window.electron.ipcRenderer.sendMessage("ipc-example", ["ping"]);
