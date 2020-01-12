import React, { Component } from "react";
import MainHeader from "../components/MainHeader";
import MultiMandalBox from "../components/MultiMandalBox";
import LoadButton from "../components/LoadButton";
import "./Mainpage.css";
import Namelist from "../components/Namelist";
import Mainfooter from "../components/Mainfooter";
import SingleMandalBox from "../components/SingleMandalBox";

class Mainpage extends Component {
  render() {
    return (
      <>
        {/* <LoadButton></LoadButton> */}
        <MainHeader
          image="https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          message="MANDALPLAN"
        />
        <h3>나의 만다라트</h3>
        <div className="my_mandalplan">
          <SingleMandalBox></SingleMandalBox>
          <Namelist></Namelist>
        </div>
        <Mainfooter></Mainfooter>
      </>
    );
  }
}

export default Mainpage;
