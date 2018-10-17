import React from 'react';
import './section.scss';

const Section = (props) => {
	const {
		sectionID,
		bgURL,
		children,
	} = props;

	return (
		<div 
			id={sectionID} 
			className="section"
			style={{ backgroundURL: bgURL}}
		>
			<div className="section-content">
				{children}
			</div>
		</div>
	);
};

export default Section;