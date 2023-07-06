import React, { useState } from "react";

import HeaderC from "./components/header/HeaderC";
import Section from "./components/layout/Section";
import FooterC from "./components/footer/FooterC";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";
import About from "./components/about/About";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import ProductDetails from "./components/layout/ProductDetails";

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
          <Route path="/*" element={<Navigate to="/store" />} />
          <Route path="about/*" element={<About />} />
          <Route
            path="store/*"
            element={<Section onShowCart={showCartHandler} />}
          />
          <Route
            path="store/product-details/:id"
            element={<ProductDetails />}
          />
          <Route path="home/*" element={<Home />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
        <FooterC />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
