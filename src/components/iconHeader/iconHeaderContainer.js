import React, { Component } from 'react';
import IconHeader from './iconHeader.js';

class IconHeaderContainer extends Component {
	render() {	
		const {
			icon,
			children,
		} = this.props;

		return (
			<IconHeader 
				icon={icon}
			>{children}</IconHeader>
		);
	}
}

export default IconHeaderContainer;