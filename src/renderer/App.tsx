import UnauthenticatedApp from "@/renderer/views/unauthenticated-app";
import AuthenticatedApp from "@/renderer/views/authenticated-app";
import "./App.css";

// const toggle = () => {
//   window.electron.ipcRenderer.sendMessage("dark-mode:toggle");
//   window.electron.ipcRenderer.on("dark-mode:toggle", (arg) => {
//     console.log(arg);
//   });
// };

const App = () => {
  const user = false;

  return (
    <div id="app">{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
  );
};

export default App;
