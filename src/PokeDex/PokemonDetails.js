import React from 'react';
import './pokeDex.css';

let pokemonTypeString = 'Pokemon type';

const PokemonDetails = ({name, id, pokemonType, imgsrc}) => {

	pokemonType.forEach(type => {
		pokemonTypeString += '*' + type + ' ';
	});

	return(
		<div>
			<ul className='pos detailList'>
				<li className='detailList'><img src={imgsrc} className='pokeImg' /></li>
				<li className='detailList'><h1>#{id}</h1></li>
				<li className='detailList'><h2>{name}</h2></li>
				<li className='detailList'><h3>Pokemon type : </h3></li> 
				<li className='detailList'><h4>{pokemonTypeString}</h4></li>
			</ul>
			{pokemonTypeString =''}
		</div>
		);
}

export default PokemonDetails;