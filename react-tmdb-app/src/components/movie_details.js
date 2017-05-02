import React, {Component} from 'react';

export default class MovieDetail extends Component {
	render() {
		let title = this.props.data.title;
		return (
				<div>{title}</div>
			);
	}
}