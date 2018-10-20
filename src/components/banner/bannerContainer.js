import React, { Component } from 'react';
import Banner from './banner.js';
import { smoothScroll } from '../../common.js';

class BannerContainer extends Component {
	constructor(props) {
		super(props);

		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		smoothScroll(10);
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