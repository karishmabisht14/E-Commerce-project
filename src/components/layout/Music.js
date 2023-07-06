import { Container, Row } from "react-bootstrap";
import MusicAlbums from "./MusicAlbums";
import Merch from "./Merch";
import Section2CartButton from "./SectionCartButton";

const Music = (props) => {
  const productsArr = [
    {
      id: 1,
      title: "Album 1",
      price: 12.99,
      alt: "Colors",
      quantity: 1,
      review: 4 ,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Album 2",
      price: 14.99,
      alt: "Black and white Colors",
      quantity: 1,
      review: 5,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Album 3",
      price: 9.99,
      alt: "Yellow and Black Colors",
      quantity: 1,
      review: 4.5,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Album 4",
      price: 19.99,
      alt: "Blue Color",
      quantity: 1,
      review: 3,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <section className="music">
      <h1>Music</h1>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {productsArr.map((product) => {
            return <MusicAlbums key={product.id} product={product} />;
          })}
        </Row>
        <Merch />
        <Section2CartButton onClick={props.onClick} />
      </Container>
    </section>
  );
};

export default Music;
