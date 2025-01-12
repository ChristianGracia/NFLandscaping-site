import React from "react";

import "./landing-page.styles.scss";
import { Button } from "react-bootstrap";

const LandingPage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>
    <div
      className="backgroundImage"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="container">
        <div className="logo-landing"></div>

        <span className="quote">
          “We see our customers as invited guests to a party, and we are the
          hosts. It’s our job to make the customer experience a little bit
          better.”
        </span>
        <span className="quoteSign">-Jeff Bezos, Founder of Amazon</span>
        <div>
          <Button
            className="landingButton"
            onClick={() => (window.location.href = "/home")}
          >
            Join the Party
          </Button>
        </div>
      </div>
    </div>
  </div>
);
export default LandingPage;
