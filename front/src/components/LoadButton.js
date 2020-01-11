import React, { Component } from "react";
import axios from "axios";

class LoadButton extends Component {
  getMessage() {
    const mes = this.props.message;
    return mes;
  }
  render() {
    // const load = async () => {
    //   const result = await axios.post("/");
    //   if (result.status === 200) {
    //     console.dir(result.data);
    //   }
    // };
    // const mes = this.getMessage();
    return (window.onload = async () => {
      const result = await axios.post("/");
      if (result.status === 200) {
        console.dir(result.data);
      }
    });
    // <div>
    //   {" "}
    //   <button className="LoadButton" onClick={load}>
    //     {" "}
    //     {mes}{" "}
    //   </button>
    // </div>
  }
}

export default LoadButton;
