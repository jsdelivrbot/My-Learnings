import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

//Controlled component and biinding context
// export default class SearchBar extends Component {
class SearchBar extends Component {
	constructor (props) {
		super (props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}


onInputChange (event) {
	// console.log(event.target.value);
	this.setState ({term: event.target.value});
}

onFormSubmit (event) {
	event.preventDefault(); //prevents from submitting form

//we need to  go ad fetch weather data
	this.props.fetchWeather(this.state.term);

	//clear the search input by -
	this.setState({term: ''});
}

	render() {
		return (
			<form onSubmit = {this.onFormSubmit} className = "input-group">
				<input
					placeholder = "Get a five-day forecast in your favorite cities"
					className = "form-control"
					value = {this.state.term}
					onChange = {this.onInputChange} />

				<span className = "input-group-btn">
					<button type = "submit" className = "btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}


//hook  up action creator (fetchWeather) to SearchBar container
//dispatch makes sure the action flows thru middleware to reducer
function mapDispatchToProps (dispatch) {
	return bindActionCreators ({fetchWeather}, dispatch);
}

export default connect (null, mapDispatchToProps) (SearchBar);