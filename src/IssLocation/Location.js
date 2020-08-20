import React from 'react';

const Location = ({displayText}) => {
	return (
			<div style={{color: '#7a73ff'}}>
					<h3 
					style={{width: '23.5em', height: '2em'}}
					>
						{displayText}
					</h3>
			</div>
		);
}

export default Location;