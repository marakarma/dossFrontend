import React, { Component, Fragment } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default class FiturCategory extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col md={12} className="mb-3">
              <Row>
                <Col md={3}>
                  <Card style={{ border: "0" }} className="mb-3 mx-2">
                    <Card.Img
                      variant="top"
                      src="https://placeimg.com/100/100/people"
                    />
                    <Card.Body>
                      <Card.Text>Digital Camera</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
