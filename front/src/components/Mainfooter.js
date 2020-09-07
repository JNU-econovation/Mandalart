import React, { Component } from "react";
import "./Mainfooter.css";
import logo from "../images/mandalplanlogo.png";

class Mainfooter extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <img className="logoimg" src={logo} alt="logo"></img>
          <div></div>
        </div>
      </>
    );
  }
}
export default Mainfooter;
