import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var axios = require('axios');

// const Button = function(props){
//  return(
//    <button>Go {props.label}</button>
//   );
// };

class Button extends React.Component{
  state = {counter: 0};
  
  handleClick = ()=>{
    this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));
  }
  
  render(){
    return(
      <button onClick={()=>{this.props.onClickFunction(this.props.incrementValue)}}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
  return(
    <div>{props.resultValue}</div>
  );
};

class App extends React.Component{
  state = {counter: 0};
  
  incrementValue = (incrementValue)=>{
    this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
      }));
  }
  
  render(){
    return(
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementValue} />
        <Button incrementValue={5} onClickFunction={this.incrementValue} />
        <Button incrementValue={10} onClickFunction={this.incrementValue} />
        <Button incrementValue={20} onClickFunction={this.incrementValue} />
        <Result incrementValue={50} resultValue={this.state.counter} />
      </div>
    );
  }
}

export default App;