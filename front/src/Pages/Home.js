import React, { Component } from "react";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import Store from "../Store/store";

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

    const provider = window.sessionStorage.getItem("provider");
    // Google AccessToken Remove
    if (provider === "google") {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log("Google Logout");
      });
    }
    // sessionStorage Clear
    window.sessionStorage.clear();
  };

  componentDidMount() {
    const id = window.sessionStorage.getItem("id");
    if (id) {
      this.onLogin();
    } else {
      this.onLogout();
    }
  }

  render() {
    const { logged, onLogout } = this.state;

    return (
      <Store.Provider value={this.state}>
        <Header logged={logged} onLogout={onLogout} />
        <Login />
      </Store.Provider>
    );
  }
}
export default Home;
