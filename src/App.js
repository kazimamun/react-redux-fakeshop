import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./container/Header";
import ProductDetails from "./container/ProductDetails";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:productId">
            <ProductDetails />
          </Route>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
