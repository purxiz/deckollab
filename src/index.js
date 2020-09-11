import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class HelloMessage extends React.Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}

HelloMessage.propTypes = {
	name: PropTypes.string,
};

var mountNode = document.getElementById( 'app' );
ReactDOM.render( <HelloMessage name="Jane" />, mountNode );
