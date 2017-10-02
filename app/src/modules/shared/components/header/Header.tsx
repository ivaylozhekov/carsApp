declare var require: any;
import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

interface PropTypes {
  navigationElements: string[];
}

export class Header extends React.Component<PropTypes, {}> {
  public render() {
    const cotroenLogo = require('../../../../assets/images/logoCitroen.png');
    const { navigationElements } = this.props;
    return (
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
                </Link >
              </NavItem>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
