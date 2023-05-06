import { Container, Row, Col } from "react-bootstrap";
import "./FooterC.css";
const FooterC = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h1>The Generics</h1>
          </Col>
          <Col>
            <Row className="footer-icons">
              <Col>
                <a href="https://www.youtube.com/" target="#">
                  <img
                    src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
                    alt="youTube icon"
                  />
                </a>
              </Col>
              <Col>
                <a href="https://open.spotify.com/" target="#">
                  <img
                    src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
                    alt="spotify icon"
                  />
                </a>
              </Col>
              <Col>
                <a href="https://www.facebook.com/" target="#">
                  <img
                    src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
                    alt="facebook icon"
                  />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterC;
