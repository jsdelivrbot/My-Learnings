import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<div className="col-xs-12 search-container">
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-lg-5">
					</div>

					<div className="col-xs-12 col-sm-6 col-lg-7">
						<form className="searchbox">
							<input ref="search suggestion"
								onClick={this.handleChange} 
								className="form-control" 
								type="text" 
								placeholder="Search Movie Title..." 
							id="q" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;
