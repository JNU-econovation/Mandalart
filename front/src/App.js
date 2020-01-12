import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Test from "./pages/Test";
import Guestpage from "./pages/Guestpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Personal_mandalart from "./pages/Personal_mandalart";
import "./App.css";

import Add_mandalart from "./Pages/Add_mandalart";
import Home from "./Pages/Home";
import Edit_mandalart from "./Pages/Edit_mandalart";


function App() {
  /*
  const submit = async () => {
    const result = await axios.post("/", { number: 1 });
    if (result.status === 200) alert("성공");
  };
  */
  return (

      <Router>
        {/* BrowserRouter 즉 Router로 감싸야 라우팅을 할 수 있음 */}
        <Switch>
          {/* 하위 라우터 중 하나를 선택 */}
          <Route exact path="/" component={Mainpage} />
          <Route path="/test" component={Test} />
          <Route path="/guest" component={Guestpage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/personal_mandalart/:mid"
            component={Personal_mandalart}
          />
        </Switch>
      </Router>
    <Edit_mandalart />

  );
}

export default App;
