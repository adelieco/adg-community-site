import React from "react";
import Header from '../components/header'
import normalize from '../assets/vendor/normalize.css';
import base from '../assets/css/base.css';


export default ({ children }) => (
  <div>
    <Header/>
    {children()}
  </div>
);
