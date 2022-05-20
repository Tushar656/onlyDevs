// import BuyItems from "./components/BuyItems/BuyItems";
// import Slider from "./components/Sliders/Slider";
// import Topbar from "./components/topbar/Topbar";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import SingleBuying from "./Pages/SingleBuying/Singlebuying";
import Home from "./Pages/Home/Home";
import Selling from "./Pages/Selling/Selling";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  let user = localStorage.getItem('olyname');
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/product/:id">
            <SingleBuying/> 
          </Route>
          <Route exact path="/sell">
            {user? <Selling/> : <Login/>}
          </Route>
          <Route exact path="/login">
            {user? <Home/>: <Login/>}
          </Route>
          <Route exact path="/register">
            {user? <Home/> : <Register/>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}