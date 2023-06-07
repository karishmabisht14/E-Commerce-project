import { Button, Col, Row } from "react-bootstrap";
import "./TourItem.css";

const TourItem = ({ item }) => {
  return (
    <Row className="tour-item">
      <Col md={2}>{item.date}</Col>
      <Col md={3} className="tour-places">
        {item.place}
      </Col>
      <Col md={4} className="tour-places">
        {item.spec_place}
      </Col>
      <Col md={3} className="buy-tickets">
        <Button>BUY TICKETS</Button>
      </Col>
    </Row>
  );
};

export default TourItem;
