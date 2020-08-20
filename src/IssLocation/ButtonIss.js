import React from 'react';

const ButtonIss = ({onButtonClick}) => {
	return(
			<div>
				<button className='white b pv2 ph3 mt2 bg-dark-green bn br2 grow'
				style={{width: '7em'}}
				onClick = {onButtonClick}
				>
				Find now
				</button>
			</div>
		);
}

export default ButtonIss;