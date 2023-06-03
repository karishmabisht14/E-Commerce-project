import "./CartItem.css";
import { Button, Col, Row } from "react-bootstrap";

const CartItem = ({ imgUrl, title, price, quantity }) => {
  return (
    <Row className="mb-4">
      <Col md={5} className="d-flex item align-items-center">
        <img className="cart-img" src={imgUrl} alt="cart-items"></img>
        <span>{title}</span>
      </Col>
      <Col md={2} className="d-flex price align-items-center">
        <span>{price}</span>
      </Col>
      <Col md={4} className="d-flex quantity align-items-center">
        <input type="text" value={quantity} />
        <Button>REMOVE</Button>
      </Col>
    </Row>
  );
};

export default CartItem;
