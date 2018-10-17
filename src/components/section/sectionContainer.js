import React, { Component } from 'react';
import Section from './section.js';

class SectionContainer extends Component {
	render() {
		const {
			sectionID,
			children,
			bgURL
		} = this.props;
		
		return (
			<Section sectionID={sectionID} bgURL={bgURL}>{children}</Section>
		);
	}
}

export default SectionContainer;