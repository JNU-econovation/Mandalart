import React, { Component } from "react";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import { Router, BrowserRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout
    };
  }

  // Login Func
  onLogin = () => {
    this.setState({
      logged: true
    });
  };

  // Logout Func
  onLogout = () => {
    this.setState({
      logged: false
    });
  };

  render() {
    const { logged, onLogout } = this.state;

    return (
      <container>
        <Header logged={logged} onLogout={onLogout} />
        <Login />
      </container>
    );
  }
}
export default Home;
