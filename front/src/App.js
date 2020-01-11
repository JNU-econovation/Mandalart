import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Test from "./pages/Test";
import Guestpage from "./pages/Guestpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
//import axios from "axios";

function App() {
  return (
    <>
      <Router>
        {/* BrowserRouter 즉 Router로 감싸야 라우팅을 할 수 있음 */}
        <Switch>
          {/* 하위 라우터 중 하나를 선택 */}
          <Route exact path="/" component={Mainpage} />
          <Route path="/test" component={Test} />
          <Route path="/guest" component={Guestpage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
