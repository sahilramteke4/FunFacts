import React from 'react';
import 'tachyons';

const RandomButton = ({randomClick}) => {

		return(
			<div>
			<button className='white b pv2 ph3 mt3 bg-blue bn br2 grow'
			onClick={ randomClick } >
			Random
			</button>
			</div>
		);

}

export default RandomButton;