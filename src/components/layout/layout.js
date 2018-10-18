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
					<Section bgURL="/local/bball-fpo.jpg" />
					{/*<SectionWithHidden currentContent={currentContent} sectionID="education">
						<h2>Education</h2>
					</SectionWithHidden>*/}
					<Section sectionID="experience">
						<h2>Experience</h2>
						<div>For more information click the following button to see my resume.</div>
						<button><a href="/local/resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a></button>
					</Section>
					<Section bgURL="/local/traction-fpo.jpg" />
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