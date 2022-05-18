import BuyItems from "./components/BuyItems/BuyItems";
import Slider from "./components/Sliders/Slider";
import Topbar from "./components/topbar/Topbar";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Copyright from "./components/Copyright/Copyright";
import SingleBuying from "./Pages/SingleBuying/Singlebuying";
import Home from "./Pages/Home/Home";
import Selling from "./Pages/Selling/Selling";
export default function App() {
  return (
    <div className="App">
      {/* <Home/>
      <SingleBuying/> 
      <Register/>
      <Login/> */}
      <Selling />
    </div>
  );
}

