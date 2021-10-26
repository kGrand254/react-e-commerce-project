import { Switch, Route } from "react-router-dom";

import Banner from "./pages/home-page/banner.component";
import "./App.css";
import ShopPage from "./pages/shop-page/shop-page";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Banner}></Route>
      <Route exact path="/shop" component={ShopPage}></Route>
    </Switch>
  );
}

export default App;
