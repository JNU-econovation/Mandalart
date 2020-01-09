import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
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
        <Link to="/login">
          <button> 로그인</button>
        </Link>
        <MainHeader
          image="https://media.wired.com/photos/5dee9dde524c380008bedf86/master/pass/Gear_bblue_16-inch-MacBook-Pro-SOURCE-Apple.jpg"
          message="MANDALART"
        />
        {/* <MainHeader image={image1} />
        <MainHeader image={image2} />
        <MainHeader image={image3} /> */}
      </>
    );
  }
}

export default Guestpage;
