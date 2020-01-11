import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import "./Guestpage.css";
import Mainfooter from "../components/Mainfooter";
import Namelist from "../components/Namelist";
// import image1 from "../images/image1.png";
// import image2 from "../images/image2.png";
// import image3 from "../images/image3.png";

// function Guest() {
//   <>
//     return <MainHeader />;
//   </>;
// }
class Guestpage extends Component {
  render() {
    return (
      <>
        <Link to="/">
          <button className="button"> 로그인</button>
        </Link>
        <MainHeader
          image="https://images.unsplash.com/photo-1548391350-968f58dedaed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          message="MANDALART"
        />
        {/* <MainHeader image={image1} />
        <MainHeader image={image2} />
        <MainHeader image={image3} /> */}
        <h3>주목받는 만다라트</h3>
        <Namelist></Namelist>
        <Mainfooter></Mainfooter>
      </>
    );
  }
}

export default Guestpage;
