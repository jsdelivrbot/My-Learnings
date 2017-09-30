import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		console.log(this.props.posts);
		return (
			<div>
				Posts
			</div>
		);
	};
}

function mapStateToProps(state) {
	return {posts: state.post};
}

export default connect (mapStateToProps, { fetchPosts }) (PostsIndex);