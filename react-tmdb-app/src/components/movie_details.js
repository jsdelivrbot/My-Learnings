import React, {Component} from 'react';

class MovieDetail extends Component {
	render() {
		console.log("render of MovieDetail", this.props.movie);
		let data = this.props.movie;

		if(!data.original_title) {
			return <div>Loading...</div>
		}

		let genres = data.genre[0].name,
          	totalRevenue = data.revenue,
          	noData = '-',
			posterImage = 'https://image.tmdb.org/t/p/w500' + data.poster;

		this.backdropImage = 'https://image.tmdb.org/t/p/original' + data.backdrop;

	// conditional statements for no data for votes
       	if (data.vote === 'undefined' || data.vote === 0) {
          data.vote = noData
        } else {
          data.vote = data.vote + ' / 10'
        };


 	return (
        <div className="col-xs-12">
			<div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
            	<h1>{data.original_title}</h1>
            		<span>{data.tagline}</span>
            	<p>{data.overview}</p>
            	
            	<div className="additional-details">
             		<span>{genres}</span>
            		<div className="row nopadding release-details">
                		<div className="col-xs-6"> Original Release: <span className="meta-data">{data.release}</span></div>
                		<div className="col-xs-6"> Running Time: <span className="meta-data">{data.runtime} mins</span> </div>
                		<div className="col-xs-6"> Vote Average: <span className="meta-data">{data.vote}</span></div>
           	 		</div>
            	</div>
        	</div>
          	
          	<div className="poster-container col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
            	<img src={posterImage} />
          	</div>
       </div>
     )
   }

  componentDidUpdate() {
  	console.log('didMount of movie detail', this.backdropImage)
    // document.body.style.backgroundImage = 'url(' + this.backdropImage + ')';
        document.body.style.backgroundImage = 'url(https://image.tmdb.org/t/p/original' + this.props.movie.backdrop + ')';
  }
}

export default MovieDetail;