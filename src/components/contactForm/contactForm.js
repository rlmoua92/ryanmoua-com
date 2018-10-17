import React from 'react';
import './contactForm.scss';

const ContactForm = (props) => {
	return (
		<form className="flex flex-wrap">
			<div className="form-field name">
				<input type="text" className="w-100" placeholder="Name" />
			</div>
			<div className="form-field e=mail">
				<input type="text" className="w-100" placeholder="Email Address" />
			</div>
			<div className="form-field form-content flex-100">
				<textarea className="w-100" placeholder="Enter Message Here:" />
			</div>
			<div className="form-button">
				<button type="submit">SEND</button>
			</div>
		</form>
	);
}

export default ContactForm;