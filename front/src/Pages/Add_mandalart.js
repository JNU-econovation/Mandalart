import React, { Component } from "react";
import Header from "../Components/Add_mandalart/Header";
import Property_form from "../Components/Add_mandalart/Mandalart_Property/Property_form";

class Add_mandalart extends Component {
  render() {
    return (
      <div>
        <Header />
        <Property_form />
      </div>
    );
  }
}

export default Add_mandalart;
