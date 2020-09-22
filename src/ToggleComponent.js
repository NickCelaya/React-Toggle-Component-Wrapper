import React, { Component } from 'react';
// import TestComponent from "./TestComponent";
import './App.css';

class ToggleComponent extends Component {
	state = {
		show: true,
		name: 'Nick C',
	};

	onToggle = () => {
		this.setState((prevState) => ({
			show: !prevState.show,
		}));
	};

	/* Can invoke test where props.children is to have a function that can toggle some jsx
    invoke as this.test */
nick
	// test = () => {
	// 	return (
	// 		<div>
	// 			<h1 style={{ color: 'red' }}>It's awesome</h1>
	// 		</div>
	// 	);
	// };

	render() {
		//put name where TestComponent is to show state name
		const { name } = this.state;

		return (
			<div>
				<button onClick={this.onToggle}>click</button>
				<div>{this.state.show ? this.props.children : null}</div>
			</div>
		);
	}
}

export default ToggleComponent;
