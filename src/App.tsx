import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
// import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Shop from "./components/Shop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div style={{ margin: "70px 0px" }}>
          <Header></Header>
        </div>

        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/home" component={Shop} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route path="*">404 NOT FOUND</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
