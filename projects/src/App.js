import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color-generator";

function App() {
  return (
    <div className="App">
      {/* Accordian component
      <Accordian />
      {RandomColor component}
      <RandomColor />
      Image slider coponent */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
