import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './section.scss';

const Section = (props) => {
	const {
		bgURL,
		transitionIn,
		children,
	} = props;

	return (
		<div 
			className="section"
			style={{ backgroundImage: 'url(' + bgURL + ')'}}
		>
			{children ?
				<div className="section-content">
					<CSSTransition
						in={transitionIn}
						timeout={1000}
						classNames="fade"
					>
						<div>
							{children}
						</div>
					</CSSTransition>
				</div> :
				null
			}
		</div>
	);
};

export default Section;