import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

	render() {
		return (
			<div className="col-xs-12 search-container">
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-lg-5">
					</div>

					<div className="col-xs-12 col-sm-6 col-lg-7">
						<form className="searchbox">
							<input ref="search suggestion"
								className="form-control"
								onChange={event => this.onInputChange(event.target.value)} 
								type="text" 
								placeholder="Search Movie Title..."
								value={this.state.term}
							id="q" />
						</form>
					</div>
				</div>
			</div>
		);
	}

	onInputChange(term) {
    	this.setState({term});
    	this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
