import UnauthenticatedApp from "@/renderer/views/unauthenticated-app";
import "./App.css";

const App = () => {
  // const toggle = () => {
  //   window.electron.ipcRenderer.sendMessage("dark-mode:toggle");
  //   window.electron.ipcRenderer.on("dark-mode:toggle", (arg) => {
  //     console.log(arg);
  //   });
  // };

  return (
    <div id="app">
      <UnauthenticatedApp />
    </div>
  );
};

export default App;
