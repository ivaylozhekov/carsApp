declare var require: any;
import * as React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router";

// tslint:disable-next-line:no-var-requires
const cotroenLogo = require("../../../../assets/images/logoCitroen.png");

interface PropTypes {
  navigationElements: string[];
}

export const Header: React.StatelessComponent<PropTypes> = ({
  navigationElements
}) => (
  <Navbar fluid className="app-header">
    <Navbar.Header>
      <Navbar.Brand>
        <img src={cotroenLogo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        {navigationElements.map(navElement => (
          <NavItem key={navElement} eventKey={navElement}>
            <Link
              className="menu-item"
              to={`/${navElement.toLocaleLowerCase()}`}
              activeClassName="active"
            >
              {navElement}
            </Link>
          </NavItem>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
