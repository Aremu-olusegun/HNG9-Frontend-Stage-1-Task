import React from "react";
import "./contact.css";
import logo from "../../icons/zuri-intern.jpg";
import ingressivelogo from "../../icons/ingresive.webp";

const Contact = () => {
  return (
    <>
      <div className="contactOverall">
        <main className="form-container">
          <div className="contact-container">
            <h1 className="contactme">Contact me</h1>
            <p className="contactSubHeader">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <form className="form">
            <div className="first">
              <label htmlFor="first_name" className="input_label">
                First name
                <input
                  className="first_name"
                  id="first_name"
                  type="text"
                  placeholder="Enter your first name"
                  required
                ></input>
              </label>
              <label htmlFor="last_name" className="input_label2">
                Last name
                <input
                  className="last_name"
                  id="last_name"
                  type="text"
                  placeholder="Enter your last name"
                  required
                ></input>
              </label>
            </div>
            <div className="input_labelCont">
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  type="email"
                  placeholder="yourname@email.com"
                  required
                ></input>
              </label>
            </div>
            <div className="messageContainer">
              <label htmlFor="message" className="message">
                Message
                <textarea
                  id="message"
                  type="email"
                  placeholder="send a message and i'll reply as soon as possible..."
                  required
                ></textarea>
              </label>
            </div>
            <div className="checkbox-container">
              <input id="checkbox" type="checkbox" value=""></input>
              <label>
                You agree to providing your data to Aremu Olusegun who may
                contact you.
              </label>
            </div>
            <button id="btn__submit" type="submit">
              Send message
            </button>
          </form>
          {/* <p>The coding challenge has begun</p> */}
        </main>
      </div>
      <footer className="footer">
        <img src={logo} alt="logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img
          src={ingressivelogo}
          alt="ingressivelogo"
          className="ingressivelogo"
        />
      </footer>
    </>
  );
};

export default Contact;
