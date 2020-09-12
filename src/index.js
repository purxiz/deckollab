import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/main.css';
import App from './App.js';
import Header from './components/header.js';


var mountNode = document.getElementById( 'app' );
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, mountNode
);
