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
	faBook,
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
		onBannerClick,
	} = props;

	return (
		<div>
			<CSSTransition
				in={isShowingBanner}
				timeout={500}
				classNames="slide"
			>
				<Banner onButtonClick={onBannerClick}>
					<h1>Ryan Moua</h1>
					<h2>Front-end Developer</h2>
				</Banner>
			</CSSTransition>
			<CSSTransition
				in={!isShowingBanner}
				timeout={500}
				classNames="lockScroll"
			>
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
								<div className="about-img flex flex-column v-align-center">
									<img src="/local/ryan-fpo.jpg" alt="Ryan Moua" />
								</div>
								<div className="about-content">
									<p>The first time I was exposed to programming was the summer before my 3rd year of undergrad at the University of California Irvine. Strangely, it was in a class that taught computing skills to Chemistry majors; we learned to use the Wolfram language to create things like graphs and charts from data sets. The ability to create complex things just from typing some numbers and letters blew my mind; I was hooked. I changed my major to Computer Science the next quarter and never looked back.</p>
									<p>At school I was exposed to a lot of backend programming, working with languages like Python and C++. However, my first job out of college was at a Front-end website building company. As part of the product team I picked up HTML and CSS mostly on the job and played around with Javascript and JQuery when needed. As part of the SysOps team I learned to work with some AWS technologies and gained a better understanding of the backend and architecture of websites/web applications.</p>
									<p>Using those experiences as a launching pad, I exposed myself to more technologies and started building applications using ReactJS and Redux. Eventually, I was hired at my first coding job and finally became a full-fledged Front-end developer!</p>
									<p>Nowadays, I still keep challenging myself to grow as a developer and still strive to work on meaningful applications that I can be proud of.</p>
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
							<div className="flex">
								<div className="flex experience-content">
									<div className="experience-block">
										<IconHeader icon={faBuilding}>Employment</IconHeader>
										<ul>
											<li>Jazel Auto (September 2015 - August 2018)
												<ul>
													<li><em>Product Team, SysOps</em></li>
												</ul>
											</li>
											<li>BVA (January 2019 - Present)
												<ul>
													<li><em>Senior Front End Developer</em></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="experience-block">
										<IconHeader icon={faBook}>Education</IconHeader>
										<ul>
											<li>University of California Irvine (2010 - 2015)
												<ul>
													<li><em>Bachelor of Science in Computer Science</em></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="experience-block">
										<IconHeader icon={faCode}>Technologies</IconHeader>
										<ul className="flex flex-column flex-wrap">
											<li>HTML</li>
											<li>CSS</li>
											<li>Javascript</li>
											<li>Vue</li>
											<li>ReactJS</li>
											<li>Node</li>
											<li>Shopify</li>
											<li>Python</li>
											<li>Git</li>
											<li>Bash</li>
											<li>AWS</li>
											<li>WordPress</li>
										</ul>
									</div>
									<div className="experience-block">
										<IconHeader icon={faAward}>Achievements</IconHeader>
										<ul>
											<li>Jazel Auto - 2016 Rockstar of the Year (3rd Place)</li>
											<li>Jazel Auto - 2017 Rockstar of the Year (1st Place)</li>
											<li>BVA - Nov 2019 Godzilla Award</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="text-center">
								<p>For more information please check out my résumé.</p>
								<button><a href="/local/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a></button>
							</div>
						</Section>
						<Section ref={sectionRefs.contact} transitionIn={!isShowingBanner}>
							<h2>Contact</h2>
							<div className="text-center">
								<p>Have a question or just want to get in contact? Feel free to reach out via one of the methods below: </p>
								<div className="flex contact-icons">
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
							</div>
						</Section>
						<div className="footer flex v-align-center">
							<div className="copyright flex-33">© 2021 Ryan Moua</div>
							<div className="footer-button flex-33 text-center">
								<button onClick={onBackToTopClick}>
									<FontAwesomeIcon icon={faChevronUp} />
									<div className="button-text">Back to Top</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</CSSTransition>
		</div>
	);
};

export default Layout;