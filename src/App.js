import { Switch, Route } from "react-router-dom";

import Banner from "./pages/home-page/banner.component";
import "./App.css";
import About from "./pages/about/about.component.page";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Banner}></Route>
      <Route exact path="/about" component={About}></Route>
    </Switch>
  );
}

export default App;
