import React, { Component } from "react";
import "./AboutUsComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

export default class AboutUsComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hakkımızda</h1>
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <Image src="https://picsum.photos/800/600" fluid rounded />
            </Col>
            <Col xs={6} md={6}>
              <Image src="https://picsum.photos/800/600" fluid rounded />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
