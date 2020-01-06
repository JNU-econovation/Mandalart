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
        <button>Submit</button>
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

const Label = styled.text``;

const Input = styled.input``;

const Named_Box = styled.section``;
