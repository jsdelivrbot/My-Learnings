import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">

      
      <input 
      placeholder = 'Search..'
      value={this.state.term}
      onChange={event => this.onInputChange(event.target.value)} />

      <button class='button button-search'>
      <Ionicon icon="ion-ios-search-strong" />
      </button>
      </div>
      );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;



