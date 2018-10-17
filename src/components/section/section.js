import React from 'react';
import './section.scss';

const Section = (props) => {
	const {
		sectionID,
		bgURL,
		children,
	} = props;

	console.log(bgURL);

	return (
		<div 
			id={sectionID} 
			className="section"
			style={{ backgroundImage: 'url(' + bgURL + ')'}}
		>
			<div className="section-content">
				{children}
			</div>
		</div>
	);
};

export default Section;