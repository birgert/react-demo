import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImageAreaIcon from "mdi-react/ImageAreaIcon";

function Footer(props) {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <Row>
        <Col lg="3">
          <ImageAreaIcon size={100} />
        </Col>
        <Col lg="3">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>Cool stuff</li>
            <li>Random feature</li>
          </ul>
        </Col>
        <Col lg="3">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>Cool stuff</li>
            <li>Random feature</li>
          </ul>
        </Col>
        <Col lg="3">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>Cool stuff</li>
            <li>Random feature</li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
