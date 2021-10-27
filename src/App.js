import { Switch, Route } from "react-router-dom";

import Banner from "./pages/home-page/banner.component";
import "./App.css";
import ShopPage from "./pages/shop-page/shop-page";
import Navigation from "./components/navigation/navigation.component";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Banner}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
