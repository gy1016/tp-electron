import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProviders } from "./context";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <AppProviders>
      <App />
    </AppProviders>
  </BrowserRouter>
);

// window.electron.ipcRenderer.once("ipc-example", (arg) => {
//   console.log(arg);
// });
// window.electron.ipcRenderer.sendMessage("ipc-example", ["ping"]);
