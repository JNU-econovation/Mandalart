import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Namelist.css";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpeg";
import img5 from "../images/image5.jpeg";
import img6 from "../images/image6.jpeg";
import img7 from "../images/image7.jpeg";
import img8 from "../images/image8.jpg";
import img9 from "../images/image9.jpg";
import img10 from "../images/image10.jpg";
import img11 from "../images/image11.jpg";
import img12 from "../images/image12.jpg";
import img13 from "../images/road.jpg";
import img14 from "../images/mandalplan.PNG";
import img15 from "../images/macbook.jpg";

// import * as Math from "lib/math";

// import Image from "./Image";

// const Nameset = "/users";
let img = new Array();
img = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
  10: img10,
  11: img11,
  12: img12,
  13: img13,
  14: img14,
  15: img15
};

class Namelist extends Component {
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

// import React, { Component } from "react";
// import axios from "axios";

// const Nameset = "/users";

// class Namelist extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { Namelist: [] };
//   }

//   async componentDidMount() {
//     let { data: Namelist } = await axios.get(Nameset);
//     this.setState({ Namelist });
//   }

//   render() {
//     const { Namelist } = this.state;

//     if (Namelist.length > 0) {
//       return Namelist.map(value => {
//         return (
//           <div key={value.id}>
//             <p>id : {value.id}</p>
//             <p>username : {value.username}</p>
//           </div>
//         );
//       });
//     } else {
//       return <h3>No Information</h3>;
//     }
//   }
// }

// export default Namelist;
