import React, { Component } from "react";
import "./Personal_mandalart.css";
import { Link } from "react-router-dom";
import Mainfooter from "../components/Mainfooter";

// import axios from "axios";

class Personal_mandalart extends Component {
  async componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
  }

  render() {
    const value = this.props.location.state.value;
    return (
      <div className="out">
        <h3>
          <Link to="/" className="main_title">
            <span className="main_title">MANDALPLAN</span>
          </Link>
        </h3>
        <br />
        <div className="in">
          <table className="table" border="3">
            <tr className="line1">
              <td id="p11">{value.goal11}</td>
              <td id="p12">{value.goal12}</td>
              <td id="p13">{value.goal13}</td>
              <td id="p21">{value.goal21}</td>
              <td id="p22">{value.goal22}</td>
              <td id="p23">{value.goal23}</td>
              <td id="p31">{value.goal31}</td>
              <td id="p32">{value.goal32}</td>
              <td id="p33">{value.goal33}</td>
            </tr>
            <tr className="line2">
              <td id="p18">{value.goal18}</td>
              <td id="p10">{value.goal10}</td>
              <td id="p14">{value.goal14}</td>
              <td id="p28">{value.goal28}</td>
              <td id="p20">{value.goal20}</td>
              <td id="p24">{value.goal24}</td>
              <td id="p38">{value.goal38}</td>
              <td id="p30">{value.goal30}</td>
              <td id="p34">{value.goal34}</td>
            </tr>
            <tr className="line3">
              <td id="p17">{value.goal17}</td>
              <td id="p16">{value.goal16}</td>
              <td id="p15">{value.goal15}</td>
              <td id="p27">{value.goal27}</td>
              <td id="p26">{value.goal26}</td>
              <td id="p25">{value.goal25}</td>
              <td id="p37">{value.goal37}</td>
              <td id="p36">{value.goal36}</td>
              <td id="p35">{value.goal35}</td>
            </tr>
            <tr className="line4">
              <td id="p81">{value.goal81}</td>
              <td id="p82">{value.goal82}</td>
              <td id="p83">{value.goal83}</td>
              <td id="p10">{value.goal10}</td>
              <td id="p20">{value.goal20}</td>
              <td id="p30">{value.goal30}</td>
              <td id="p41">{value.goal41}</td>
              <td id="p42">{value.goal42}</td>
              <td id="p43">{value.goal43}</td>
            </tr>
            <tr className="line5">
              <td id="p88">{value.goal88}</td>
              <td id="p80">{value.goal80}</td>
              <td id="p84">{value.goal84}</td>
              <td id="p80">{value.goal80}</td>
              <td id="p100">{value.goal100}</td>
              <td id="p40">{value.goal40}</td>
              <td id="p48">{value.goal48}</td>
              <td id="p40">{value.goal40}</td>
              <td id="p44">{value.goal44}</td>
            </tr>
            <tr className="line6">
              <td id="p86">{value.goal86}</td>
              <td id="p87">{value.goal87}</td>
              <td id="p85">{value.goal85}</td>
              <td id="p70">{value.goal70}</td>
              <td id="p60">{value.goal60}</td>
              <td id="p50">{value.goal50}</td>
              <td id="p47">{value.goal47}</td>
              <td id="p46">{value.goal46}</td>
              <td id="p45">{value.goal45}</td>
            </tr>
            <tr className="line7">
              <td id="p71">{value.goal71}</td>
              <td id="p72">{value.goal72}</td>
              <td id="p73">{value.goal73}</td>
              <td id="p61">{value.goal61}</td>
              <td id="p62">{value.goal62}</td>
              <td id="p63">{value.goal63}</td>
              <td id="p51">{value.goal51}</td>
              <td id="p52">{value.goal52}</td>
              <td id="p53">{value.goal53}</td>
            </tr>
            <tr className="line8">
              <td id="p78">{value.goal78}</td>
              <td id="p70">{value.goal70}</td>
              <td id="p74">{value.goal74}</td>
              <td id="p68">{value.goal68}</td>
              <td id="p60">{value.goal60}</td>
              <td id="p64">{value.goal64}</td>
              <td id="p58">{value.goal58}</td>
              <td id="p50">{value.goal50}</td>
              <td id="p54">{value.goal54}</td>
            </tr>
            <tr className="line9">
              <td id="p77">{value.goal77}</td>
              <td id="p76">{value.goal76}</td>
              <td id="p75">{value.goal75}</td>
              <td id="p67">{value.goal67}</td>
              <td id="p66">{value.goal66}</td>
              <td id="p65">{value.goal65}</td>
              <td id="p57">{value.goal57}</td>
              <td id="p56">{value.goal56}</td>
              <td id="p55">{value.goal55}</td>
            </tr>
          </table>
          <br />
          <br />
        </div>
        <div className="comment">댓글</div>
        <Mainfooter />
      </div>
    );
  }
}

export default Personal_mandalart;
