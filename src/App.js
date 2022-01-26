import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/header";
import Cart from "./pages/Cart/cart";
import Home from "./pages/Home/home";
import Sending from "./pages/Sending/sending";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/sending" component={Sending} />
      </div>
    </div>
  );
}

export default App;
