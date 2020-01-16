import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";

class Header extends Component {
  render() {
    return (
      <HeaderComponent>
        {/* <NamedIcon>
          <Icon icon={ic_keyboard_backspace} size={37} />
        </NamedIcon> */}
        <Link to="/" className="maintitle">
          <Title>NEW MANDALPLAN</Title>
        </Link>
      </HeaderComponent>
    );
  }
}

export default Header;

const HeaderComponent = styled.section`
  display: flex;
  flex-direction: row;

  .maintitle {
    text-decoration: none;
  }
`;

// const NamedIcon = styled.image``;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  display: flex;
  color: black;
  /* text-decoration: none; */
`;
