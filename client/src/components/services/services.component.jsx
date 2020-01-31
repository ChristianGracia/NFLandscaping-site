import React from "react";
import { Card } from "react-bootstrap";
import "./services.styles.scss";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <Fade top cascade>
      <div className="services-container">
        <Card className="menu-item">
          <Card.Img
            className="background-image"
            variant="top"
            src={require("../../assets/landscaping-service.jpg")}
          />
          <Card.Body>
            <Card.Title>
              Full Landscaping Services{" "}
              <i class="fas fa-leaf" style={{ color: "green" }}></i>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="menu-item" style={{}}>
          <Card.Img
            className="background-image"
            variant="top"
            src={require("../../assets/landscaping-service.jpg")}
          />
          <Card.Body style={{}}>
            <Card.Title>
              Property Management{" "}
              <i class="fas fa-circle-notch" style={{ color: "red" }}></i>
            </Card.Title>
            <Card.Text style={{ minHeight: "300" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="menu-item" style={{}}>
          <Card.Img
            className="background-image"
            variant="top"
            src={require("../../assets/landscaping-service.jpg")}
          />
          <Card.Body>
            <Card.Title className="title">
              Snow Removal{" "}
              <i class="far fa-snowflake" style={{ color: "#A5F2F3" }}></i>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="menu-item" style={{}}>
          <Card.Img
            className="background-image"
            variant="top"
            src={require("../../assets/landscaping-service.jpg")}
          />
          <Card.Body>
            <Card.Title>
              Trash Removal{" "}
              <i class="fas fa-trash-alt" style={{ color: "#77584C" }}></i>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="menu-item" style={{}}>
          <Card.Img
            className="background-image"
            variant="top"
            src={require("../../assets/landscaping-service.jpg")}
          />
          <Card.Body>
            <Card.Title>
              Bobcat Services{" "}
              <i class="fas fa-truck-loading" style={{ color: "#F8D200" }}></i>{" "}
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="menu-item" style={{}}>
          <Card.Img
            className="background-image"
            variant="top"
            src={require("../../assets/landscaping-service.jpg")}
          />
          <Card.Body>
            <Card.Title>
              Power Washing{" "}
              <i class="fas fa-bath" style={{ color: "#C2C5CC" }}></i>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="menu-item" style={{}}>
          <Card.Img
            className="background-image"
            variant="top"
            src={require("../../assets/landscaping-service.jpg")}
          />
          <Card.Body>
            <Card.Title>
              Consulting <i class="fas fa-user-ninja"></i>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="menu-item" style={{}}>
          <Card.Img
            className="background-image"
            variant="top"
            src={require("../../assets/landscaping-service.jpg")}
          />
          <Card.Body>
            <Card.Title>
              Irrigation{" "}
              <i class="fas fa-eye-dropper" style={{ color: "blue" }}></i>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="menu-item" style={{}}>
          <Card.Img
            className="background-image"
            variant="top"
            src={require("../../assets/landscaping-service.jpg")}
          />
          <Card.Body>
            <Card.Title>
              Fencing{" "}
              <i
                class="fas fa-grip-lines-vertical"
                style={{ color: "#C99E7D" }}
              ></i>
              <i
                class="fas fa-grip-lines-vertical"
                style={{ color: "#C99E7D" }}
              ></i>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="menu-item" style={{}}>
          <Card.Img
            className="background-image"
            variant="top"
            src={require("../../assets/landscaping-service.jpg")}
          />
          <Card.Body>
            <Card.Title>
              Home Improvement{" "}
              <i class="fas fa-hammer" style={{ color: "#848589" }}></i>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Fade>
  );
};

export default Services;
