import { Row, Col, Card, Button } from "react-bootstrap";
import "./MusicAlbums.css";

const Merch = () => {
  const productsArr = [
    {
      id: "t-shirt",
      title: "T-Shirt",
      price: 19.99,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    },
    {
      id: "coffee-cup",
      title: "Coffee Cup",
      price: 6.99,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    },
  ];
  return (
    <section>
      <h1>Merch</h1>
      <Row xs={1} md={2} className="g-4">
        {productsArr.map((product) => {
          return (
            <Col key={product.id} className="d-flex justify-content-center">
              <Card className="card-wrap" style={{ width: "18rem" }}>
                <Card.Body>
                  <h4 className="text-center pb-4">{product.title}</h4>
                  <div className="image-container">
                    <Card.Img src={product.imageUrl} alt={product.title} />
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
        })}
      </Row>
    </section>
  );
};

export default Merch;
