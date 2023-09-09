import { Container, Form, Button } from "react-bootstrap";
import "./Contact.css";
import { useRef, useState } from "react";

const Contact = () => {
  const [saveUser, setSaveUser] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const addUserHandler = async (user) => {
    const response = await fetch(
      "https://react---ecommerce-default-rtdb.firebaseio.com/contactUsers.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("SomeThing went Wrong..");
    } else {
      setSaveUser(true);
    }
  };

  const saveUserDetailsHandler = (e) => {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    addUserHandler(user);
  };

  return (
    <section>
      <Container>
        <h1>Contact US</h1>
        {saveUser && (
          <div className="saveUser-wrap">
            <h5>ThankYou for Contacting Us!!!</h5>
            <p>We will reach you soon...</p>
          </div>
        )}
        {!saveUser && (
          <Form className="form-wrap" onSubmit={saveUserDetailsHandler}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                ref={nameRef}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupTextarea">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type message"
                ref={messageRef}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        )}
      </Container>
    </section>
  );
};

export default Contact;
