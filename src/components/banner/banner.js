import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import './banner.scss';

const Banner = (props) => {
	const {
		onButtonClick,
	} = props;

	return (
		<div className="banner flex space-around v-align-center">
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