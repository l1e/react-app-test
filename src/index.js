import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Clock from './Clock'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var clockId= document.getElementById('clock');

ReactDOM.render(<Clock />, clockId);