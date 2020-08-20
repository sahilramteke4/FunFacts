import React from 'react';
import ButtonIss from '../IssLocation/ButtonIss';
import Location from '../IssLocation/Location';
import '../IssLocation/issLocation.css';

class IssLocation  extends React.Component {

	constructor() {
		super();
		this.state = {
			latitude : '',
			longitude : '',
			displayText : 'Let\'s find out where\'s the International space station...'
		}
	}

onButtonClick = (event) => {
	fetch('http://api.open-notify.org/iss-now.json')
	.then(response => response.json())
	.then(data => {
		this.setState({
			latitude : data.iss_position.latitude,
			longitude : data.iss_position.longitude
		});

		fetch(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.latitude}+${this.state.longitude}&key=b310e0c7b70049a5978eb4bb73a53334`)
		.then(response => response.json())
		.then(locationData => {
			this.setState({
				displayText : locationData.results[0].formatted
			});
			console.log(this.state.displayText);
		})
		.catch(err => console.log('Unable to convert co-ordinates into address'));
	})
	.catch(err => console.log('Unable to fetch location'));
}

	render() {
		return (
			<div 
			className='tc bg-light-green br3 ma3 bw2 shadow-5 container'
			>
				<h1>International space station is above</h1>
				<Location displayText={this.state.displayText} />
				<ButtonIss  onButtonClick={this.onButtonClick} />
			</div>
			);
	}
}

export  default IssLocation;