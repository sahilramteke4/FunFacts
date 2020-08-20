import React from 'react';
import NumberFacts from './Containers/NumberFacts';
import IssLocation from './Containers/IssLocation';
import PokeDex from './Containers/PokeDex';
import ChuckNorris from './Containers/ChuckNorris';
import './App.css';

class App extends React.Component {
	render() {
		return(
			<div className='showcase'>
				<NumberFacts />
				<IssLocation />
				<PokeDex />
				<ChuckNorris />
			</div>
			);
	}
}

export default App;