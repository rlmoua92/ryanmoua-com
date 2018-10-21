import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './iconHeader.scss';

const iconHeader = (props) => {
	const {
		icon,
		children,
	} = props;
	return (
		<div className="icon-header">
			<FontAwesomeIcon icon={icon} /><span className="icon-header-text">{children}</span>
		</div>
	);
};

export default iconHeader;