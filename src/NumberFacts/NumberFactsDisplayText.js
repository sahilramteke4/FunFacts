import React from 'react';
import './NumberFactsDisplayText.css'
import 'tachyons';

const DisplayText = ({ text }) => {

	return(
			<div>
				<div
				rows='4' column='50' 
				className='tc roll display'>
				{text}
				</div>
			</div>
		);
}

export default DisplayText;