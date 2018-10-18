import React, { Component } from 'react';
import Banner from './banner.js';

class BannerContainer extends Component {
	constructor(props) {
		super(props);

		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		window.scrollTo(0, 10);
	}

	render() {
		return (
			<Banner 
				onButtonClick={this.onButtonClick}
			>
				{this.props.children}
			</Banner>
		);
	}
}

export default BannerContainer;