import UnauthenticatedApp from "@/renderer/views/unauthenticated-app";
import AuthenticatedApp from "@/renderer/views/authenticated-app";
import useAuth from "./hooks/useAuth";
import "./App.css";

const App = () => {
  const { user } = useAuth();

  return (
    <div id="app">{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
  );
};

// const toggle = () => {
//   window.electron.ipcRenderer.sendMessage("dark-mode:toggle");
//   window.electron.ipcRenderer.on("dark-mode:toggle", (arg) => {
//     console.log(arg);
//   });
// };

export default App;
