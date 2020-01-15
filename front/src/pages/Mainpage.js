import React, { Component } from "react";
import MainHeader from "../components/MainHeader";
import MultiMandalBox from "../components/MultiMandalBox";
import LoadButton from "../components/LoadButton";
import "./Mainpage.css";
import Namelist from "../components/Namelist";
import Mainfooter from "../components/Mainfooter";
import SingleMandalBox from "../components/SingleMandalBox";
import { Link } from "react-router-dom";

class Mainpage extends Component {
  render() {
    return (
      <>
        {/* <LoadButton></LoadButton> */}
        <MainHeader
          image="https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          message="MANDALPLAN"
        />

        <div className="main_mandal">
          <h3 className="my_mandal">나의 만다라트</h3>
          <div className="my_mandalplan">
            <Link to="/add">
              <SingleMandalBox></SingleMandalBox>
            </Link>
            <Namelist></Namelist>
          </div>
          <h3>친구의 만다라트</h3>
          <div className="friends">
            <Namelist></Namelist>
          </div>
          <h3>주목받는 만다라트</h3>
          <div className="popular">
            <Namelist></Namelist>
          </div>
          <h3>신규 만다라트</h3>
          <div className="new">
            <Namelist></Namelist>
          </div>
        </div>

        <Mainfooter></Mainfooter>
      </>
    );
  }
}

export default Mainpage;
