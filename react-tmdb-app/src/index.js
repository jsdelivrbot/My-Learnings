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

	getMovieData(term) {
		axios.get(`https://api.themoviedb.org/3/movie/${term}?&api_key=e4d80514cfeefffbb9a01a3338203117`)
		.then(res => {
			let movie = res.data;
			console.log("movie response from axios", movie);
			this.setState({
				movieID: movie.id,
				original_title: movie.original_title,
				tagline: movie.tagline,
				overview: movie.overview,
				poster: movie.poster_path,
				homepage: movie.homepage,
        		poster: movie.poster_path,
        		genre: movie.genres,
        		release: movie.release_date,
        		vote: movie.vote_average,
        		runtime: movie.runtime,
        		revenue: movie.revenue,
        		backdrop: movie.backdrop_path
			});
		});
	}

	componentDidMount() {
		this.getMovieData(this.state.movieID);
	}

	render() {
		console.log('render of main');
		return (
			<div>
				<SearchBar onSearchTermChange={this.getMovieData} />
				<MovieDetail movie={this.state} />
			</div>
			);
		}
	}

	ReactDOM.render(<App />, document.querySelector('.container'));
