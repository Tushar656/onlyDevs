import BuyItems from "./components/BuyItems/BuyItems";
import Slider from "./components/Sliders/Slider";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Slider/>
      <BuyItems/>
    </div>
  );
}

export default App;
