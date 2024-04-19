import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color-generator";

function App() {
  return (
    <div className="App">
      {/* Accordian component*/}
      <Accordian />
      {/* {RandomColor component} */}
      <RandomColor />
    </div>
  );
}

export default App;
