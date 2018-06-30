import React from "react";
import Link from "gatsby-link";
import headerS from 'scss/header.scss'


const ListLink = props =>
  <li className="header__nav-link">
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <header className="header">
    <Link to="/" className="logo">
      <h3 className="header__logo">ADELIEid</h3>
    </Link>
    <ul className="header__nav-items">
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/members/">Members</ListLink>
      <ListLink to="/join/">Join</ListLink>
    </ul>
  </header>
