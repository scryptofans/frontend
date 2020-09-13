import React, { Component } from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Popular from "./pages/popular";
import Home from "./pages/home";
import Contacts from "./pages/contacts";
import About from "./pages/about";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="./img.jpg"
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="./"> Home </Nav.Link>
                <Nav.Link href="./about"> About us </Nav.Link>
                <Nav.Link href="./contacts"> Contacts </Nav.Link>
                <Nav.Link href="./pages/popular"> Popular </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="./about" component={About} />
            <Route exact path="./contacts" component={Contacts} />
            <Route exact path="./pages/popular" component={Popular} />
          </Switch>
        </Router>
      </>
    );
  }
}
