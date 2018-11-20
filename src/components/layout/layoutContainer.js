import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout.js';
import { smoothScroll } from '../../common.js';

class LayoutContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sideProjects: [
				{
					name: 'BasicYGO',
					lang: 'Python',
					desc: 'A CLI application based on "Yu-Gi-Oh!"" Trading Card Game. Using the most basic of the card game\'s rules, two players battle each other with Monster Cards trying to reduce the other Player\'s LifePoints to 0.',
					imageURL: '/local/BasicYGO.jpg',
					links: [
						{
							type: 'gitHub',
							linkTarget: 'https://github.com/rlmoua92/BasicYGO'
						},
					]
				},
				{
					name: 'HackerNews Search',
					lang: 'ReactJS',
					desc: 'Using the HackerNews API provided by https://news.ycombinator.com/, this application displays articles based on user provided keywords. Additional features include result sorting, infinite scrolling, and dismissing unwanted results.',
					imageURL: '/local/hackernews.jpg',
					links: [
						{
							type: 'gitHub',
							linkTarget: 'https://github.com/rlmoua92/hackernews'
						},
						{
							type: 'heroku',
							linkTarget: 'https://hackernews-search.herokuapp.com/'
						},
					]
				},
				{
					name: 'codeRyan',
					lang: 'ReactJS, Redux',
					desc: 'A web application based on the board game "Codenames". Words are pulled from a word bank and assigned to each team using a pseudo random number generator. Each team tries to guess all of their words before the other team.',
					imageURL: '/local/codeRyan.jpg',
					links: [
						{
							type: 'gitHub',
							linkTarget: 'https://github.com/rlmoua92/codeRyan'
						},
						{
							type: 'heroku',
							linkTarget: 'https://code-ryan.herokuapp.com/'
						},
					]
				},
				{
					name: 'Basketball Scores',
					lang: 'ReactJS, Redux',
					desc: 'Using the NBA API endpoint, this web application displays the scores for all games in the current NBA season. Components and displays are built on top of Google\'s Material UI framework.',
					imageURL: '/local/basketball-scores.jpg',
					links: [
						{
							type: 'gitHub',
							linkTarget: 'https://github.com/rlmoua92/basketball-scores'
						},
						{
							type: 'heroku',
							linkTarget: 'https://basketball-scores.herokuapp.com/'
						},
					]
				},
			],
/*			schoolProjects: [
				{
					name: 'File System',
					lang: 'Python',
					desc: '',
					imageURL: '',
					links: [
					]
				},
				{
					name: 'Connect-K AI',
					lang: 'C++',
					desc: '',
					imageURL: '',
					links: [
					]
				}
			],*/
			sectionRefs: {
				about: React.createRef(),
				projects: React.createRef(),
				experience: React.createRef(),
				contact: React.createRef(),
			},
			isShowingBanner: true,
			scrollLock: true,
		}

		this.onBannerClick = this.onBannerClick.bind(this);
		this.onNavigationClick = this.onNavigationClick.bind(this);
		this.onLoad = this.onLoad.bind(this);
		this.onScroll = this.onScroll.bind(this);
		this.onBackToTop = this.onBackToTop.bind(this);
	}

	componentDidMount() {
		window.addEventListener('load', this.onLoad);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
		window.removeEventListener('load', this.onLoad);
	}

	onLoad() {
		window.addEventListener('scroll', this.onScroll);
	}

	onScroll() {
		if (this.state.scrollLock) {
			window.scrollTo(0, 0);
			this.setState({
				scrollLock: false,
			});
		} else {
			this.setState({
				isShowingBanner: window.scrollY < 10,
			});
		}
	}

	onBannerClick() {
		if (this.state.scrollLock) {
			this.setState({
				scrollLock: false,
			});
		}
		if (window.scrollY !== 10) {
			smoothScroll(10);
		} else {
			smoothScroll(11);
		}
	}

	onNavigationClick(sectionRef) {
		const myDomNode = ReactDOM.findDOMNode(sectionRef.current);
		smoothScroll(myDomNode.offsetTop);
	}

	onBackToTop() {
		smoothScroll(0);
	}

	render() {
		const {
			sideProjects,
			sectionRefs,
			isShowingBanner,
		} = this.state;

		return (
			<Layout 
				sideProjects={sideProjects} 
				onNavigationClick={this.onNavigationClick}
				sectionRefs={sectionRefs}
				isShowingBanner={isShowingBanner}
				onBackToTopClick={this.onBackToTop}
				onBannerClick={this.onBannerClick}
			/>
		);
	}
}

export default LayoutContainer;