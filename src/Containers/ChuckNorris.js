import React from 'react'
import Categories from '../ChuckNorris/Categories';
import SubmitButton, {RandomButton} from '../ChuckNorris/ChuckNorrisButtons';
import DisplayText from '../ChuckNorris/DisplayText';
import '../ChuckNorris/chucknorris.css';

class ChuckNorris extends React.Component {

	constructor() {
		super();
		this.state = {
			category: '',
			displayContent: 'Joke will appear here.'
		}
	}

getCategory = (event) => {
	this.setState({category: event.target.value});
}

handleSubmit = (event) => {
	if(this.state.category !== '') {
		const url = `https://api.chucknorris.io/jokes/random?category=${this.state.category}`;
		fetch(url)
		.then(response => response.json())
		.then(data => this.setState({displayContent: data.value}))
		.catch(err => console.log('Unable to fetch joke ay this moment.'));
	} else {
		alert('Please select a category first.');
	}
}

handleRandomButton = () => {
	const url = `https://api.chucknorris.io/jokes/random`;
	fetch(url)
	.then(response => response.json())
	.then(data =>  this.setState({displayContent: data.value}))
	.catch(err => console.log('Unable to fetch joke ay this moment.'));
}

	render() {
		return(
			<div className='tc bg-orange br3 ma3 bw2 shadow-5 container'>
				<h1 className='chuckNorrisFont'>Chuck Norris</h1>
				<div className='innerComponents'>
					<Categories getCategory={this.getCategory} />
					<SubmitButton handleSubmit={this.handleSubmit} />
					<RandomButton handleRandomButton={this.handleRandomButton} />
				</div>
				<DisplayText displayContent={this.state.displayContent}/>
			</div>
			);
	}
}

export default ChuckNorris;