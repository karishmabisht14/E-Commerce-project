import { useContext } from "react";
import "./CartItem.css";
import { Button, Col, Row } from "react-bootstrap";
import CartContext from "../store/CartContext";

const CartItem = ({ product }) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (item) => {
    cartCtx.addItem(item);
  };

  const deleteItemToCartHandler = (item) => {
    cartCtx.deleteItem(item);
  };

  return (
    <Row className="mb-4">
      <Col md={5} className="d-flex item align-items-center">
        <img className="cart-img" src={product.imageUrl} alt="cart-items"></img>
        <span className="title">{product.title}</span>
      </Col>
      <Col md={2} className="d-flex price align-items-center">
        <span>{product.price}</span>
      </Col>
      <Col md={4} className="d-flex quantity align-items-center">
        <span>x {product.quantity}</span>
        <div className="quantityBtns">
          <Button onClick={() => addItemToCartHandler(product)}>
            +
          </Button>
          <Button onClick={() => deleteItemToCartHandler(product)}>
            -
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default CartItem;
