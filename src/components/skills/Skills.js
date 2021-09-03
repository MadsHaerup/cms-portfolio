import React from "react";
import { AnimatedTitle } from "../animatedTitle/AnimatedTitle";
import "./Skills.css";

export const Skills = () => {
	return (
		<div className="skills">
			<div className="skills__header">
				<div className="skills__header__image"></div>
				{/* <h1 className="skills__header__title">SKILLS</h1> */}
				<AnimatedTitle />
			</div>
		</div>
	);
};
