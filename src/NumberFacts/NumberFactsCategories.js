import React from 'react';
import './numberFacts.css';

const NumberFactsCategories = ({ changeCategory }) => {

	return (
       <div>
         <select className='br3 bg-lightest-blue ph3 pv1 measure-wide' 
         defaultValue="trivia" 
         onChange={ changeCategory } >
 		 	  <option value="trivia">trivia</option>
  			<option value="math">math</option>
  			<option value="date">date</option>
  			<option value="year">year</option>
         </select>
       </div>
		);
}

export default NumberFactsCategories;