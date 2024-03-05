import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Menu } from "./Menu";

export const Cover = () => {
  return (
    <div className="page">
      <div className="margin-header">
        <Container className="p-0" fluid>
          <Row className="flexD gy-4">
            <Col xs={12} sm={6} className="justify p-0">
              <Menu opt1="about" opt2="skills" opt3="contact" />
            </Col>

            <Col xs={12} sm={6}>
              <h1 className="title lt-col">Home</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="greet">
        <p className="message">
          Welcome! My name is
          <br className="hideA" />
          <p className="name">
            Bailea
            <br className="hideB" /> Dockery
          </p>{" "}
          <br />I am a Web Application Development
          <br className="hideB" /> Intern and will graduate with a{" "}
          <strong>
            BAS <br /> in Information Technology <br className="hideB" />
          </strong>
          May 2024.
        </p>
      </div>
    </div>
  );
};
