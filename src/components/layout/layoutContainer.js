import React, { Component } from 'react';
import Layout from './layout.js';

class LayoutContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sideProjects: [
				{
					name: 'BasicYGO',
					lang: 'Python',
					desc: 'A CLI application based on "Yu-Gi-Oh!"" Trading Card Game. Using the most basic of the card game\'s rules, two players battle each other with Monster Cards trying to reduce the other Player\'s LifePoints to 0.',
					imageURL: '/images/BasicYGO.jpg',
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
					imageURL: '/images/hackernews.jpg',
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
					imageURL: '/images/codeRyan.jpg',
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
				}
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
			currentContent: 'about-me',
			isShowingBanner: true,
		}

		this.onScroll = this.onScroll.bind(this);
		this.onNavigationClick = this.onNavigationClick.bind(this);
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

	onNavigationClick(linkID) {
		this.setState({
			currentContent: linkID
		});
	}

	render() {
		const {
			sideProjects,
//			schoolProjects,
			currentContent,
			isShowingBanner,
		} = this.state;

		return (
			<Layout 
				sideProjects={sideProjects} 
//				schoolProjects={schoolProjects} 
				onNavigationClick={this.onNavigationClick}
				currentContent={currentContent}
				isShowingBanner={isShowingBanner}
			/>
		);
	}
}

export default LayoutContainer;