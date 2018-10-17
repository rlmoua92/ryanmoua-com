import React from 'react';
import './navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = (props) => {
	const {
		navItems,
		currentContent,
		positionLeft,
	} = props;

	return (
		<div className="navigation flex flex-column text-center" style={{ left: positionLeft }}>
			{
				navItems.map(item => {
					if (item.type === 'Navigation') {
						const className = "navigation-item" + (currentContent === item.linkID ? " active" : "");
						return (
							<div className={className} style={{backgroundColor: item.bgColor}} key={item.linkID}>
								<button onClick={(e) => props.onNavigationClick(e, item.linkID)}>
									<FontAwesomeIcon icon={item.linkIcon} />
									<div className="navigation-text">{item.linkText}</div>
								</button>
							</div>
						);
					} else {
						return (
							<div className = "navigation-item" style={{backgroundColor: item.bgColor}} key={item.linkID}>
								<button>
									<a href={item.linkTarget} target="_blank" rel="noopener noreferrer">
										<FontAwesomeIcon icon={item.linkIcon} />
										<div className="navigation-text">{item.linkText}</div>
									</a>
								</button>
							</div>
						)
					}
				})
			}
		</div>
	);
};

export default Navigation;