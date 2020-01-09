import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
//import Guestpage from "./pages/Guestpage";
import Test from "./pages/Test";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Mainpage} />
        <Route path="/test" component={Test} />
      </Router>
    );
  }
}

export default App;
