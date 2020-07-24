import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import ImageAreaIcon from "mdi-react/ImageAreaIcon";

function NavBar(props) {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        className="border-bottom py-0"
      >
        <Navbar.Brand href="#home">
          <ImageAreaIcon size={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <IndexLinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/event">
              <Nav.Link>Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/counter">
              <Nav.Link>Counter</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
