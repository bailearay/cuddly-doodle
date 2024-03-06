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
      <Container className="gx-4 px-5" fluid>
        <Row>
          <Col sm={4}>
            <div className="card">
              <h4>Languages/Libraries</h4>
              C# <br />
              Javascript <br />
              React <br />
              Bootstrap <br />
              HTML <br />
              CSS <br />
              Python <br />
              Java <br />
              .net <br />
            </div>
          </Col>
          <Col sm={4}>
            <div className="card">
              <h4>Technical Skills</h4>
              Microsoft SQL Server <br />
              Git <br />
            </div>
          </Col>
          <Col sm={4}>
            <div className="card">
              <h4>Soft Skills</h4>
              Good verbal and written communication <br />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
