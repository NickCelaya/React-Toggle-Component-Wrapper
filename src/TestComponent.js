import React from 'react';

const TestComponent = () => {
	return (
		<div>
			<h1 style={{ color: 'red' }}>
				I am the TestComponent being rendered as props.children in the
				ToggleComponent.
			</h1>
		</div>
	);
};

export default TestComponent;
