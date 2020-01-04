import React, { Component } from "react";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import { Router, BrowserRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <container>
          <Header />
          <Login />
        </container>
    );
  }
}
export default Home;
