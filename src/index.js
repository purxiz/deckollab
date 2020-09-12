import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/main.css';
import Home from './components/home.js';
import Header from './components/header.js';
import Deck from './pages/deck.js';


var mountNode = document.getElementById( 'app' );
ReactDOM.render(
	<Router>
		<Header />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/deck/:deck_id" component={Deck} />
		</Switch>
	</Router>, mountNode
);
