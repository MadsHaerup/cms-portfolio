import React from "react";
import EmailForm from "../../components/contact/EmailForm/EmailForm";
import UprightText from "../../components/uprightText/UprightText";
import { ReactComponent as Keyboard } from "../../components/contact/EmailForm/keyboard.svg";
import "./Contact.css";
export const Contact = () => {
	return (
		<div className="contact">
			<div>
				<div style={{ maxWidth: "100%", height: "30%" }}>
					<Keyboard />
				</div>
				<EmailForm />
			</div>
		</div>
	);
};
