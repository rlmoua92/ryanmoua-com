import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contactIcon.scss';

const ContactIcon = (props) => {
	const {
		icon,
		link,
		newTab,
	} = props;
	return (
		<div className="contact-icon">
			<a href={link} target={newTab ? "_blank" : "_self"}><FontAwesomeIcon icon={icon} /></a>
		</div>
	);
};

export default ContactIcon;