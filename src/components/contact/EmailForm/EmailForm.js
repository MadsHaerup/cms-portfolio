import React from "react";
import { send } from "emailjs-com";
import { useState } from "react";
import "./EmailForm.css";
import { InputGroup } from "../Input/InputGroup";
import { FormSucces } from "../FormSucces/FormSucces";
import { useForm } from "react-hook-form";

export default function EmailForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const [toSend, setToSend] = useState({
		from_name: "",
		to_name: "Mads",
		message: "",
		reply_to: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
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
		<>
			{!isSubmitted ? (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="inputGroup__Container">
						<div>
							<InputGroup
								value={toSend.from_name}
								onChange={handleChange}
								htmlFor="from_name"
								id="from_name"
								type="text"
								name="from_name"
								labelText="Full name"
								register={{ ...register("fromName", { required: true }) }}
							/>
							{errors.fromName && <span>This field is required</span>}
						</div>
						<div>
							<InputGroup
								value={toSend.reply_to}
								onChange={handleChange}
								id="reply_to"
								type="email"
								name="reply_to"
								labelText="Enter your email"
								register={{
									...register(
										"replyTo",
										{ required: true },
										{ patter: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ }
									),
								}}
							/>
							{errors.replyTo && <span>This field is required</span>}
						</div>
					</div>

					<div className="inputGroup">
						<label className="inputGroup__messageLabel" htmlFor="message">
							Enter your message:
						</label>
						<textarea
							id="message"
							name="message"
							value={toSend.message}
							onChange={handleChange}
							rows="5"
							cols="33"
							register={{ ...register("message", { required: true }) }}
						/>
						{errors.message && <span>This field is required</span>}
					</div>

					<button type="submit">Send Email</button>
				</form>
			) : (
				<FormSucces />
			)}
		</>
	);
}
