import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AuthLayout({ children }) {
  return (
    <>
      <Container style={{ height: "100%" }}>
        <Row className="h-100 justify-content-md-center">
          <Col md="8" lg="6" className="my-auto p-3 m4">
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AuthLayout;
