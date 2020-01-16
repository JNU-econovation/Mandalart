import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./All_mandal.css";

function All_mandal(props) {
  const { register, handleSubmit } = useForm();

  const [goal10Input, setinput10] = useState("");
  const goal10inputchangehandler = e => {
    setinput10(e.target.value);
  };

  const [goal20Input, setinput20] = useState("");
  const goal20inputchangehandler = e => {
    setinput20(e.target.value);
  };

  const [goal30Input, setinput30] = useState("");
  const goal30inputchangehandler = e => {
    setinput30(e.target.value);
  };

  const [goal40Input, setinput40] = useState("");
  const goal40inputchangehandler = e => {
    setinput40(e.target.value);
  };

  const [goal50Input, setinput50] = useState("");
  const goal50inputchangehandler = e => {
    setinput50(e.target.value);
  };

  const [goal60Input, setinput60] = useState("");
  const goal60inputchangehandler = e => {
    setinput60(e.target.value);
  };

  const [goal70Input, setinput70] = useState("");
  const goal70inputchangehandler = e => {
    setinput70(e.target.value);
  };

  const [goal80Input, setinput80] = useState("");
  const goal80inputchangehandler = e => {
    setinput80(e.target.value);
  };

  console.log(props);
  const onSubmit = data => {
    data["name"] = props.data.name;
    data["goal"] = props.data.goal;
    data["description"] = props.data.description;
    data["mail"] = props.data.mail;

    data["goal10"] = props.data.goal10;
    data["goal20"] = props.data.goal20;
    data["goal30"] = props.data.goal30;
    data["goal40"] = props.data.goal40;
    data["goal50"] = props.data.goal50;
    data["goal60"] = props.data.goal60;
    data["goal70"] = props.data.goal70;
    data["goal80"] = props.data.goal80;

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
    <div className="tables">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="out">
          <div className="in">
            <table className="table" border="3">
              <tr className="line1">
                <td>
                  <input
                    type="text"
                    name="goal11"
                    id="goal11"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal12"
                    id="goal12"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal13"
                    id="goal13"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal21"
                    id="goal21"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal22"
                    id="goal22"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal23"
                    id="goal23"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal31"
                    id="goal31"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal32"
                    id="goal32"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal33"
                    id="goal33"
                    ref={register}
                  ></input>
                </td>
              </tr>
              <tr className="line2">
                <td>
                  <input
                    type="text"
                    name="goal18"
                    id="goal18"
                    ref={register}
                  ></input>
                </td>
                <td id="goal10-2">{goal10Input} </td>
                <td>
                  <input
                    type="text"
                    name="goal14"
                    id="goal14"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal28"
                    id="goal28"
                    ref={register}
                  ></input>
                </td>
                <td id="goal20-2">{goal20Input} </td>
                <td>
                  <input
                    type="text"
                    name="goal24"
                    id="goal24"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal38"
                    id="goal38"
                    ref={register}
                  ></input>
                </td>
                <td id="goal30-2">{goal30Input} </td>
                <td>
                  <input
                    type="text"
                    name="goal34"
                    id="goal34"
                    ref={register}
                  ></input>
                </td>
              </tr>
              <tr className="line3">
                <td>
                  <input
                    type="text"
                    name="goal17"
                    id="goal17"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal16"
                    id="goal16"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal15"
                    id="goal15"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal27"
                    id="goal27"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal26"
                    id="goal26"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal25"
                    id="goal25"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal37"
                    id="goal37"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal36"
                    id="goal36"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal35"
                    id="goal35"
                    ref={register}
                  ></input>
                </td>
              </tr>
              <tr className="line4">
                <td>
                  <input
                    type="text"
                    name="goal81"
                    id="goal81"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal82"
                    id="goal82"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goa83"
                    id="goal83"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal10"
                    id="goal10"
                    ref={register}
                    onChange={goal10inputchangehandler}
                    value={goal10Input}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal20"
                    id="goal20"
                    ref={register}
                    onChange={goal20inputchangehandler}
                    value={goal20Input}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal30"
                    id="goal30"
                    ref={register}
                    onChange={goal30inputchangehandler}
                    value={goal30Input}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal31"
                    id="goal31"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal32"
                    id="goal32"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal33"
                    id="goal33"
                    ref={register}
                  ></input>
                </td>
              </tr>
              <tr className="line5">
                <td>
                  <input
                    type="text"
                    name="goal88"
                    id="goal88"
                    ref={register}
                  ></input>
                </td>
                <td id="goal80-2">{goal80Input} </td>
                <td>
                  <input
                    type="text"
                    name="goal84"
                    id="goal84"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal80"
                    id="goal80"
                    ref={register}
                    onChange={goal80inputchangehandler}
                    value={goal80Input}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal100"
                    id="goal100"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal40"
                    id="goal40"
                    ref={register}
                    onChange={goal40inputchangehandler}
                    value={goal40Input}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal48"
                    id="goal48"
                    ref={register}
                  ></input>
                </td>
                <td id="goal40-2">{goal40Input} </td>
                <td>
                  <input
                    type="text"
                    name="goal44"
                    id="goal44"
                    ref={register}
                  ></input>
                </td>
              </tr>
              <tr className="line6">
                <td>
                  <input
                    type="text"
                    name="goal87"
                    id="goal87"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal86"
                    id="goal86"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal85"
                    id="goal85"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal70"
                    id="goal70"
                    ref={register}
                    onChange={goal70inputchangehandler}
                    value={goal70Input}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal60"
                    id="goal60"
                    ref={register}
                    onChange={goal60inputchangehandler}
                    value={goal60Input}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal50"
                    id="goal50"
                    ref={register}
                    onChange={goal50inputchangehandler}
                    value={goal50Input}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal47"
                    id="goal47"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal46"
                    id="goal46"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal45"
                    id="goal45"
                    ref={register}
                  ></input>
                </td>
              </tr>
              <tr className="line7">
                <td>
                  <input
                    type="text"
                    name="goal71"
                    id="goal71"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal72"
                    id="goal72"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal73"
                    id="goal73"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal61"
                    id="goal61"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal62"
                    id="goal62"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal63"
                    id="goal63"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal51"
                    id="goal51"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal52"
                    id="goal52"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal53"
                    id="goal53"
                    ref={register}
                  ></input>
                </td>
              </tr>
              <tr className="line8">
                <td>
                  <input
                    type="text"
                    name="goal78"
                    id="goal78"
                    ref={register}
                  ></input>
                </td>
                <td id="goal70-2">{goal70Input} </td>
                <td>
                  <input
                    type="text"
                    name="goal74"
                    id="goal74"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal68"
                    id="goal68"
                    ref={register}
                  ></input>
                </td>
                <td id="goal60-2">{goal60Input} </td>
                <td>
                  <input
                    type="text"
                    name="goal64"
                    id="goal64"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal58"
                    id="goal58"
                    ref={register}
                  ></input>
                </td>
                <td id="goal50-2">{goal50Input} </td>
                <td>
                  <input
                    type="text"
                    name="goal54"
                    id="goal54"
                    ref={register}
                  ></input>
                </td>
              </tr>
              <tr className="line9">
                <td>
                  <input
                    type="text"
                    name="goal77"
                    id="goal77"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal76"
                    id="goal76"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal75"
                    id="goal75"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal67"
                    id="goal67"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal66"
                    id="goal66"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal65"
                    id="goal65"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal57"
                    id="goal57"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal56"
                    id="goal56"
                    ref={register}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="goal55"
                    id="goal55"
                    ref={register}
                  ></input>
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/*<Link to={{ pathname: `/` }}>*/}
        <button type="submit" id="submit">
          submit
        </button>
        {/*</Link>*/}
        <Link to="/">홈</Link>
      </form>
    </div>
  );
}

export default All_mandal;
