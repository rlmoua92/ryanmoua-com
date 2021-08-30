import React from 'react';
import './project.scss';

const Project = (props) => {
	const { project } = props;
	return (
		<div className="project text-center flex flex-column">
			<div className="project-img">
				{
					project.links.length ?
						<a href={project.links[0].linkTarget} target="_blank" rel="noopener noreferrer">
							<img src={project.imageURL} alt={project.name} />
						</a> :
						<img src={project.imageURL} alt={project.name} />
				}
			</div>
			<div className="project-name text-left">{project.name}</div>
			<div className="project-lang text-left">Technologies: {project.tech}</div>
			<div className="project-desc text-left">{project.desc}</div>
			<div className="project-links flex">
				{
					project.links.map(link => {
						return (
							<a key={link.type} href={link.linkTarget} target="_blank" rel="noopener noreferrer"><img src={link.type === "heroku" ? '/local/heroku-logo-stroke-purple.png' : '/local/GitHub-Mark-Dark-64px.png'} alt={link.type} /></a>
						);
					})
				}
			</div>
		</div>
	);
};

export default Project;