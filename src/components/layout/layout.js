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
		onNavigationClick,
		isShowingBanner,
		sectionRefs,
	} = props;

	return (
		<div>
			<Banner isHidden={!isShowingBanner}>
				<h1>Ryan Moua.</h1>
				<h2>Aspiring Front-end Developer.</h2>
			</Banner>
			<div className="content">
				<Navigation 
					onNavigationClick={onNavigationClick}
					sectionRefs={sectionRefs}
				/>
				<div>
					<Section ref={sectionRefs.about}>
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
					<Section ref={sectionRefs.projects}>
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
					<Section ref={sectionRefs.experience}>
						<h2>Experience</h2>
						<div>For more information click the following button to see my resume.</div>
						<button><a href="/local/resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a></button>
					</Section>
					<Section bgURL="/local/traction-fpo.jpg" />
					<Section ref={sectionRefs.contact}>
						<h2>Contact</h2>
						<p>Have a question or just want to get in contact with me? Feel free to reach out via the form below: </p>
						<ContactForm />
					</Section>
					<div className="footer">
						© 2018 Ryan Moua
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;