import React, { Component } from 'react';
import Section from './section.js';

class SectionContainer extends Component {
	render() {
		const {
			children,
			bgURL,
			bgColor,
			transitionIn,
		} = this.props;
		
		return (
			<Section bgURL={bgURL} transitionIn={transitionIn} bgColor={bgColor}>{children}</Section>
		);
	}
}

export default SectionContainer;