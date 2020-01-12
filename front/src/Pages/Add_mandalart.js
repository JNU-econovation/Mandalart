import React, { Component } from "react";
import Header from "../Components/Add_mandalart/Header";
import Property_form from "../Components/Add_mandalart/Mandalart_Property/Property_form";
import styled from "styled-components";

class Add_mandalart extends Component {
  render() {
    return (
      <Layout>
        <HeaderBox>
          <Header />
        </HeaderBox>
        <Property_form />
      </Layout>
    );
  }
}

export default Add_mandalart;

const Layout = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderBox = styled.section`
  margin-top: 20px;
  margin-bottom: 30px;
`;
