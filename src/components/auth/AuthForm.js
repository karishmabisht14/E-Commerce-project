import { useContext, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./AuthForm.css";
import AuthContext from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const enteredInputEmailRef = useRef();
  const enteredInputPasswordRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = enteredInputEmailRef.current.value;
    const enteredPassword = enteredInputPasswordRef.current.value;

    if (isLogin) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAO0jq1tZ_Wj0KI3WRqDniQgHY9XR7PDCs",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        alert(data.error.message);
      } else {
        const data = await response.json();
        authCtx.login(data.email, data.idToken);
        navigate("/store");
      }
    } else {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAO0jq1tZ_Wj0KI3WRqDniQgHY9XR7PDCs",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "applicaton/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        authCtx.login(data.email, data.idToken);
        alert("Welcome to the Store");
        navigate("/store");
      } else {
        const data = await response.json();
        let errorMessage = "Authentication Falied!!!";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        alert(errorMessage);
      }
    }
  };
  return (
    <Form onSubmit={submitHandler} className="auth">
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      <Form.Group className="control" controlId="formGroupEmail">
        <Form.Label> Your Email </Form.Label>
        <Form.Control type="email" required ref={enteredInputEmailRef} />
      </Form.Group>
      <Form.Group className="control" controlId="formGroupPassword">
        <Form.Label> Your Password</Form.Label>
        <Form.Control type="password" required ref={enteredInputPasswordRef} />
      </Form.Group>
      <div className="actions">
        <Button type="submit">{isLogin ? "Login" : "Create Account"}</Button>
        <Button
          type="button"
          className="toggle"
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </Button>
      </div>
    </Form>
  );
};
export default AuthForm;
