import React, { Component } from "react";
import axios from "axios";

const Nameset = "/users";

class Namelist extends Component {
  constructor(props) {
    super(props);
    this.state = { Namelist: [] };
  }

  async componentDidMount() {
    let { data: Namelist } = await axios.get(Nameset);
    this.setState({ Namelist });
  }

  render() {
    const { Namelist } = this.state;

    if (Namelist.length > 0) {
      return Namelist.map(value => {
        return (
          <div key={value.id}>
            <p>id : {value.id}</p>
            <p>username : {value.username}</p>
          </div>
        );
      });
    } else {
      return <h3>No Information</h3>;
    }
  }
}

export default Namelist;
