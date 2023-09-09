import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  deleteItem: (item) => {},
  orderItems: () => {},
});

export default CartContext;
