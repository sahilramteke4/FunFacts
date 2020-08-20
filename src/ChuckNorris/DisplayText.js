import React from 'react';
import '../ChuckNorris/chucknorris.css';

const DisplayText = ({ displayContent }) => {

	return(
			<div>
				<div
				rows='8' column='40' 
				className='tc rollNorris'>
					{displayContent}
				</div>
			</div>
		);
}

export default DisplayText;