import React from 'react';
import TestComponent from './TestComponent';
import ToggleComponent from './ToggleComponent';
import './App.css';

const App = () => {
	return (
		<div>
			<ToggleComponent>
				<TestComponent />
			</ToggleComponent>
		</div>
	);
};

export default App;
