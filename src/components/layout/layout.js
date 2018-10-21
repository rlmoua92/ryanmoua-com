import React from 'react';
import Banner from '../banner';
import Section from '../section';
import Navigation from '../navigation';
import Project from '../project';
import ContactIcon from '../contactIcon';
import IconHeader from '../iconHeader';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faChevronUp,
	faEnvelope,
	faAward,
	faBuilding,
	faCode,
} from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './layout.scss';

const Layout = (props) => {
	const { 
		sideProjects,
		onNavigationClick,
		sectionRefs,
		isShowingBanner,
		onBackToTopClick,
	} = props;

	return (
		<div>
			<CSSTransition
				in={isShowingBanner}
				timeout={500}
				classNames="slide"
			>
				<Banner>
					<h1>Ryan Moua.</h1>
					<h2>Aspiring Front-end Developer.</h2>
				</Banner>
			</CSSTransition>
			<div className="content">
				<CSSTransition
					in={!isShowingBanner}
					timeout={750}
					classNames="fade"
				>
					<Navigation 
						onNavigationClick={onNavigationClick}
						sectionRefs={sectionRefs}
					/>
				</CSSTransition>
				<div>
					<Section ref={sectionRefs.about} transitionIn={!isShowingBanner}>
						<h2>About</h2>
						<div className="flex flex-wrap">
							<div className="about-img text-center">
								<img src="/local/ryan.png" alt="Ryan Moua" />
							</div>
							<div className="about-content">
								<ul>
									<li>Born in San Diego, CA</li>
									<li>Went to college at Universty of California Irvine</li>
								</ul>
								<div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>
						</div>
					</Section>
					<Section bgColor="#000" />
					<Section ref={sectionRefs.projects} transitionIn={!isShowingBanner}>
						<h2>Projects</h2>
						<div className="project-container flex flex-wrap">
							{
								sideProjects.map(project => {
									return(
										<Project project={project} key={project.name} />
									);
								})
							}
						</div>
					</Section>
					<Section bgColor="#000" />
					<Section ref={sectionRefs.experience} transitionIn={!isShowingBanner}>
						<h2>Experience</h2>
						<div className="flex flex-wrap experience-content">
							<div className="experience-left">
								<IconHeader icon={faBuilding}>Employment</IconHeader>
								<ul>
									<li>Jazel Auto - Product Team, SysOps (September 2015 - August 2018)</li>
								</ul>
								<IconHeader icon={faAward}>Achievements</IconHeader>
								<ul>
									<li>Jazel Auto - 2016 Rockstar of the Year (3rd Place)</li>
									<li>Jazel Auto - 2017 Rockstar of the Year (1st Place)</li>
								</ul>
							</div>
							<div className="experience-right">
								<IconHeader icon={faCode}>Technologies</IconHeader>
									<ul className="flex flex-column flex-wrap">
										<li>HTML</li>
										<li>CSS</li>
										<li>Javascript</li>
										<li>ReactJS</li>
										<li>Python</li>
										<li>Git</li>
										<li>Bash</li>
										<li>AWS</li>
										<li>WordPress</li>
										<li>Photoshop</li>
									</ul>
							</div>
						</div>
						<div>For more information click the following button to view my résumé.</div>
						<button><a href="/local/resume.pdf" target="_blank" rel="noopener noreferrer">View Résumé</a></button>
					</Section>
					<Section bgColor="#000" />
					<Section ref={sectionRefs.contact} transitionIn={!isShowingBanner}>
						<h2>Contact</h2>
						<p>Have a question or just want to get in contact? Feel free to reach out via one of the methods below: </p>
						<div className="flex">
							<ContactIcon 
								icon={faEnvelope}
								link="mailto:rlmoua92@gmail.com"
							/>
							<ContactIcon 
								icon={faLinkedin}
								link="https://www.linkedin.com/in/ryan-moua/"
								newTab={true}
							/>
							<ContactIcon 
								icon={faGithub}
								link="https://github.com/rlmoua92/"
								newTab={true}
							/>
						</div>
					</Section>
					<div className="footer flex v-align-center">
						<div className="copyright flex-33">© 2018 Ryan Moua</div>
						<div className="footer-button flex-33 text-center">
							<button onClick={onBackToTopClick}>
								<FontAwesomeIcon icon={faChevronUp} />
								<div className="button-text">Back to Top</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;