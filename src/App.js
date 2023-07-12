import React, { useContext, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import HeaderC from "./components/header/HeaderC";
import Section from "./components/layout/Section";
import FooterC from "./components/footer/FooterC";
import Cart from "./components/cart/Cart";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import ProductDetails from "./components/layout/ProductDetails";
import AuthForm from "./components/auth/AuthForm";
import AuthContext from "./components/store/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <React.Fragment>
      {showCart && <Cart onClose={hideCartHandler} />}
      <HeaderC onShowCart={showCartHandler} />
      <Routes>
        <Route path="about/*" element={<About />} />
        <Route
          path="store/*"
          element={
            <>
              {authCtx.isLoggedIn && <Section onShowCart={showCartHandler} />}
              {!authCtx.isLoggedIn && <Navigate to="/auth" />}
            </>
          }
        />
        <Route path="store/product-details/:id" element={<ProductDetails />} />
        <Route path="home/*" element={<Home />} />
        <Route
          path="contact/*"
          element={
            <>
              {authCtx.isLoggedIn && <Contact />}
              {!authCtx.isLoggedIn && <Navigate to="auth" />}
            </>
          }
        />
        <Route path="auth/*" element={<AuthForm />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <FooterC />
    </React.Fragment>
  );
}

export default App;
