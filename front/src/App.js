import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Guestpage from "./pages/Guestpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Personal_mandalart from "./pages/Personal_mandalart";
import AddMandalart from "./pages/AddMandalart";
import EditMandalart from "./pages/EditMandalart";
import PhoneForm from "./pages/test";

function App() {
  /*
  const submit = async () => {
    const result = await axios.post("/", { number: 1 });
    if (result.status === 200) alert("성공");
  };
  */
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route path="/guest" component={Guestpage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/personal_mandalart/:mid"
            component={Personal_mandalart}
          />
          <Route path="/add/mandalform" component={EditMandalart}></Route>
          <Route path="/add" component={AddMandalart}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
