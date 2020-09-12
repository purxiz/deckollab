import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../styles/main.css';
import App from './App.js';


var mountNode = document.getElementById( 'app' );
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, mountNode
);
