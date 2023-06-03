import "./Cart.css";
import { Button, Col, Row } from "react-bootstrap";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartElements = [
    {
      id: 1,
      title: "Album 1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      id: 2,
      title: "Album 2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id: 3,
      title: "Album 3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  return (
    <Modal>
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
      {cartElements.map((item) => {
        return (
          <CartItem
            key={item.id}
            imgUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
    <div className="d-flex cart-total justify-content-end">
      <h3>Total</h3>
      <span>$64</span>
    </div>
    <Button className="purchase-btn">PURCHASE</Button>  
    </Modal>
  );
};

export default Cart;
