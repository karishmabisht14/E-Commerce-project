import { useContext } from "react";
import "./Cart.css";
import { Button, Col, Row } from "react-bootstrap";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../store/CartContext";
import AuthContext from "../store/AuthContext";
import { Navigate } from "react-router-dom";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const amount = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  const totalAmount = amount.toFixed(2);

  const orderItemsHandler = () => {
    cartCtx.orderItems();
  };

  return (
    <>
      {!authCtx.isLoggedIn && <Navigate to="/auth" />}
      {authCtx.isLoggedIn && (
        <Modal onClick={props.onClose}>
          <h2>CART</h2>
          <Button
            className="cancel"
            variant="outline-secondary"
            onClick={props.onClose}
          >
            X
          </Button>
          <Row className="cart-header">
            <Col md={5} className="cart-item cart-column">
              <span>ITEM</span>
            </Col>
            <Col md={2} className="cart-price cart-column">
              <span>PRICE</span>
            </Col>
            <Col md={4} className="cart-quantity cart-column">
              <span>QUANTITY</span>
            </Col>
          </Row>
          {cartCtx.items.map((item) => {
            return <CartItem key={item.id} product={item} />;
          })}
          <div className="d-flex cart-total justify-content-end">
            <h3>Total</h3>
            <span>{`$ ${totalAmount}`}</span>
          </div>
          <Button className="purchase-btn" onClick={orderItemsHandler}>
            PURCHASE
          </Button>
        </Modal>
      )}
    </>
  );
};

export default Cart;
