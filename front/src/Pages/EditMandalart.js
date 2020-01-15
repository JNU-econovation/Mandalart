import React from "react";
import { Route } from "react-router-dom";

import Header from "../components/Add_mandalart/Header";
import All_mandal from "../components/Edit_mandalart/All_mandal";

function EditMandalart() {
  return (
    <div>
      <Header />
      <Route path="/add/mandalform" component={All_mandal} />
    </div>
  );
}

export default EditMandalart;
