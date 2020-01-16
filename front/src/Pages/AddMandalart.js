import React, { Component } from "react";
import Header from "../components/Add_mandalart/Header";
import Propertyform from "../components/Add_mandalart/Propertyform";
import styled from "styled-components";

class AddMandalart extends Component {
  render() {
    return (
      <Layout>
        <HeaderBox>
          <Header />
        </HeaderBox>
        <Propertyform />
      </Layout>
    );
  }
}

export default AddMandalart;

const Layout = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const HeaderBox = styled.section`
  margin-top: 20px;
  margin-bottom: 30px;
`;
