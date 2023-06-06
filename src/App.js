import React, { useState } from "react";

import HeaderC from "./components/header/HeaderC";
import Section from "./components/layout/Section";
import FooterC from "./components/footer/FooterC";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";
import About from "./components/about/About";
import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        {showCart && <Cart onClose={hideCartHandler} />}
        <HeaderC onShowCart={showCartHandler} />
        <Routes>
          <Route path="about/*" element={<About/>}/>
          <Route path="/" element={<Section onShowCart={showCartHandler} />}/>
          {/* <Route path="/home">
            <Home />
          </Route> */}
        </Routes>
        <FooterC />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
