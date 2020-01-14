import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { post } from "axios";
import { RadioButton, RadioGroup } from "react-radio-buttons";

function Propertyform() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axios("/api/mandalproperty", data);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Named_Box>
          <Label>이름</Label>
          <input type="text" name="name" id="name" ref={register} />
        </Named_Box>
        <Named_Box>
          <Label>목표</Label>
          <input type="text" name="goal" id="goal" ref={register} />
        </Named_Box>
        <Named_Box>
          <Label>알림 주기</Label>
          <RadioGroup horizontal>
            <RadioButton value="2weeks">2주</RadioButton>
            <RadioButton value="1months">1개월</RadioButton>
            <RadioButton value="3months">3개월</RadioButton>
            <RadioButton value="6months">6개월</RadioButton>
            <RadioButton value="1year">1년</RadioButton>
          </RadioGroup>
        </Named_Box>
        <Named_Box>
          <Label>설명</Label>
          <input
            type="text"
            name="description"
            id="description"
            ref={register}
          />
        </Named_Box>
        <Named_Box>
          <Label>e-mail</Label>
          <input type="text" name="mail" id="mail" ref={register} />
        </Named_Box>
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
}

export default Propertyform;

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
