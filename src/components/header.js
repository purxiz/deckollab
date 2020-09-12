import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Header extends Component {

	state = {
		redirect: false
	}

	new_deck = () => {
		fetch( '/api/deck_editor' )
		.then( ( response ) => {
			return response.json();
		} )
		.then( ( data ) => {
			this.setState( { redirect: true, url: data.url } );
		} );
	};
	
	render() {
		if( this.state.redirect ) {
			let url = '/deck/' + this.state.url;
			return <Redirect to={url} />;
		}
		return (
			<div className="header">
				<h1 className="logo">
					<span>De</span>
					<span style={{color: '#cc1b00'}}>c</span>
					<span>k</span>
					<span style={{color: '#cc1b00'}}>ollab</span>
				</h1>
				<a href={null} onClick={this.new_deck} className="navlink">New Deck</a>
			</div>
		);
	}
}


export default Header;
