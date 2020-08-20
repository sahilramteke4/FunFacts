import React from 'react';
import InputField from '../PokeDex/InputField'
import '../PokeDex/pokeDex.css';
import PokemonDetails from '../PokeDex/PokemonDetails';

class PokeDex extends React.Component {

constructor() {
	super();
	this.state = {
		name: 'Pokemon name',
		id: '0',
		pokemonType: [],
		imgsrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ220kFoqIeX2hHzN0GNgNTF2kDg38Hd74yXA&usqp=CAU'
	}
}

//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ220kFoqIeX2hHzN0GNgNTF2kDg38Hd74yXA&usqp=CAU
//https://pokeapi.co/api/v2/pokemon?limit=1000
//https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png
handleSelect = (event) => {
	let temp = event.target.value;
	fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
	  .then(response => response.json())
	  .then(allpokemon => {
	  	allpokemon.results.forEach(pokemon => {
	  		if(pokemon.name === temp) {
	  			fetch(pokemon.url)
				.then(response => response.json())
				.then(data => {
					this.fetchPokemonDetails(data);
				})
	  		}
	  	});
	})
}

fetchPokemonDetails = pokeData => {
	let pokeName = pokeData.name;
	let pokeId = pokeData.id;
	let pokeTypes = [];
	let imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;
	pokeTypes = this.createTypes(pokeData.types);
	this.setState({name: pokeName, id: pokeId, pokemonType: pokeTypes, imgsrc: imageUrl});
}

createTypes = (types) => {
	let typesArray = [];
	types.forEach(type => {
		typesArray.push(type.type.name);
	});
	return typesArray;
}

	render() {
		const {name, id, pokemonType, imgsrc} = this.state;
		return (
			<div className='tc bg-dark-blue dib br3 pa3 ma3 bw2 shadow-5 pokeContainer'>
				<h1 className='pokefont'>PokeDex </h1> 
				<InputField handleSelect={this.handleSelect} />
				<PokemonDetails name={name} id={id} pokemonType={pokemonType} imgsrc={imgsrc} />
			</div>
		);
	}
}

export default PokeDex;