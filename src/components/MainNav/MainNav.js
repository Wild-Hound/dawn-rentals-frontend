import React from "react";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";

function MainNav() {
  const history = useHistory();

  function loginPush(event) {
    history.push("/login");
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="justify-content-start"
    >
      <div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Link to="/">
          <Navbar.Brand>Dawn Rentals</Navbar.Brand>
        </Link>
      </div>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/dashborad" className="NavLink">
              Dashborad
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/admin" className="NavLink">
              Admin
            </Link>
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link
            href="#deets"
            className="mr-4 d-none d-md-block mainNavCart"
          >
            <Badge variant="success" className="mr-2">
              9
            </Badge>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Nav.Link>
          <Button
            variant="outline-info"
            className="loginBtn"
            onClick={(event) => loginPush(event)}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            LogIn
          </Button>
        </Nav>
      </Navbar.Collapse>

      <Nav.Link
        href="#deets"
        className="ml-auto d-block d-md-none mainNavCart holdCartPosition"
      >
        <Badge variant="success" className="mr-2">
          9
        </Badge>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Nav.Link>
    </Navbar>
  );
}

export default MainNav;
