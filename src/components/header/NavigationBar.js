import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css"
import HeaderCartButton from "./HeaderCartButton";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = props => {
  const location = useLocation();

  return (
    <Navbar fixed="top">
      <Container>
        <Nav className="m-auto">
          <NavLink to="/home" className="linkText pe-5">
            HOME
          </NavLink>
          <NavLink to="/" className="linkText pe-5">
            STORE
          </NavLink>
          <NavLink to="about" className="linkText">
            ABOUT
          </NavLink>
        </Nav>
      </Container>
      {location.pathname === "/" && <HeaderCartButton onClick={props.onClick}/>}
    </Navbar>
  );
};

export default NavigationBar;
