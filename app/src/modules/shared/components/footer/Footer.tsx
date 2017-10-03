declare var require: any;
import * as React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router";
import { FooterElement } from "../../../../models/FooterElement";

interface PropTypes {
  footerElements: FooterElement;
}

export const Footer: React.StatelessComponent<PropTypes> = ({
  footerElements: { Navigation, Text }
}) => (
  <div className="app-footer">
    <div className="footer-element">
      {Navigation.map((nav: string, index: number) => (
        <span key={nav}>
          <a>{nav}</a>&nbsp;&nbsp;{index !== Navigation.length - 1 ? '|' : null}&nbsp;&nbsp;
        </span>
      ))}
    </div>
    <div className="footer-element">{Text}</div>
  </div>
);
