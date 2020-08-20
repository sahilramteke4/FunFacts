import React from 'react';
import './pokeDex.css';

class InputField extends React.Component  {

fetchPokemon = () => {
	  fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
	  .then(response => response.json())
	  .then(allpokemon => {
	  	const selectContainer = document.getElementById('pokeNames');
	  	allpokemon.results.forEach(pokemon => {
	  		const optionElement = document.createElement('option');
	  		optionElement.innerText=pokemon.name;
	  		optionElement.classList.add('pokeOption');
	  		selectContainer.appendChild(optionElement);
	  	});
	})
}
	
render() {
	return(
		 <div className='set'>
	         <select className='br3 bg-lightest-blue ph3 pv1 measure-wide' 
	         id='pokeNames'
	         defaultValue="pikachu" 
	         className='dropDown PokeRoll'
	         size='19'
	         onChange={this.props.handleSelect}
	         >
	         </select>
	     {this.fetchPokemon()}
        </div>
		);
	}
}

export default InputField;