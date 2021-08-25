import React from "react";
import { send } from "emailjs-com";
import { useState } from "react";
import "./EmailForm.css";

export default function EmailForm() {
	const [toSend, setToSend] = useState({
		from_name: "",
		to_name: "Mads",
		message: "",
		reply_to: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		send(process.env.REACT_APP_GMAILID, process.env.REACT_APP_TEMPLATEID, toSend, process.env.REACT_APP_EMAILJSUSERID)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
			})
			.catch((err) => {
				console.log("FAILED...", err);
			});
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};
	return (
		<form onSubmit={onSubmit}>
			<label for="from_name">Full name:</label>
			<input
				id="from_name"
				type="text"
				name="from_name"
				placeholder="Your Full Name"
				value={toSend.from_name}
				onChange={handleChange}
			/>
			<label for="reply_to">Enter your email:</label>
			<input
				id="reply_to"
				type="email"
				name="reply_to"
				placeholder="Your email"
				value={toSend.reply_to}
				onChange={handleChange}
			/>
			<label for="message">Enter your message:</label>
			<textarea
				id="message"
				name="message"
				placeholder="Your message"
				value={toSend.message}
				onChange={handleChange}
				rows="5"
				cols="33"
			/>

			<button type="submit">Send Email</button>
		</form>
	);
}
