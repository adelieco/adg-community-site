import React from "react";
import Link from "gatsby-link";

const s = {
  logo: {
    textDecoration: 'none',
    fontVariant: 'small-caps',
  },
  header: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }
}

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <header style={s.header}>
    <Link to="/" style={s.logo}>
      <h3 style={{ display: `inline` }}>ADELIEid</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/members/">Members</ListLink>
      <ListLink to="/join/">Join</ListLink>
    </ul>
  </header>
