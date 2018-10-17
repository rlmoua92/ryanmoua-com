import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import './banner.scss';

const Banner = (props) => {
	const {
		isHidden,
		onButtonClick,
	} = props;

	const bannerHeight = isHidden ? { height: '25px' } : { height: '100vh' };

	return (
		<div className="banner flex space-around v-align-center" style={bannerHeight}>
			<div className="banner-content text-center">
				{props.children}
				<button className="banner-button" onClick={onButtonClick}>
					<FontAwesomeIcon icon={faChevronDown} />
				</button>
			</div>
		</div>
	);
};

export default Banner;