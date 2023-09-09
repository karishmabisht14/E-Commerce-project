import React, { useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import AuthContext from "./AuthContext";
import { CONSTANTS } from "../../utils/constants";
import { formatOjectToArray } from "../../utils/helper";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [items, setItems] = useState([]);

  let userEmailId = "";

  if (authCtx.isLoggedIn) {
    userEmailId = authCtx.email;
    userEmailId = userEmailId.replaceAll(/\.|\@/g, "");
  }

  useEffect(() => {
    async function getCartData() {
      if (authCtx.isLoggedIn) {
        const response = await fetch(`${CONSTANTS.baseURL}/${userEmailId}.json`);
        if (!response.ok) {
          throw new Error("something went wrong");
        } else {
          const data = await response.json();
          const storedData = formatOjectToArray(data);
          setItems([...items, ...storedData]);
        }
      }
    }
    getCartData();
  }, []);

  const addItemToCartHandler = async (product) => {
    let item = product;
    console.log("----1-------", item, items);
    const newItems = [...items];
    const itemIndex = items.findIndex((ele) => ele.id === item.id);
    if (itemIndex !== -1) {
      const updatedItem = { ...newItems[itemIndex] };
      updatedItem.quantity++;
      console.log("---updatedItem-----", updatedItem);
      if (authCtx.isLoggedIn) {
        const response = await fetch(
          `${CONSTANTS.baseURL}/${userEmailId}/${updatedItem._id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(updatedItem),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          console.log("-------response---------> items", response);
        } else {
          throw new Error("someting went wrong");
        }
      }
      newItems[itemIndex] = updatedItem;
      setItems([...newItems]);
    } else {
      console.log("----2-------", item);
      if (authCtx.isLoggedIn) {
        const response = await fetch(
          `${CONSTANTS.baseURL}/${userEmailId}.json`,
          {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          item["_id"] = data.name;
          console.log("----------------> response", data);
        } else {
          throw new Error("someting went wrong");
        }
      }
      setItems([...items, item]);
    }
  };

  const deleteItemToCartHandler = async (item) => {
    const newItems = [...items];
    const itemIndex = items.findIndex((ele) => ele.id === item.id);
    if (item.quantity > 1) {
      const updatedItem = { ...newItems[itemIndex] };
      updatedItem.quantity--;
      const response = await fetch(
        `${CONSTANTS.baseURL}/${userEmailId}/${updatedItem._id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(updatedItem),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        newItems[itemIndex].quantity--;
        setItems([...newItems]);
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      const response = await fetch(
        `${CONSTANTS.baseURL}/${userEmailId}/${item._id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        newItems.splice(itemIndex, 1);
        setItems([...newItems]);
      } else {
        throw new Error("Something went wrong");
      }
    }
  };

  const orderItemsToPurchase = async () => {
    const response = await fetch(`${CONSTANTS.baseURL}/${userEmailId}.json`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setItems([]);
      alert("Thank You for the purchase");
    } else {
      throw new Error("Something went wrong");
    }
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    deleteItem: deleteItemToCartHandler,
    orderItems: orderItemsToPurchase,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
