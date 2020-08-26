import React, { Component } from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";

import Collapse from "react-bootstrap/esm/Collapse";

export default class header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/img.jpg"
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/about"> About us </Nav.Link>
              <Nav.Link href="/contacts"> Contacts </Nav.Link>
              <Nav.Link href="/blog"> Blog </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
