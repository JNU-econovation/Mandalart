import React, { Component } from "react";
import styled from "styled-components";
import withLogin from "./LoginHOC";

class NewMandal extends Component {
  render() {
    return <button>MAKE MANDAL</button>;
  }
}

export default withLogin(NewMandal);
