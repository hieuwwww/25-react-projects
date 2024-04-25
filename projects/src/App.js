import "./App.css";
import Accordian from "./components/accordian";
import LightDarkMode from "./components/change-theme";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color-generator";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordian component
      <Accordian />
      {RandomColor component}
      <RandomColor />
      Image slider component */}
      {/* StarRating component */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* LoadMore component*/}
      {/* <LoadMore /> */}
      {/* Tree view component/Menu UI component */}
      {/* <TreeView menus={menus} /> */}
      {/* QR code generator component */}
      {/* <QRCodeGenerator /> */}
      {/* Light Dark Mode */}
      {/* <LightDarkMode /> */}
      {/* Scroll indicator comp */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
