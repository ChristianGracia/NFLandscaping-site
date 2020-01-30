import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./home-header.styles.scss";

export default class HomeHeader extends Component {
  render() {
    return (
      <div style={{}}>
        <Navbar collapseOnSelect expand="lg" className="navbar-inner navbar">
          <Navbar.Brand href="/home">
            <i class="fas fa-home"></i>
          </Navbar.Brand>
          <NavDropdown
            title="Services"
            class="dropdown-menu"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/landscaping">Landscaping</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/property-management">
              Property Management
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/trash-removal">
              Trash Removal
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <div style={{ textAlign: "center" }} className="social-links">
                <a href="https://www.facebook.com/Natures-View-Landscaping-131440330221618/">
                  <span>
                    <i
                      className="fab fa-facebook"
                      style={{ color: "black", fontSize: 20 }}
                    ></i>
                  </span>
                </a>
                <span style={{ padding: 10 }}></span>

                <a href="http://www.twitter.com/CG_CODING">
                  <span>
                    <i
                      className="fab fa-twitter"
                      style={{ color: "black", fontSize: 20 }}
                    ></i>
                  </span>
                </a>
                <span style={{ padding: 10 }}></span>
                <a href="https://www.instagram.com/natures_frontier_landscaping/">
                  <span>
                    <i
                      className="fab fa-instagram"
                      style={{ color: "black", fontSize: 20 }}
                    ></i>
                  </span>
                </a>
              </div>

              {/* <Nav.Link eventKey={2} href="#memes">
                Login
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
