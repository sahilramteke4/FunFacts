import React  from 'react';
import './NumberFactsInputs.css';
import 'tachyons';

const NumberFactsInputs = ({ state, inputChange }) => {

    if(state.categoryValue === 'trivia' || state.categoryValue === 'math') {
	return(
            <div>
            <ul >
              <li> <input  className='br3 dib pa1 ma2 bg-lightest-blue bn' value={state.number} type='number' placeholder='Number'  onChange={inputChange} /></li>
              <li> <input readOnly className='br3 dib pa1 ma2 bg-lightest-blue bn' value={state.date} type='number' placeholder='MM/DD' style={{opacity: 0.4}} onChange={inputChange} /></li>
              <li> <input readOnly className='br3 dib pa1 ma2 bg-lightest-blue bn' value={state.year} type='number' placeholder='YYYY' style={{opacity: 0.4}} onChange={inputChange} /></li>
            </ul>
            </div>
		);
   }

	else if(state.categoryValue === 'date') {
	 return(
            <div>
            <ul >
              <li> <input readOnly className='br3 dib pa1 ma2 bg-lightest-blue bn' value={state.number} type='number' placeholder='Number' style={{opacity: 0.4}} onChange={inputChange} /></li>
              <li> <input className='br3 dib pa1 ma2 bg-lightest-blue bn' value={state.date} type='text' placeholder='MM/DD' onChange={inputChange} /></li>
              <li> <input readOnly className='br3 dib pa1 ma2 bg-lightest-blue bn' value={state.year} type='number' placeholder='YYYY' style={{opacity: 0.4}} onChange={inputChange} /></li>
            </ul>
            </div>
		);
	}

  else if(state.categoryValue === 'year') {
   return(
            <div>
            <ul  onChange={inputChange}>
              <li> <input readOnly className='br3 dib pa1 ma2 bg-lightest-blue bn' value={state.number} type='number' placeholder='Number' style={{opacity: 0.4}} onChange={inputChange} /></li>
              <li> <input readOnly className='br3 dib pa1 ma2 bg-lightest-blue bn' value={state.date} type='number' placeholder='MM/DD' style={{opacity: 0.4}} onChange={inputChange} /></li>
              <li> <input  className='br3 dib pa1 ma2 bg-lightest-blue bn' type='number' value={state.year} placeholder='YYYY' onChange={inputChange} /></li>
            </ul>
            </div>
    );
  }
}

export default NumberFactsInputs;