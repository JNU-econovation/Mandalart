import React, { Component } from "react";
import SingleMandalBox from "./SingleMandalBox";
import "./MultiMandalBox.css";

class MultiMandalBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mine: {
        title: "나의 만다라트",
        name: this.props.info
      }, //배열로 시도해볼것
      friends: {
        title: "친구들의 만다라트",
        name: ["친구1", "친구2", "친구3", "친구4"]
      },
      popular: {
        title: "주목받는 만다라트",
        name: [
          "기숙사 준비물 모음",
          "포루투 한달살기 필수템",
          "버킷리스트",
          "세계일주 리스트"
        ]
      },
      new: {
        title: "신규 만다라트",
        name: ["새해다짐1", "새해다짐2", "새해다짐3", "새해다짐4"]
      }
    };
    this.multi = this.multi.bind(this); //multi의 this가 여기서 온 것임을 알려줌
  }
  //제목 인쇄
  multi = () => {
    //Object의 this,state의 key 값이므로 mine, friend, popular, new가 해당됨
    return Object.keys(this.state).map(key => {
      return (
        <>
          <h3> {this.state[key].title} </h3>
          <SingleMandalBox name={this.state.name}></SingleMandalBox>
          {/* {this.state[key].name.map(value => {
            return <SingleMandalBox name={value}></SingleMandalBox>; */}
        </>
      );
    }, []);
  };
  render() {
    console.log(this.state);
    return <>{this.multi()}</>;
  }
}
export default MultiMandalBox;
