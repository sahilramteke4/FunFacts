import React, {useState} from 'react';
import '../ChuckNorris/chucknorris.css';

class Categories extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			firstRun: 0
		}
	}

fetchCategories = () => {
	if(this.state.firstRun === 0) {
		this.state.firstRun = 1;
		fetch('https://api.chucknorris.io/jokes/categories')
		.then(response => response.json())
		.then(categories => {
			const catList = document.getElementById('cat');
			categories.forEach(category => {
				let optElement = document.createElement('option');
				optElement.innerText = category;
				catList.appendChild(optElement);
			});
		})
	}
}	

	render() {
		return(
			<div>
				<select 
				id='cat' 
				required
				className='selectCategory'
				onChange = {this.props.getCategory}
				>
					<option value=''>Category</option>
				</select>
			{this.fetchCategories()}
			</div>
			);
		}
	}

export default Categories;