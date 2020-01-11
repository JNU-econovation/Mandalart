import React, { Component } from "react";
import MainHeader from "../components/MainHeader";
import MultiMandalBox from "../components/MultiMandalBox";
import LoadButton from "../components/LoadButton";

class Mainpage extends Component {
  render() {
    return (
      <>
        <LoadButton message="정보"></LoadButton>
        <MainHeader
          image="https://cdn.ppomppu.co.kr/zboard/data3/2019/0922/20190922122632_gwtyinan.jpg"
          message="MANDALART"
        />
        <MultiMandalBox />
      </>
    );
  }
}

export default Mainpage;
