import React from "react";
import ContactForm from "../../components/contact-form/contact-form.component";
import "./contact-page.styles.scss";
import Fade from "react-reveal/Fade";

const ContactPage = () => {
  return (
    <div
      className="contact-page-container"
      style={{ backgroundColor: "#343A40" }}
    >
      <div style={{ padding: 30 }}></div>
      <div className="message-us">
        <p className="contact-header">Contact Form</p>
        <Fade left>
          <span className="send-us-email">Send us an email...</span>
        </Fade>
        <p
          className="company-email"
          style={{ marginTop: 20, marginBottom: 30 }}
        >
          <span style={{ marginRight: 5, fontWeight: "bold" }}>
            <i class="far fa-envelope"></i>
          </span>
          Naturesfrontierlandscaping@gmail.com
        </p>{" "}
        <Fade right>
          <span className="send-us-email">Or leave us a message here!</span>
        </Fade>
      </div>
      <ContactForm />
    </div>
  );
};
export default ContactPage;
