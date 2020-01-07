import React, { Component } from "react";
import "./Header.css";
import macbook from "../images/macbook.jpg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h3 id="main_title">MANDALART</h3>
        <img
          src={macbook}
          width="100%"
          height="100%"
          alt="background_image"
        ></img>
      </header>
    );
  }
}
export default Header;
