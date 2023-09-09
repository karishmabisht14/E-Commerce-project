import React from "react";
import NavigationBar from "./NavigationBar";
import Title from "./Title";

const HeaderC = (props) => {
  return (
    <header>
      <NavigationBar onClick={props.onShowCart} onClose={props.onClose}/>
      <Title />
    </header>
  );
};

export default HeaderC;
