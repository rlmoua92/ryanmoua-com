import React, { Component } from 'react';
import Section from './section.js';

class SectionContainer extends Component {
	render() {
		const {
			children,
			bgURL,
		} = this.props;
		
		return (
			<Section bgURL={bgURL}>{children}</Section>
		);
	}
}

export default SectionContainer;