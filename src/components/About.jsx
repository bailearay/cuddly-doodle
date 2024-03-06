import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Menu } from "./Menu";

export const About = () => {
  return (
    <div className="page dark">
      <div className="margin-header">
        <Container className="p-0" fluid>
          <Row className="flexD gy-3">
            <Col xs={12} sm={6} className="justify p-0">
              <Menu opt1={"home"} opt2={"skills"} opt3={"contact"} />
            </Col>

            <Col xs={12} sm={6}>
              <h1 className="title">About</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="summary">
        <p>
          During my time at Dalton State College, I have gained experience in
          many areas of Information Technology, but in my first Introduction to
          Programming class, I knew I found what I was most passionate about.
        </p>
      </div>
    </div>
  );
};
