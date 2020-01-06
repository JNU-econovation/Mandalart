import React, { Component } from "react";
import styled from "styled-components";

class Property_form extends Component {
  render() {
    return (
      <Property_Box>
        <Named_Box>
          <Label>이름</Label>
          <Input></Input>
        </Named_Box>
        <Named_Box>
          <Label>목표</Label>
          <Input></Input>
        </Named_Box>
        <Named_Box>
          <Label>설명</Label>
          <Input></Input>
        </Named_Box>
        <Named_Box>
          <Label>알림 주기</Label>
          <Input></Input>
        </Named_Box>
        <Named_Box>
          <Label>e-mail</Label>
          <Input></Input>
        </Named_Box>
        <Named_Box>
          <Label>cover image</Label>
          <Input></Input>
        </Named_Box>
        <Button>Submit</Button>
      </Property_Box>
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
