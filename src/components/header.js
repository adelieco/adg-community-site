import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import headerS from 'scss/header.scss'
import AdelieLogo from 'assets/img/adelie-logo.png';

const ListLink = props =>
  <li className="header__nav-link">
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <header className="header">
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Kalam" rel="stylesheet" />
    </Helmet>
    <Link to="/" className="header__logo-container">
      <img className="header__logo" src={AdelieLogo} />
      <span>ID</span>
    </Link>
    <ul className="header__nav-items">
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/members/">Members</ListLink>
      <ListLink to="/join/">Join</ListLink>
    </ul>
  </header>
