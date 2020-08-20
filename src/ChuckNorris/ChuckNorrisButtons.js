import React from 'react';
import '../ChuckNorris/chucknorris.css';

const SubmitButton = ({handleSubmit}) => {
	return(
		<div>
			<button
			className='norrisButton'
			onClick={handleSubmit}
			>
			SUBMIT
			</button>
		</div>
		);
}

const RandomButton = ({handleRandomButton}) => {
	return(
		<div>
			<button
			className='norrisButton'
			onClick={handleRandomButton}
			>
			RANDOM
			</button>
		</div>
		);
}

export default SubmitButton;
export { RandomButton };