import React, { Component } from 'react';
import Section from './section.js';

class SectionContainer extends Component {
	render() {
		const {
			children,
			bgURL,
			transitionIn,
		} = this.props;
		
		return (
			<Section bgURL={bgURL} transitionIn={transitionIn}>{children}</Section>
		);
	}
}

export default SectionContainer;