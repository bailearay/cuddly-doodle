import React from "react";
import { Menu } from "./Menu";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  return (
    <div className="page dark">
      <div className="margin-header">
        <Container className="p-0" fluid>
          <Row className="flexD gy-3">
            <Col xs={12} sm={6} className="justify p-0">
              <Menu opt1={"home"} opt2={"about"} opt3={"contact"} />
            </Col>

            <Col xs={12} sm={6}>
              <h1 className="title">Skills</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
