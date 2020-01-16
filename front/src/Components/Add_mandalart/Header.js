import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";

class Header extends Component {
  render() {
    return (
      <HeaderComponent>
        <NamedIcon>
          <Icon icon={ic_keyboard_backspace} size={37} />
        </NamedIcon>
        <Title>new Mandalart</Title>
      </HeaderComponent>
    );
  }
}

export default Header;

const HeaderComponent = styled.section`
  display: flex;
  flex-direction: row;
`;

const NamedIcon = styled.image``;

const Title = styled.td`
  td-align: center;
  display: flex;
`;
