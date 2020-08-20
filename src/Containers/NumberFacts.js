import React , { Component } from 'react';
import NuberFactsCategories from '../NumberFacts/NumberFactsCategories';
import NumberFactsInputs from '../NumberFacts/NumberFactsInputs';
import DisplayText from '../NumberFacts/NumberFactsDisplayText';
import SubmitButton from '../NumberFacts/SubmitButton';
import RandomButton from '../NumberFacts/RandomButton';
import '../NumberFacts/numberFacts.css';
import 'tachyons';

class NumberFacts extends Component {

	constructor() {
		super();
		this.state = {
			categoryValue : 'trivia',
			number : '',
            date : '',
            year : '',
            displayText : 'Result will appear here!'
		}
	}

onChangeCategory = (event) => {
 this.setState({categoryValue : event.target.value,
 					   number : '',
            		   date : '',
            		   year : ''}) ;
}

onInputChange = (event) => {
	if(this.state.categoryValue === 'math' || this.state.categoryValue === 'trivia')
		this.setState({number: event.target.value});

	else if(this.state.categoryValue === 'date' )
		 this.setState({date: event.target.value});

	else if(this.state.categoryValue === 'year' )
		 this.setState({year: event.target.value});
}

fetchData = (input) => {
	    let url = '';

	    if(this.state.categoryValue === 'trivia') {
	    	url = `http://numbersapi.com/${input}`;
	    } else {
	    	url = `http://numbersapi.com/${input}/${this.state.categoryValue}`;
	    }

		fetch(url)
		.then(response => response.text())
		.then(data => this.setState({displayText: data}))
		.catch( () => { this.setState({displayText: 'Ooops! we got an Error.'})} ); 
}

 onButtonClick = (event) => {

	 	switch(this.state.categoryValue) {
	 		case 'trivia' : this.fetchData(this.state.number);
	 							break;

	 		case 'math' : this.fetchData(this.state.number);
	 							break;

	 		case 'date' : this.fetchData(this.state.date);
	 						 	break;

	 		case 'year' : this.fetchData(this.state.year);
	 							break;	

	 		default : console.log('default case');
	 	}

	 	this.setState({
	 				   number : '',
            		   date : '',
            		   year : ''});
 }

 randomButtonClick = (event) => {
 			let categoryArray = ['trivia', 'math', 'date', 'year'];
 			let categoryArrayIndex = this.randomNumberGenerator(4) - 1 ;
 			console.log('catArrVal', categoryArray[categoryArrayIndex])
 			if( categoryArray[categoryArrayIndex] === 'trivia' || categoryArray[categoryArrayIndex] === 'math') {
 				this.setState({ categoryValue: categoryArray[categoryArrayIndex] });
	 			let num = this.randomNumberGenerator(100000);
	 			this.fetchData(num);
 			}

 			else if(categoryArray[categoryArrayIndex] === 'date') {

 				this.setState({ categoryValue: categoryArray[categoryArrayIndex] });
 				let month = this.randomNumberGenerator(12);
 				let day=0;
	 				if(month === 2)
	 				day = this.randomNumberGenerator(28);
	 				else
	 				day = this.randomNumberGenerator(30);

	 			let date = month + '/' + day ;

	 			this.fetchData(date);
 			}

 			else if(categoryArray[categoryArrayIndex] === 'year') {
 				this.setState({ categoryValue: categoryArray[categoryArrayIndex] });
 				let year = this.randomNumberGenerator(2020);
 				console.log('year : ', year);
 				this.fetchData(year);
 			}
 }

 randomNumberGenerator = (x) => {
 			let ran = Math.floor( (Math.random() * x) + 1 ); 
 			console.log('generator :',ran);
 			return(ran);
 }

	render() {
		return(
		<div 
		className='tc bg-light-blue dib br3 pa3 ma3 bw2 shadow-5 container'
		>
	        <h1>Number Facts</h1>
	        <NuberFactsCategories  changeCategory = {this.onChangeCategory} />
	        <NumberFactsInputs state={this.state} inputChange={this.onInputChange} />
	        <DisplayText text={this.state.displayText}/>
	        <ul style={{listStyle: 'none'}} >
		        <li style={{ display: 'inline-block' }}> <SubmitButton buttonClick={this.onButtonClick} /> </li>
		        <li  className='ml3' style={{ display: 'inline-block' }}> <RandomButton randomClick={this.randomButtonClick} /> </li>
	        </ul>
        </div>
        );
		}

}

export default NumberFacts;