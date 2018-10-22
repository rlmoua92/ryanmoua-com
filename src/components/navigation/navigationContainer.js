import React, { Component } from 'react';
import Navigation from './navigation.js';
import { 
	faAddressCard,
	faFileCode,
	faEnvelope,
//	faGraduationCap,
	faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

class NavigationContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			navItems: [
				{
					'linkID': 'about',
					'linkIcon': faAddressCard,
					'linkTarget': '#about',
					'linkText': 'About',
					'bgColor': '#F44336',
				},
				{
					'linkID': 'projects',
					'linkIcon': faFileCode,
					'linkTarget': '#projects',
					'linkText': 'Projects',
					'bgColor': '#2196F3',
				},
				{
					'linkID': 'experience',
					'linkIcon': faFileAlt,
					'linkTarget': '#experience',
					'linkText': 'Experience',
					'bgColor': '#4CAF50',
				},
				{
					'linkID': 'contact',
					'linkIcon': faEnvelope,
					'linkTarget': '#contact',
					'linkText': 'Contact',
					'bgColor': '#FF9800',
				},
			],
		};
	}

	render() {
		const { 
			navItems,
		} = this.state;
		const { 
			sectionRefs,
		} = this.props;

		return (
			<Navigation 
				navItems={navItems}
				onNavigationClick={this.props.onNavigationClick} 
				sectionRefs={sectionRefs}
			/>
		);
	}
}

export default NavigationContainer;