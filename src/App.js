import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var axios = require('axios');

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width='75' src={props.avatar_url} />
      <div style={{marginLeft: 10, display: 'inline-block'}}>
        <div style={{fontWeight: 'bold', fontSize: '1.25em'}}>
          {props.name}
        </div>
        <div>
          {props.company}
        </div>
      </div>
    </div>
  )
}

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
}

class Form extends React.Component {
  state = {
    userName: ''
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then( resp => {
      this.props.onSubmit(resp.data);
      this.setState({userName: ''});
    });
  };
  
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Github Username" value={this.state.userName} onChange={(event) => this.setState({ userName: event.target.value })} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    cards: []
  }
  
  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }))
  }
  
  render(){
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards}/>
      </div>
    )
  }
}

export default App;