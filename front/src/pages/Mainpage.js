import React, { Component } from "react";
// import axios from "axios";
import MainHeader from "../components/MainHeader";
import MultiMandalBox from "../components/MultiMandalBox";

class Mainpage extends Component {
  render() {
    return (
      <>
        <MainHeader
          image="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F9961703F5A488F8F16C035"
          message="MANDALART"
        />
        <MultiMandalBox />
      </>
    );
  }
}

export default Mainpage;
