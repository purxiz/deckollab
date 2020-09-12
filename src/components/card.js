import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
	render () {
		return (
			<div className="list_item" onClick={this.props.onClick ? () => this.props.onClick( this.props.card ) : undefined}>{this.props.card.name}</div>
		);
	}
}

Card.propTypes = {
	card: PropTypes.object.isRequired,
	onClick: PropTypes.func
};

export default Card;
