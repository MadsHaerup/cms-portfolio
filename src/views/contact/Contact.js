import React from "react";
import { ContactTitle } from "../../components/animatedTitle/contactTitle/ContactTitle";
import EmailForm from "../../components/contact/EmailForm/EmailForm";
import "./Contact.css";
export const Contact = () => {
	return (
		<div className="contact">
			<ContactTitle />
			<div>
				<EmailForm />
			</div>
		</div>
	);
};
