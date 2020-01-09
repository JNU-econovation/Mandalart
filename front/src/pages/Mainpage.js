import React, { Component } from "react";
// import axios from "axios";
import MainHeader from "../components/MainHeader";
import MultiMandalBox from "../components/MultiMandalBox";

class Mainpage extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <MultiMandalBox />
      </>
    );
  }
}

export default Mainpage;
