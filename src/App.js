import React, { Component } from 'react';
import Header from './components/header.js';
import Home from './components/home.js';
import Deck from './pages/deck.js';
import { Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/deck/:deck_id" component={Deck} />
			</>
		);
	}
}

export default App;
