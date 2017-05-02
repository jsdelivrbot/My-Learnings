import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from './components/search_bar';
import MovieDetail from './components/movie_details'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieID: 157336
		};
	}

	componentDidMount() {
		axios.get(`https://api.themoviedb.org/3/movie/${this.state.movieID}?&api_key=e4d80514cfeefffbb9a01a3338203117`)
      	.then(res => {
      		let movie = res.data;
        	this.setState({
        		movieID: movie.id,
        		title: movie.original_title
        	});
      	});
 	 }

	render() {
			return (
				<div>
					<SearchBar />
					<MovieDetail data={this.state} />
				</div>
			);
		}
	}

ReactDOM.render(<App />, document.querySelector('.container'));
