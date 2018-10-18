import React, { Component } from 'react';
import Banner from './banner.js';
import { CSSTransition } from 'react-transition-group';

class BannerContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isShowingBanner: true,
		}

		this.onButtonClick = this.onButtonClick.bind(this);
		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		this.setState({
			isShowingBanner: window.scrollY < 10,
		});
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll() {
		this.setState({
			isShowingBanner: window.scrollY < 10,
		});
	}

	onButtonClick() {
		window.scrollTo(0, 10);
	}

	render() {
		const {
			isShowingBanner,
		} = this.state;
		return (
			<CSSTransition
				in={isShowingBanner}
				timeout={500}
				classNames="slide"
			>
				<Banner 
					onButtonClick={this.onButtonClick}
				>
					{this.props.children}
				</Banner>
			</CSSTransition>
		);
	}
}

export default BannerContainer;