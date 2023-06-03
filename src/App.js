import React, { useState } from 'react';

import HeaderC from './components/header/HeaderC';
import Section from './components/layout/Section';
import FooterC from './components/footer/FooterC';
import Cart from './components/cart/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <React.Fragment>
        {showCart && <Cart onClose = {hideCartHandler} />}
        <HeaderC onShowCart = {showCartHandler}/>
        <Section />
        <FooterC/>
    </React.Fragment>
  );
}

export default App;
