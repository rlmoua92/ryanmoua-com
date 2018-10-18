import React from 'react';
import './navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = (props) => {
	const {
		navItems,
		sectionRefs,
	} = props;

	return (
		<div className="navigation flex text-center">
			{
				navItems.map(item => {
					return (
						<div className="navigation-item" style={{backgroundColor: item.bgColor}} key={item.linkID}>
							<button onClick={() => props.onNavigationClick(item.linkID, sectionRefs[item.linkID])}>
								<FontAwesomeIcon icon={item.linkIcon} />
								<div className="navigation-text">{item.linkText}</div>
							</button>
						</div>
					)
				})
			}
		</div>
	);
};

export default Navigation;