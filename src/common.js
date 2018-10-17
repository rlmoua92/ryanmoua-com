import React from 'react';

export const withHidden = (Component) => ({currentContent, sectionID, ...rest}) => {
	return (
		currentContent === sectionID ?
		<Component {...sectionID} {...rest} /> :
		null
	);
};