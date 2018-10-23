import React, { Component } from 'react';
import Banner from './banner.js';
import { smoothScroll } from '../../common.js';

class BannerContainer extends Component {
	render() {
		const {
			onButtonClick
		} = this.props;
		return (
			<Banner 
				onButtonClick={onButtonClick}
			>
				{this.props.children}
			</Banner>
		);
	}
}

export default BannerContainer;