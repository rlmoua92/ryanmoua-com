import React, { Component } from 'react';
import ContactIcon from './contactIcon.js';

class contactIconContainer extends Component {
	render() {	
		const {
			icon,
			link,
			newTab,
		} = this.props;

		return (
			<ContactIcon 
				icon={icon}
				link={link}
				newTab={newTab}
			/>
		);
	}
}

export default contactIconContainer;