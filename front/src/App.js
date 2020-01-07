import React from "react";
//import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main_page from "./pages/Main_page";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main_page} />
    </Router>
  );
}

export default App;
