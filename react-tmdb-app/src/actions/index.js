const API_KEY = 'e4d80514cfeefffbb9a01a3338203117';
const ROOT_URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;

const MOVIE_ID = 'MovieID';

export function fetchMovieID(id) {
	const url = ROOT_URL;
	
	return {
		type: MOVIE_ID	
	};	
}