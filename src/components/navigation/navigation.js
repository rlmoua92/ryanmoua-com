import React from 'react';
import './navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = (props) => {
	const {
		navItems,
		currentContent,
	} = props;

	return (
		<div className="navigation flex flex-column text-center">
			{
				navItems.map(item => {
					const className = "navigation-item" + (currentContent === item.linkID ? " active" : "");
					return (
						<div className={className} style={{backgroundColor: item.bgColor}} key={item.linkID}>
							<button onClick={() => props.onNavigationClick(item.linkID)}>
								<a href={item.linkTarget}>
									<FontAwesomeIcon icon={item.linkIcon} />
									<div className="navigation-text">{item.linkText}</div>
								</a>
							</button>
						</div>
					)
				})
			}
		</div>
	);
};

export default Navigation;