import React, { Component } from "react";
import Header from "../components/Add_mandalart/Header";
import Property_form from "../components/Add_mandalart/Mandalart_Property/Property_form";
import styled from "styled-components";

class AddMandalart extends Component {
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

export default AddMandalart;

const Layout = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderBox = styled.section`
  margin-top: 20px;
  margin-bottom: 30px;
`;
