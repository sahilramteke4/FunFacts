import React from 'react';
import 'tachyons';

const SubmitButton = ({buttonClick}) => {

		return(
			<div>
			<button className='white b pv2 ph3 mt3 bg-blue bn br2 grow'
			style={{width: 95}}
			onClick={ buttonClick } >
			Submit
			</button>
			</div>
		);

}

export default SubmitButton;