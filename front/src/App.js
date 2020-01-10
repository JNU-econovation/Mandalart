import React from "react";
import axios from "axios";
import Add_mandalart from "./Pages/Add_mandalart";

function App() {
  const submit = async () => {
    const result = await axios.post("/", { number: 1 });
    if (result.status === 200) alert("성공");
  };
  return (
    /*
    <div>
      <button onClick={submit}>숫자 저장하기</button>
    </div>
    */
    <Add_mandalart />
  );
}

export default App;
