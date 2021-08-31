import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export const InputGroup = ({ value, onChange, htmlFor, name, id, type, labelText, register }) => {
	const [isClicked, setIsClicked] = useState(false);
	const labelVariants = {
		clicked: {
			y: -20,
			scale: 1.3,
			originX: 0,
		},
		notClicked: {
			y: 25,
		},
	};
	return (
		<div className="inputGroup">
			<motion.label
				htmlFor={htmlFor}
				variants={labelVariants}
				animate={isClicked ? "clicked" : "notClicked"}
				onClick={() => {
					setIsClicked(true);
				}}>
				{labelText}
			</motion.label>
			<input id={id} type={type} name={name} value={value} onChange={onChange} register={register} />
		</div>
	);
};
