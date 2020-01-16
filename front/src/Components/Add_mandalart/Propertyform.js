import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RadioButton, RadioGroup } from "react-radio-buttons";

function Propertyform() {
  const { register, handleSubmit } = useForm();

  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [mail, setMail] = useState("");

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeGoal = e => {
    setGoal(e.target.value);
  };

  const onChangeDescription = e => {
    setDescription(e.target.value);
  };

  const onChangeEmail = e => {
    setMail(e.target.value);
  };

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Property_Box>
          <Named_Box>
            <Label>이름</Label>
            <Input
              type="text"
              name="name"
              id="name"
              ref={register}
              onChange={onChangeName}
              placeholder="ex) 2학기 목표"
            />
          </Named_Box>
          <Named_Box>
            <Label>목표</Label>
            <Input
              type="text"
              name="goal"
              id="goal"
              ref={register}
              onChange={onChangeGoal}
              placeholder="ex) 전문성 가지기"
            />
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
            <InputArea
              type="text"
              name="description"
              id="description"
              ref={register}
              onChange={onChangeDescription}
            />
          </Named_Box>
          <Named_Box>
            <Label>e-mail</Label>
            <Input
              type="text"
              name="mail"
              id="mail"
              ref={register}
              onChange={onChangeEmail}
              placeholder="mandalplan@gmail.com"
            />
          </Named_Box>
          <Link
            to={{
              pathname: `/add/mandalform`,
              state: {
                name: name,
                goal: goal,
                description: description,
                mail: mail
              }
            }}
          >
            <Button type="submit" id="submit">
              NEXT
            </Button>
          </Link>
        </Property_Box>
      </form>
    </div>
  );
}

export default Propertyform;

const Property_Box = styled.section`
  width: 550px;
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

const InputArea = styled.textarea`
  height: 100px;
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
