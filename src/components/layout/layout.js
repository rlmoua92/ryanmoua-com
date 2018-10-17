import React from 'react';
import Banner from '../banner';
import Section from '../section';
import Navigation from '../navigation';
import Project from '../project';
import ContactForm from '../contactForm';
import './layout.scss';

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
				<h1>Ryan Moua.</h1>
				<h2>Aspiring Front-end Developer.</h2>
			</Banner>
			<div className="content">
				<Navigation 
					currentContent={currentContent}
					onNavigationClick={onNavigationClick}
				/>
				<div>
					<Section sectionID="about-me">
						<h2>About Me</h2>
					</Section>
					<Section bgURL="/images/circuit-fpo.jpg" />
					<Section sectionID="projects">
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
					</Section>
					<Section bgURL="/images/bball-fpo.jpg" />
					{/*<SectionWithHidden currentContent={currentContent} sectionID="education">
						<h2>Education</h2>
					</SectionWithHidden>*/}
					<Section sectionID="resume">
						<h2>Resume</h2>
					</Section>
					<Section bgURL="/images/traction-fpo.jpg" />
					<Section sectionID="contact">
						<h2>Contact</h2>
						<p>Have a question or just want to get in contact with me? Feel free to reach out via the form below: </p>
						<ContactForm />
					</Section>
				</div>
			</div>
		</div>
	);
};

export default Layout;