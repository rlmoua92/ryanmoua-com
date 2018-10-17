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
			positionLeft: window.innerWidth > 1200 ? ((window.innerWidth - 1200) / 2) : 0,
		};

		this.onWindowResize = this.onWindowResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.onWindowResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onWindowResize);
	}

	onWindowResize(e) {
		const width = e.target.innerWidth;
		if (width > 1200) {
			this.setState({
				positionLeft: (width - 1200) / 2,
			});
		} else {
			this.setState({
				positionLeft: 0,
			});
		}
	}

	render() {
		const { 
			navItems,
			positionLeft,
		} = this.state;
		const { currentContent } = this.props;
		return (
			<Navigation 
				currentContent={currentContent}
				navItems={navItems}
				onNavigationClick={this.props.onNavigationClick} 
				positionLeft={positionLeft}
			/>
		);
	}
}

export default NavigationContainer;