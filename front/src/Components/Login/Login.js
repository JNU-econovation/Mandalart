import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: ""
    };
  }

  // Google Login success!
  responseGoogle = res => {
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      provider: "google"
    });
    this.doSignUp();
  };

  // Login Fail
  responseFail = err => {
    console.log(err);
  };

  doSignUp = () => {
    const { id, name, provider } = this.state;

    window.sessionStorage.setItem("id", id);
    window.sessionStorage.setItem("name", name);
    window.sessionStorage.setItem("provider", provider);
    this.props.onLogin();
    this.props.history.push("/");
  };

  render() {
    return (
      <Container>
        <GoogleLogin
          clientId={
            "840223820686-c0au7ef24sptiqte6k1qvedofrcu5sq4.apps.googleusercontent.com"
          }
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
      </Container>
    );
  }
}

export default withRouter(Login);

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
