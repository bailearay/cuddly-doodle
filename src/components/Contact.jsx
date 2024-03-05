import React from "react";
import { Menu } from "./Menu";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Contact = () => {
  return (
    <div className="page dark">
      <div className="margin-header">
        <Container className="p-0" fluid>
          <Row className="flexD gy-3">
            <Col xs={12} sm={6} className="justify p-0">
              <Menu opt1={"home"} opt2={"about"} opt3={"skills"} />
            </Col>

            <Col xs={12} sm={6}>
              <h1 className="title">Contact</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="summary"></div>

      <Container fluid>
        <Row>
          <Col>
            <h4>GitHub: </h4>
          </Col>
          <Col>
            <a target="_blank" href="https://github.com/bailearay">
              https://github.com/bailearay
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>LinkedIn: </h4>
          </Col>
          <Col>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bailea-dockery-25b2a123a/"
            >
              https://www.linkedin.com/in/bailea-dockery-25b2a123a/
            </a>
          </Col>
        </Row>
      </Container>
      <div className="">
        <p id="goodbye">Thank you for visiting my website!</p>
      </div>
    </div>
  );
};
