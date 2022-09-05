import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./style.css";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const { name, email, message } = formState;

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <main>
      <h2> Contact Mtende for more information! </h2>
      <section className="row">
        <Form noValidate validated={validated} className="col" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <Form.Group className="col" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control required type="name" placeholder="Enter name" defaultValue={name} />
              <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" defaultValue={email} />
              <Form.Control.Feedback type="invalid">Please enter your email address</Form.Control.Feedback>
              <Form.Text className="text-muted">*We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter message" defaultValue={message} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="col">
          <h5>Email</h5>
          <p>rollmtende@gmail.com</p>
          <br />
          <h5>Phone</h5>
          <p>336-524-1701</p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
