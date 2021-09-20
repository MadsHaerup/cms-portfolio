import React from "react";
import "./Contact.css";
export const Contact = () => {
	return (
		<div className="contact">
			<div>
				<a className="contact__email" href="mailto:Madshaerup@outlook.com">
					<span>@</span> Let's Connect{" "}
					<span>
						<i className="fas fa-arrow-right"></i>
					</span>
				</a>
			</div>
		</div>
	);
};
