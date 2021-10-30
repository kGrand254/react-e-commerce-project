import { Switch, Route } from "react-router-dom";

import Banner from "./pages/home-page/banner.component";
import "./App.css";
import ShopPage from "./pages/shop-page/shop-page";
import Navigation from "./components/navigation/navigation.component";
import SignIn from './pages/sign-in-log-in/sign-in-log-in.page'

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Banner}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/sign-in" component={SignIn}></Route>
      </Switch>
    </div>
  );
}

export default App;
