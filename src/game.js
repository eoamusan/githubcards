import React from 'react';
import _ from 'lodash';

const Stars = (props) => {
	let stars = [];
	const numberofstars = 1 + Math.floor(Math.random()*9);

  	return (
    	<div className="col-md-5">
    		{_.range(numberofstars).map((star, i)=><i className="fa fa-star" key={i}></i>)}
	    </div>
  	)
}

const Button = (props) => {
  	return (
	    <div className="col-md-2 button">
	      	<button>
	      		<span className="center_item">=</span>
	      	</button>
	    </div>
	)
}

const Answer = (props) => {
  	return (
    	<div className="col-md-5">
      		...
    	</div>
  	)
}

const Numbers = (props) => {
  	return (
    	<div className="card text-center">
    		<div className="numbers">
    			{Numbers.list.map((number, i) => <span key={i}>{number}</span>)}
      		</div>
    	</div>
  	)
}

Numbers.list = _.range(1, 10);

class Game extends React.Component{
    render(){
        return(
            <div className="container">
                <h3>Play Nine</h3>
                <hr/>
                <div className="row">
	                <Stars />
	                <Button />
	                <Answer />
                </div>
                <br/>
                <Numbers />
            </div>
        );
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <Game />
            </div>
        );
    }
}

export default App;