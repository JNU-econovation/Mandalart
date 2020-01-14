import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function All_mandal(props) {
  const { register, handleSubmit } = useForm();
  console.log(props);
  const onSubmit = data => {
    data["name"] = props.data.name;
    data["goal"] = props.data.goal;
    data["description"] = props.data.description;
    data["mail"] = props.data.mail;
    console.log(data);
    axios
      .post("/api/mandal", data)
      .then(res => {
        console.log(res);
        console.log("insert success");
      })
      .catch(err => {
        console.log(err);
      });
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
        {/*<Link to={{ pathname: `/` }}>*/}
        <button type="submit" id="submit">
          submit
        </button>
        {/*</Link>*/}
      </form>
    </div>
  );
}

export default All_mandal;
