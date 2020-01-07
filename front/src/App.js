import React from "react";
import { Home, Add_mandalart, Edit_mandalart } from "./Pages";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/addmandal" component={Add_mandalart} />
      <Route path="/editmandal" component={Edit_mandalart} />
    </div>
  );
}

export default App;
