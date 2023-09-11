import React, { Suspense, lazy, useContext, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import HeaderC from "./components/header/HeaderC";
import FooterC from "./components/footer/FooterC";
import AuthForm from "./components/auth/AuthForm";
import AuthContext from "./components/store/AuthContext";

const Cart = lazy(() => import("./components/cart/Cart"));
const Home = lazy(() => import("./components/home/Home"));
const Section = lazy(() => import("./components/layout/Section"));
const ProductDetails = lazy(() => import("./components/layout/ProductDetails"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));

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
      <Suspense fallback={<p>Loading...</p>}>
        {showCart && <Cart onClose={hideCartHandler} />}
      </Suspense>
      <HeaderC onShowCart={showCartHandler} onClose={hideCartHandler} />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="home/*" element={<Home />} />
          <Route
            path="store/*"
            element={<Section onShowCart={showCartHandler} />}
          />
          <Route
            path="store/product-details/:id"
            element={<ProductDetails />}
          />
          <Route path="about/*" element={<About />} />
          <Route
            path="contact/*"
            element={
              <>
                {authCtx.isLoggedIn && <Contact />}
                {!authCtx.isLoggedIn && <Navigate to="/auth" />}
              </>
            }
          />
          <Route path="auth/*" element={<AuthForm />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
      <FooterC />
    </React.Fragment>
  );
}

export default App;
