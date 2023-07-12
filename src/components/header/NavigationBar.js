import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import "./NavigationBar.css";
import HeaderCartButton from "./HeaderCartButton";
import AuthContext from "../store/AuthContext";

const NavigationBar = (props) => {
  const authCtx = useContext(AuthContext);
  const location = useLocation();

  const logoutHandler = () => {
    authCtx.logout();
  };

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
      <NavLink to="/auth" className="linkText mx-3">
        {!authCtx.isLoggedIn && "Login"}
      </NavLink>
      {authCtx.isLoggedIn && (
        <Button type="button" className="auth-button mx-3" onClick={logoutHandler}>
          Logout
        </Button>
      )}
      {location.pathname === "/store" && (
        <HeaderCartButton onClick={props.onClick} />
      )}
    </Navbar>
  );
};

export default NavigationBar;
