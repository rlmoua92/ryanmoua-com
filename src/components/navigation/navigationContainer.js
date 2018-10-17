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
					'linkID': 'about-me',
					'linkIcon': faAddressCard,
					'linkTarget': '#about-me',
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
				/*{
					'linkID': 'education',
					'linkIcon': faGraduationCap,
					'linkText': 'Education',
					'type': 'Navigation',
					'bgColor': ,
				},*/
				{
					'linkID': 'resume',
					'linkIcon': faFileAlt,
					'linkTarget': '#resume',
					'linkText': 'Resume',
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
		const { currentContent } = this.props;
		return (
			<Navigation 
				currentContent={currentContent}
				navItems={navItems}
				onNavigationClick={this.props.onNavigationClick} 
			/>
		);
	}
}

export default NavigationContainer;