import "./MusicAlbums.css";
import { Card, Button, Col } from "react-bootstrap";

const MusicAlbums = ({ product }) => {
  return (
    <Col className="d-flex justify-content-center">
      <Card className="card-wrap" style={{ width: "18rem" }}>
        <Card.Body>
          <h4 className="text-center pb-4">{product.title}</h4>
          <div className="image-container">
            <Card.Img src={product.imageUrl} alt={product.alt} />
          </div>
          <Card.Text className="mt-3">
            {`$${product.price}`}{" "}
            <Button className="button-wrap" variant="info">
              ADD TO CART
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MusicAlbums;
