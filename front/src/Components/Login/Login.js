import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: ""
    };
  }
  // Google Login
  responseGoogle = res => {
    console.log(res);
  };

  // Login fail
  responseFail = err => {
    console.error(err);
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
export default Login;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
