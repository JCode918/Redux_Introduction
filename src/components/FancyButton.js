import React from 'react';

const FancyButton = ({ active, children, onClick }) => {
	if (active) {
		return (
			<button className='ui disabled button' onClick={onClick}>
				{children}
			</button>
		);
	}
	return (
		<button className='ui disabled button' onClick={onClick}>
			{children}{' '}
		</button>
	);
};

export default FancyButton;
