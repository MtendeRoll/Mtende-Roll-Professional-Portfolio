import React, { useState } from "react";
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
    setFormState({ ...formState, [event.target.name]: event.target.value });
    setValidated(true);
  };

  return (
    <main className="mx-5 mt-5 text-center">
      <h2 className="mb-4 col-sm-12 col-md-12 col-lg-12 contact "> Contact Mtende for more information! </h2>
      <section className="row">
        <Form noValidate validated={validated} className="col" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <Form.Group className="col" controlId="formBasicName">
              <Form.Label className="contact">Name:</Form.Label>
              <Form.Control className="form-input" required type="name" placeholder="Enter name" defaultValue={name} />
              <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col" controlId="formBasicEmail">
              <Form.Label className="contact">Email address:</Form.Label>
              <Form.Control className="form-input" required type="email" placeholder="Enter email" defaultValue={email} />
              <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
              <Form.Text className="text-muted">*We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label className="contact">Message:</Form.Label>
            <Form.Control className="form-input" as="textarea" rows={3} placeholder="Enter message" defaultValue={message} />
          </Form.Group>

          <Button className="contact-btn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="col contact mt-5">
          <h5>Email</h5>
          <a href="mailto:rollmtende@gmail.com" rel="noreferrer" target="_blank">
            <p>rollmtende@gmail.com</p>
          </a>
          <br />
          <h5>Phone</h5>
          <a href="tel:+13365241701">
            <p>336-524-1701</p>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
