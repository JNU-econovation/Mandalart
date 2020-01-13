import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form"; //훅 설치해야함

function All_mandal() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axios.post("/api/mandalform", data);
    console.log("insert success");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table border="1">
          <tr>
            <input type="text" name="goal10" id="goal10" ref={register}></input>
            <input type="text" name="goal20" id="goal20" ref={register}></input>
            <input type="text" name="goal30" id="goal30" ref={register}></input>
          </tr>
          <tr>
            <input type="text" name="goal80" id="goal80" ref={register}></input>
            <input
              type="text"
              name="goal100"
              id="goal100"
              ref={register}
            ></input>
            <input type="text" name="goal40" id="goal40" ref={register}></input>
          </tr>
          <tr>
            <input type="text" name="goal70" id="goal70" ref={register}></input>
            <input type="text" name="goal60" id="goal60" ref={register}></input>
            <input type="text" name="goal50" id="goal50" ref={register}></input>
          </tr>
        </table>
        <button type="submit" id="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default All_mandal;
