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
						<div className="flex flex-wrap v-align-center">
							<div className="about-img text-center">
								<img src="/local/ryan.png" alt="Ryan Moua" />
								<div className="about-img-quote text-center"><em>"I like playing basketball, making low-budget travel videos, and buying too many sneakers." - Ryan (probably)</em></div>
							</div>
							<div className="about-content">
								<p>Like most kids nowadays, a lot of my childhood was spent in front of a computer. From playing endless hours of video games online, to tweaking my Myspace template till it was just right, to making ridiculous photo edits of my friends on Photoshop, I dabbled in almost everything my computer could offer.</p>
								<p>Despite this, I didn’t even think about programming until the summer before my 3rd year of undergrad at the University of California Irvine. Strangely, it was in a class that taught computing skills to Chemistry majors; we learned to use the Wolfram language to create things like graphs and charts from data sets. The ability to create complex things just from typing some numbers and letters blew my mind; I was hooked. I changed my major to Computer Science the next quarter and never looked back.</p>
								<p>At school I was exposed to a lot of backend programming, working with languages like Python and C++. However, my first job out of college was at a Front-end website building company. As part of the product team I picked up HTML and CSS mostly on the job and played around with Javascript and JQuery when needed. As part of the SysOps team I learned to work with some AWS technologies and gained a better understanding of the backend of websites/web applications.</p>
								<p>Using these past experiences as launching pad, I’m currently aspiring to become a full-fledged Front-end developer and am exposing myself to more technologies like ReactJS and Redux. At the end of the day, I just want to keep challenging myself and growing as a developer and want to work on meaningful applications that I can be proud of.</p>
							</div>
						</div>
					</Section>
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