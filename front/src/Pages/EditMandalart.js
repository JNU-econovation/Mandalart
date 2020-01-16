import React from "react";
import Header from "../components/Edit_mandalart/Header";
import { Route } from "react-router-dom";
import styled from "styled-components";
import All_mandal from "../components/Edit_mandalart/All_mandal";

function EditMandalart(props) {
  console.log(props.location.state);
  return (
    <Layout>
      <HeaderBox>
        <Header />
      </HeaderBox>
      <All_mandal data={props.location.state} />
    </Layout>
  );
}

export default EditMandalart;

const Layout = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderBox = styled.section`
  margin-top: 20px;
  margin-bottom: 30px;
`;
