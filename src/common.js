import React from 'react';

export const withHidden = (Component) => ({currentContent, sectionID, ...rest}) => {
	return (
		currentContent === sectionID ?
		<Component {...sectionID} {...rest} /> :
		null
	);
};


export function smoothScroll(offSetY) {
	let currentOffset = window.scrollY;
	const distance = Math.abs(currentOffset - offSetY);
	let timer = null;

	function scrollTick() {
		if (currentOffset < offSetY) {
			currentOffset = currentOffset + (distance / 10) <= offSetY ? currentOffset + (distance / 10) : offSetY;
			window.scrollTo(0, currentOffset);
		} else if (currentOffset > offSetY) {
			currentOffset = currentOffset - (distance / 10) >= offSetY ? currentOffset - (distance / 10) : offSetY;
			window.scrollTo(0, currentOffset);
		} else {
			clearInterval(timer);
		}
	}
	timer = setInterval(scrollTick, 20);
}