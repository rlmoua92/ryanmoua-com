import React from 'react';
import Banner from '../banner';
import Section from '../section';
import Navigation from '../navigation';
import Project from '../project';
import ContactForm from '../contactForm';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
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
						<div className="flex">
							<div className="about-img flex-50">
								<img src="/local/ryan-fpo.jpg" alt="Ryan Moua" />
							</div>
							<div className="about-content flex-50">
								<ul>
									<li>Born in San Diego, CA</li>
									<li>Went to college at Universty of California Irvine</li>
								</ul>
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
						<div>For more information click the following button to see my resume.</div>
						<button><a href="/local/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button>
					</Section>
					<Section bgURL="/local/traction-fpo.jpg" />
					<Section ref={sectionRefs.contact} transitionIn={!isShowingBanner}>
						<h2>Contact</h2>
						<p>Have a question or just want to get in contact with me? Feel free to reach out via the form below: </p>
						<ContactForm />
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