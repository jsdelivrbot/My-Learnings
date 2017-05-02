import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<div className="search-bar">
				<input 
					placeholder = 'Search Movie Title..' />
			</div>
		);
	}
}

export default SearchBar;
