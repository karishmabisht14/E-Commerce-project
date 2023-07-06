import { useContext } from "react";
import "./MusicAlbums.css";

import { Card, Button, Col } from "react-bootstrap";
import CartContext from "../store/CartContext";
import { Link } from "react-router-dom";

const MusicAlbums = ({ product }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item) => {
    console.log(item);
    cartCtx.addItem(item);
  };

  return (
    <Col className="d-flex justify-content-center">
      <Card className="card-wrap" style={{ width: "18rem" }}>
        <Card.Body>
          <h4 className="text-center pb-4">{product.title}</h4>
          <div className="image-container">
            <Link
              to={`/store/product-details/${product.id}`}
              state={{
                image: product.imageUrl,
                price: product.price,
                title: product.title,
                review: product.review,
                quantity: product.quantity,
              }}
            >
              <Card.Img src={product.imageUrl} alt={product.alt} />
            </Link>
          </div>
          <Card.Text className="mt-3">
            {`$${product.price}`}{" "}
            <Button
              className="button-wrap"
              variant="info"
              onClick={() => addToCartHandler(product)}
            >
              ADD TO CART
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MusicAlbums;
