import Main from "./components/Main/Main";
import { MainProvider } from "./context/MainContext";
import "./style.css";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <Main />
      </MainProvider>
    </div>
  );
}

export default App;
