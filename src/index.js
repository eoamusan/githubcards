import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './githubcards';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './css/font-awesome.css';
import './App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
