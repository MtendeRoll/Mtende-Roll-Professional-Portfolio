import React from "react";
import "./style.css";

function Contact(props) {
  return (
    <main className="container my-5">
      <div className="row">
        <div className="content contact col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <div className="row">
            <header className="ml-2 mt-4 col-md-12">
              <h3>Contact</h3>
            </header>
          </div>

          <div className="row">
            <div className="col-md-12">
              <hr className="solid mx-2" />
            </div>
          </div>

          <div className="row pb-3">
            <form className="col-lg-12 col-md-12">
              <div className="form-group">
                <label for="userName">Name</label>
                <input type="text" className="form-control" id="userName" placeholder="Trip Flippins" />
              </div>
              <div className="form-group">
                <label for="userEmail">Email</label>
                <input type="email" className="form-control" id="userEmail" placeholder="tripflip79@hotmail.net" />
              </div>
              <div className="form-group">
                <label for="userMessage">Message</label>
                <textarea className="form-control" id="userMessage"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <h5>Email</h5>
          <p>rollmtende@gmail.com</p>
          <br />
          <h5>Phone</h5>
          <p>336-524-1701</p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
