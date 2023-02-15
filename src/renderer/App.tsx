import "./App.css";

const App = () => {
  const toggle = () => {
    window.electron.ipcRenderer.sendMessage("dark-mode:toggle");
    window.electron.ipcRenderer.on("dark-mode:toggle", (arg) => {
      console.log(arg);
    });
  };

  return (
    <div>
      <button onClick={toggle}>toggle</button>
    </div>
  );
};

export default App;
