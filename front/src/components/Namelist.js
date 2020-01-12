import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Namelist.css";

// const Nameset = "/users";

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
      return Namelist.map(value => {
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
                  만다라트 아이디 : {value.mid}
                </div>
                <div className="mandals_mandalName">목표 : {value.goal100}</div>
              </div>
            </Link>
          </>
        );
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
