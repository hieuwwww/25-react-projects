import "./App.css";
import Accordion from "./components/accordion";
import LightDarkMode from "./components/change-theme";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagsGlobalState from "./components/feature-flag/context";
import FeatureFlagsContext from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color-generator";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutocomplete from "./components/search-autocomplete";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* Accordion component
      <Accordion />
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
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* custom tab component */}
      {/* <TabTest /> */}
      {/* custom modal component */}
      {/* <ModalTest /> */}
      {/* github profile finder */}
      {/* <GithubProfileFinder /> */}
      {/* search autocomplete */}
      {/* <SearchAutocomplete /> */}
      {/* tic tac toe component */}
      {/* <TicTacToe /> */}
      {/* Feature flag implementation */}
      <FeatureFlagsGlobalState>
        <FeatureFlags />
      </FeatureFlagsGlobalState>
    </div>
  );
}

export default App;
