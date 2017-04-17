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
      <Ionicon icon="ion-ios-search-strong" fontSize="30px" />
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <Ionicon icon="ion-search"></Ionicon>
      </div>
      );
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
  }

  export default SearchBar;
