import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";

class Header extends Component {
  render() {
    return (
      <HeaderComponent>
        <Icon icon={ic_keyboard_backspace} size={37} />
        <Title>new Mandalart</Title>
      </HeaderComponent>
    );
  }
}

export default Header;

const HeaderComponent = styled.section``;

const Title = styled.text``;
