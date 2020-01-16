import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
import "./My_page.css";
import Namelist from "../components/Namelist";
import img from "../images/image14.jpg";
import img1 from "../images/girl.jpg";
import Mainfooter from "../components/Mainfooter";
function My_page() {
  return (
    <section className="mypage-container">
      <img src={img} alt="picture" className="background"></img>
      <img className="profile_image" src={img1}></img>
      <div className="user_info">
        <h3 className="user_name">Jody O'Leary</h3>
        <div className="address">
          Chonnam National University, information calculate center, Yongbong-ro
          77, <strong>ECONOVATION</strong>
        </div>
        <br />
        <hr />
        <br /> <br />
      </div>

      <div className="favorite-wrap">
        <h1 className="favorite">Favorite Mandalplan</h1>
        <div className="one_mandalplan-wrapper">
          <div className="one_mandalplan">
            <div className="mandals_seperate">
              <Namelist></Namelist>
            </div>
          </div>

          <div className="mention">
            <h3>GOAL : 전문성 가지기</h3>
            <hr />
            DESCRIPTION : 전문성을 가지기 위해 노력해야할 것들을 만다라트로
            작성해보았습니다. 프로젝트 경험, 프로그래밍 지식, 삶의 태도,
            영어공부, 생각정리, 건강한 몸, 같은 사람들과 영감교류를 통해
            대학생활중 제 전문성을 기르기 위한 노력을 할 것 입니다.
          </div>
        </div>
        <div className="one_mandalplan-wrapper">
          <div className="one_mandalplan">
            <div className="mandals_seperate">
              <Namelist></Namelist>
            </div>
          </div>

          <div className="mention">
            <h3>GOAL : 전문성 가지기</h3>
            <hr />
            DESCRIPTION : 전문성을 가지기 위해 노력해야할 것들을 만다라트로
            작성해보았습니다. 프로젝트 경험, 프로그래밍 지식, 삶의 태도,
            영어공부, 생각정리, 건강한 몸, 같은 사람들과 영감교류를 통해
            대학생활중 제 전문성을 기르기 위한 노력을 할 것 입니다.
          </div>
        </div>
      </div>

      <div className="mandals_mypage">
        <h1 className="favorite">Mandalplan</h1>
        <Namelist></Namelist>
      </div>
      <Mainfooter></Mainfooter>
    </section>
  );
}

export default My_page;
