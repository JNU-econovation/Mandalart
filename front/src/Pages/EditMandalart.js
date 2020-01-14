import React from "react";
import Header from "../components/Add_mandalart/Header";
import { Route } from "react-router-dom";
import All_mandal from "../components/Edit_mandalart/All_mandal";

function EditMandalart(props) {
  console.log(props.location.state);
  return (
    <div>
      <Header />
      <All_mandal data={props.location.state} />
    </div>
  );
}

export default EditMandalart;
