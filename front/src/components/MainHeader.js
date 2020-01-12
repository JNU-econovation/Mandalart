import React, { Component } from "react";
import "./MainHeader.css";
import { Link } from "react-router-dom";
//import img from "../images/macbook.jpg";

class MainHeader extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     url: "https://media.wired.com/photos/5dee9dde524c380008bedf86/master/pass/Gear_bblue_16-inch-MacBook-Pro-SOURCE-Apple.jpg"
  //   };
  getImageURL() {
    const url = this.props.image;
    return url;
  }
  getMessage() {
    const mes = this.props.message;
    return mes;
  }
  render() {
    const url = this.getImageURL();
    const mes = this.getMessage();
    return (
      <header className="header">
        <h3 id="main_title">
          <Link to="/" className="main_title">
            <span className="main_title">{mes}</span>
          </Link>
        </h3>
        <img src={url} width="100%" height="100%" alt="background_image"></img>
      </header>
    );
  }
}
export default MainHeader;
