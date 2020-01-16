import { Route } from "react-router-dom";
import React from "react";
import Header from "../components/Edit_mandalart/Header";
import styled from "styled-components";
import All_mandal from "../components/Edit_mandalart/All_mandal";

function EditMandalart() {
  return (
    <div>
      <Layout>
        <HeaderBox>
          <Header />
        </HeaderBox>
        <Route path="/add/mandalform" component={All_mandal} />
        {/* <All_mandal data={props.location.state} /> */}
      </Layout>
    </div>
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
