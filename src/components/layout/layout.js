import React from 'react';
import Banner from '../banner';
import Section from '../section';
import Navigation from '../navigation';
import Project from '../project';
import ContactForm from '../contactForm';
import { withHidden } from '../../common.js';
import './layout.scss';

const SectionWithHidden = withHidden(Section);

const Layout = (props) => {
	const { 
		sideProjects,
		//schoolProjects,
		onNavigationClick,
		currentContent,
		isShowingBanner,
	} = props;
	return (
		<div>
			<Banner isHidden={!isShowingBanner}>
				<h1>Ryan Moua. Aspiring Front-end Developer.</h1>
			</Banner>
			<div className="content">
				<Navigation 
					currentContent={currentContent}
					onNavigationClick={onNavigationClick}
				/>
				<div>
					<SectionWithHidden currentContent={currentContent} sectionID="about-me">
						<h2>About Me</h2>
					</SectionWithHidden>
					<SectionWithHidden currentContent={currentContent} sectionID="projects">
						<h2>Projects</h2>
						{/*<h3>Side Projects</h3>*/}
						<div className="project-container flex flex-wrap">
							{
								sideProjects.map(project => {
									return(
										<Project project={project} key={project.name} />
									);
								})
							}
						</div>
						{/*<h3>School Projects</h3>
						<div className="project-container flex flex-wrap">
							{
								schoolProjects.map(project => {
									return(
										<Project project={project} key={project.name} />
									);
								})
							}
						</div>*/}
					</SectionWithHidden>
					{/*<SectionWithHidden currentContent={currentContent} sectionID="education">
						<h2>Education</h2>
					</SectionWithHidden>*/}
					<SectionWithHidden currentContent={currentContent} sectionID="resume">
						<h2>Resume</h2>
					</SectionWithHidden>
					<SectionWithHidden currentContent={currentContent} sectionID="contact">
						<h2>Contact</h2>
						<p>Have a question or just want to get in contact with me? Feel free to reach out via the form below: </p>
						<ContactForm />
					</SectionWithHidden>
				</div>
			</div>
		</div>
	);
};

export default Layout;