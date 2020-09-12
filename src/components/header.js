import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {

	new_deck = () => {
		fetch( '/api/deck_editor' )
		.then( ( response ) => {
			return response.json();
		} )
		.then( ( data ) => {
			console.log( this.props );
			this.props.history.push( `/deck/${data.url}` );
		} );
	};
	
	render() {
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

Header.propTypes = {
	history: PropTypes.object,
};

export default withRouter( Header );
