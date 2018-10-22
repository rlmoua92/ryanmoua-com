import React, { Component } from 'react';
import Banner from './banner.js';
import { smoothScroll } from '../../common.js';

class BannerContainer extends Component {
	constructor(props) {
		super(props);

		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		if (window.scrollY !== 10) {
			smoothScroll(10);
		} else {
			smoothScroll(11);
		}
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