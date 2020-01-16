import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./All_mandal.css";
import styled from "styled-components";

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
    <div className="tables">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="out">
          <div className="in">
            <table className="table" border="3">
              <tr className="line1">
                <input
                  type="text"
                  name="goal11"
                  id="goal11"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal12"
                  id="goal12"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal13"
                  id="goal13"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal21"
                  id="goal21"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal22"
                  id="goal22"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal23"
                  id="goal23"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal31"
                  id="goal31"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal32"
                  id="goal32"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal33"
                  id="goal33"
                  ref={register}
                ></input>
              </tr>
              <tr className="line2">
                <input
                  type="text"
                  name="goal18"
                  id="goal18"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal10"
                  id="goal10"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal14"
                  id="goal14"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal28"
                  id="goal28"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal20"
                  id="goal20"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal24"
                  id="goal24"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal38"
                  id="goal38"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal30"
                  id="goal30"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal34"
                  id="goal34"
                  ref={register}
                ></input>
              </tr>
              <tr className="line3">
                <input
                  type="text"
                  name="goal17"
                  id="goal17"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal16"
                  id="goal16"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal15"
                  id="goal15"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal27"
                  id="goal27"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal26"
                  id="goal26"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal25"
                  id="goal25"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal37"
                  id="goal37"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal36"
                  id="goal36"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal35"
                  id="goal35"
                  ref={register}
                ></input>
              </tr>
              <tr className="line4">
                <input
                  type="text"
                  name="goal81"
                  id="goal81"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal82"
                  id="goal82"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal83"
                  id="goal83"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal10"
                  id="goal10"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal20"
                  id="goal20"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal30"
                  id="goal30"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal41"
                  id="goal41"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal42"
                  id="goal42"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal43"
                  id="goal43"
                  ref={register}
                ></input>
              </tr>
              <tr className="line5">
                <input
                  type="text"
                  name="goal88"
                  id="goal88"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal80"
                  id="goal80"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal84"
                  id="goal84"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal80"
                  id="goal80"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal100"
                  id="goal100"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal40"
                  id="goal40"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal48"
                  id="goal48"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal40"
                  id="goal40"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal44"
                  id="goal44"
                  ref={register}
                ></input>
              </tr>
              <tr className="line6">
                <input
                  type="text"
                  name="goal86"
                  id="goal86"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal87"
                  id="goal87"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal85"
                  id="goal85"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal70"
                  id="goal70"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal60"
                  id="goal60"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal50"
                  id="goal50"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal47"
                  id="goal47"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal46"
                  id="goal46"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal45"
                  id="goal45"
                  ref={register}
                ></input>
              </tr>
              <tr className="line7">
                <input
                  type="text"
                  name="goal71"
                  id="goal71"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal72"
                  id="goal72"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal73"
                  id="goal73"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal61"
                  id="goal61"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal62"
                  id="goal62"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal63"
                  id="goal63"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal51"
                  id="goal51"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal52"
                  id="goal52"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal53"
                  id="goal53"
                  ref={register}
                ></input>
              </tr>
              <tr className="line8">
                <input
                  type="text"
                  name="goal78"
                  id="goal78"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal70"
                  id="goal70"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal74"
                  id="goal74"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal68"
                  id="goal68"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal60"
                  id="goal60"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal64"
                  id="goal64"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal58"
                  id="goal58"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal50"
                  id="goal50"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal54"
                  id="goal54"
                  ref={register}
                ></input>
              </tr>
              <tr className="line9">
                <input
                  type="text"
                  name="goal77"
                  id="goal77"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal76"
                  id="goal76"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal75"
                  id="goal75"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal67"
                  id="goal67"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal66"
                  id="goal66"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal65"
                  id="goal65"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal57"
                  id="goal57"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal56"
                  id="goal56"
                  ref={register}
                ></input>
                <input
                  type="text"
                  name="goal55"
                  id="goal55"
                  ref={register}
                ></input>
              </tr>
            </table>
          </div>
        </div>
        {/*<Link to={{ pathname: `/` }}>*/}
        <Button type="submit" id="submit">
          submit
        </Button>
        {/*</Link>*/}
      </form>
    </div>
  );
}

export default All_mandal;

/*
const Input = styled.div`
  :hover {
    color: black;
    background-color: white;
    border: 2px solid;
  }
`;
*/

const Button = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: black;
  color: white;
  border: 2px solid #fff;
  width: 100%;
  margin-top: 1em;
  padding: 8px 0px;
  font-size: 1em;
  letter-spacing: 1px;
  margin-bottom: 0.25em;

  :hover {
    color: black;
    background-color: white;
    border: 2px solid;
  }
`;
