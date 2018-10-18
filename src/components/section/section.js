import React from 'react';
import './section.scss';

const Section = (props) => {
	const {
		bgURL,
		children,
	} = props;

	return (
		<div 
			className="section"
			style={{ backgroundImage: 'url(' + bgURL + ')'}}
		>
			{children ?
				<div className="section-content">
					{children}
				</div> :
				null
			}
		</div>
	);
};

export default Section;