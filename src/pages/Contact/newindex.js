import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

import "./style.css";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <main className="container my-5">
      <div className="row">
        <div className="content contact col-lg-8 col-md-8 col-sm-12 col-xs-12 my-1">
          <div className="row">
            <header className=" mt-4 col-md-12">
              <h3>Contact</h3>
            </header>
          </div>

          <div className="row">
            <div className="col-md-12">
              <hr className="solid mx-2" />
            </div>
          </div>

          <div className="row pb-3">
            <form className="col-lg-12 col-md-12" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange} placeholder="Type your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange} placeholder="typeyour@email.here" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange}></textarea>
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="my-5 col-lg-4 col-md-4 col-sm-12 col-xs-12 contact-info">
          <h5>Email</h5>
          <p>rollmtende@gmail.com</p>
          <br />
          <h5>Phone</h5>
          <p>336-524-1701</p>
          <button type="submit" className="contact-btn">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}

export default Contact;
