import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css"
import HeaderCartButton from "./HeaderCartButton";

const NavigationBar = () => {
  return (
    <Navbar>
      <Container>
        <Nav className="m-auto">
          <Nav.Link href="#" className="linkText pe-5">
            HOME
          </Nav.Link>
          <Nav.Link href="#" className="linkText pe-5">
            STORE
          </Nav.Link>
          <Nav.Link href="#" className="linkText">
            ABOUT
          </Nav.Link>
        </Nav>
      </Container>
      <HeaderCartButton />
    </Navbar>
  );
};

export default NavigationBar;
