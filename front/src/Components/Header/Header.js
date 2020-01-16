import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { logged, onLogout } = this.props;

    return (
      <Container>
        <Element>
          {logged ? (
            <ShortCut>
              <Link to="/" onClick={onLogout}>
                로그아웃
              </Link>
            </ShortCut>
          ) : (
            <ShortCut>
              <Link to="/login">로그인/회원가입</Link>
            </ShortCut>
          )}
        </Element>
      </Container>
    );
  }
}

export default Header;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #d1d834;
`;

const Element = styled.div`
  margin: 0 auto;
  width: 1080px;
  height: 100px;
  display: flex;
  flex-flow: row wrap;
`;

const ShortCut = styled.div`
  order: 1;
  width: 100%;
  height: 20px;
  td-align: right;
  background-color: #a8ff78;
`;
