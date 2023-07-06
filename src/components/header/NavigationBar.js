import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = (props) => {
  const location = useLocation();

  return (
    <Navbar fixed="top">
      <Container>
        <Nav className="m-auto">
          <NavLink to="/home" className="linkText mx-3 px-2">
            HOME
          </NavLink>
          <NavLink to="/store" className="linkText mx-3 px-2">
            STORE
          </NavLink>
          <NavLink to="about" className="linkText mx-3 px-2">
            ABOUT
          </NavLink>
          <NavLink to="/contact" className="linkText mx-3 px-2">
            CONTACT US
          </NavLink>
        </Nav>
      </Container>
      {location.pathname === "/store" && (
        <HeaderCartButton onClick={props.onClick} />
      )}
    </Navbar>
  );
};

export default NavigationBar;
