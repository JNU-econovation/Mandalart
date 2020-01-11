import React, { Component } from "react";
import styled from "styled-components";
import { post } from "axios";
// import { Link } from "react-router-dom";
import { RadioButton, RadioGroup } from "react-radio-buttons";

class Property_form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      mandalName: "",
      mandalGoal: "",
      mandalDescripton: "",
      userEmail: "",
      fileName: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.addProperty = this.addProperty.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.addProperty().then(response => {
      console.log(response.data);
    });
    // 데이터 전송 이후 새로 고침
    this.setState({
      file: null,
      mandalName: "",
      mandalGoal: "",
      mandalDescripton: "",
      userEmail: "",
      fileName: ""
    });
    window.location.reload();
  }

  handleFileChange(e) {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value
    });
  }

  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addProperty() {
    const url = "/api/property";
    const formData = new FormData();
    console.log(this.state);

    formData.append("image", this.state.fileName);
    formData.append("name", this.state.mandalName);
    formData.append("goal", this.state.mandalGoal);
    formData.append("description", this.state.mandalDescripton);
    formData.append("email", this.state.userEmail);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    console.log(formData);
    return post(url, formData, config);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Named_Box>
          <Label>이름</Label>
          <input
            type="text"
            name="mandalName"
            value={this.state.mandalName}
            onChange={this.handleValueChange}
          />
        </Named_Box>
        <Named_Box>
          <Label>목표</Label>
          <input
            type="text"
            name="mandalGoal"
            value={this.state.mandalGoal}
            onChange={this.handleValueChange}
          />
        </Named_Box>
        <Named_Box>
          <Label>설명</Label>
          <input
            type="text"
            name="mandalDescription"
            value={this.state.mandalDescripton}
            onChange={this.handleValueChange}
          ></input>
        </Named_Box>
        <Named_Box>
          <Label>알림 주기</Label>
          <RadioGroup onChange={this.onChange} horizontal>
            <RadioButton value="2weeks">2주</RadioButton>
            <RadioButton value="1months">1개월</RadioButton>
            <RadioButton value="3months">3개월</RadioButton>
            <RadioButton value="6months">6개월</RadioButton>
            <RadioButton value="1year">1년</RadioButton>
          </RadioGroup>
        </Named_Box>
        <Named_Box>
          <Label>e-mail</Label>
          <input
            type="text"
            name="userEmail"
            value={this.state.userEmail}
            onChange={this.handleValueChange}
          ></input>
        </Named_Box>
        <Named_Box>
          <Label>cover image</Label>
          <input
            type="file"
            name="fileName"
            file={this.state.fileName}
            value={this.state.fileName}
            onChange={this.handleFileChange}
          ></input>
        </Named_Box>
        <button type="submit">추가하기</button>
      </form>
    );
  }
}

export default Property_form;

const Property_Box = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0px 10px 50px #555;
`;

const Label = styled.text`
  font-size: 1em;
  margin-bottom: 0.25em;
  display: flex;
  justify-content: flex-start;
`;

const Input = styled.input`
  padding: 10px 10px;
  outline: none;
`;

const Named_Box = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

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
