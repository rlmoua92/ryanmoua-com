import React, { Component } from 'react';
import Project from './project.js';

class ProjectContainer extends Component {
	render() {
		const {
			project
		} = this.props;
		return (
			<Project project={project}/>
		);
	}
};

export default ProjectContainer;