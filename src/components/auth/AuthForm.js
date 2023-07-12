import { useContext, useRef } from "react";
import { Form, Button } from "react-bootstrap";

import "./AuthForm.css";
import AuthContext from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const enteredInputEmailRef = useRef();
  const enteredInputPasswordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = enteredInputEmailRef.current.value;
    const enteredPassword = enteredInputPasswordRef.current.value;

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
      authCtx.login(data.idToken);
      navigate("/store");
    }
  };
  return (
    <Form onSubmit={submitHandler} className="auth">
      <h2>Login</h2>
      <Form.Group className="control" controlId="formGroupEmail">
        <Form.Label> Your Email </Form.Label>
        <Form.Control type="email" required ref={enteredInputEmailRef} />
      </Form.Group>
      <Form.Group className="control" controlId="formGroupPassword">
        <Form.Label> Your Password</Form.Label>
        <Form.Control type="password" required ref={enteredInputPasswordRef} />
      </Form.Group>
      <div className="actions">
        <Button type="submit">Login</Button>
      </div>
    </Form>
  );
};
export default AuthForm;
