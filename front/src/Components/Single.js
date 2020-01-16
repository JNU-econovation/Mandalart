import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Single.css";

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = { Namelist: [] };
  }

  async componentDidMount() {
    let { data: Namelist } = await axios.post("/"); //root니까 index.js로 연결됨
    this.setState({ Namelist });
  }

  render() {
    const { Namelist } = this.state;
    if (Namelist.length > 0) {
      return Object.keys(img).map(key => {
        return Namelist.map(value => {
          // console.log(Math.floor(Math.random() * key) + 1);
          console.log("key", key);
          console.log(`${value.goal100}`);
          return (
            <>
              <Link
                to={{
                  pathname: `/personal_mandalart/${value.mid}`,
                  state: { value }
                }}
              >
                <div key={value.mid} className="mandals_oneMandal">
                  <div className="mandals_mandalImage">
                    <div className="mandals_image">
                      <img
                        id="title_image"
                        //순서만 랜덤이 될 수 있도록 수정할 것
                        src={img[Math.floor(Math.random() * 10) + 1]}
                      ></img>
                    </div>
                  </div>
                  <div className="mandals_mandalName">
                    <div>{value.goal100}</div>
                  </div>
                </div>
              </Link>
            </>
          );
        });
      });
    } else {
      return <h3>No Information</h3>;
    }
  }
}

export default Namelist;
