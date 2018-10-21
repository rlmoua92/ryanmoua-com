import React from 'react';
import Banner from '../banner';
import Section from '../section';
import Navigation from '../navigation';
import Project from '../project';
import ContactIcon from '../contactIcon';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faChevronUp,
	faEnvelope,
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
					<Section bgURL="/local/circuit-fpo.jpg" />
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
					<Section bgURL="/local/bball-fpo.jpg" />
					<Section ref={sectionRefs.experience} transitionIn={!isShowingBanner}>
						<h2>Experience</h2>
						<div>
							<h3>Jazel</h3>
							<div>
								<em>September 2015 – August 2018</em>
							</div>
							<div>
								<strong>Product Team</strong>
							</div>
							<ul>
								<li>Assisted in building and launching responsive websites from PSDs using the custom Jazel content management system, based off of WordPress</li>
								<li>Collaborated with developers to ensure understanding of product feature requests and tested new features for issues before deployment</li>
								<li>Tested and added 3rd party Wordpress plugins to sites, editing plugin code and functionality to better suit company needs when necessary</li>
								<li>Used experience with HTML, CSS, and Jazel product to provide technical support and to help fill in and document gaps of knowledge for customer facing employees</li>
							</ul>
							<div>
								<strong>SysOps</strong>
							</div>
							<ul>
								<li>Responsible for managing DNS records for more than 150 client domains using AWS Route 53</li>
								<li>Monitored and maintained Jazel applications running on AWS EC2 apache servers</li>
								<li>Responded to and diagnosed server and product failures, then implemented workflow and safeguards to avoid similar failures in the future</li>
							</ul>
							<div>
								<strong>Accomplishments</strong>
							</div>
							<ul>
								<li>2016. - Rockstar of the Year (3rd Place)</li>
								<li>2017 - Rockstar of the Year (1st Place)</li>
							</ul>
						</div>
						<div>For more information click the following button to see my resume.</div>
						<button><a href="/local/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button>
					</Section>
					<Section bgURL="/local/traction-fpo.jpg" />
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