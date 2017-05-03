import React, {Component} from 'react';

class MovieDetail extends Component {
	render() {
		let data = this.props.movie;
		let posterImage = 'https://image.tmdb.org/t/p/w500' + data.poster,
			backdropImage = 'https://image.tmdb.org/t/p/original' + data.backdrop;

		return (
			<div>
				<div>
					<h1>{data.original_title}</h1>
						<span>{data.tagline}</span>
					<p>{data.overview}</p>
				</div>

				<div>
					<img src={posterImage} />
				</div>
			</div>
		);
	}
}

export default MovieDetail;