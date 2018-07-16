import React from 'react';
import './App_redo.css';
import axios from 'axios';

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
    	<img width="75" src={props.avatar_url} />
    	<div style={{display: 'inline-block', marginLeft: 10}}>
    		<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
    			{props.name}
    		</div>
    		<div>{props.company}</div>
    	</div>
    </div>
  )
}

const CardList = (props) => {
    return (
    	<div>
	    	{props.cards.map(card => <Card key={card.id} {...card} />)}
	    </div>
    )
}

class Form extends React.Component{
	state = {
		username: ''
	};
	handleSubmit = (event) => {
		event.preventDefault();
		
		axios.get(`http://api.github.com/users/${this.state.username}`)
			.then((resp)=>{
				this.props.submitActuator(resp.data);
				this.setState({
					username: ''
				});
			})
	}

	render() {
	    return (
	    	<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Github Username" required value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} />
				<button type="submit">Add Card</button>
			</form>
	    );
	}
}

class App extends React.Component {
	state = {
				cards: []
			};

	submitActuator = (data) => {
		this.setState((prevState) => ({
			cards: prevState.cards.concat(data)
		}))
	}

    render() {
        return ( 
        	<div>
        		<Form submitActuator={this.submitActuator} />
        		<CardList cards={this.state.cards} />
            </div>
        );
    }
}

export default App;