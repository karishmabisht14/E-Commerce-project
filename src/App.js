import React, { useState } from "react";

import HeaderC from "./components/header/HeaderC";
import Section from "./components/layout/Section";
import FooterC from "./components/footer/FooterC";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <HeaderC onShowCart={showCartHandler} />
      <Section onShowCart={showCartHandler}/>
      <FooterC />
    </CartProvider>
  );
}

export default App;
