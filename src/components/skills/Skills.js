import React from "react";
import { AnimatedTitle } from "../animatedTitle/AnimatedTitle";
import "./Skills.css";

export const Skills = () => {
	return (
		<div className="skills">
			<AnimatedTitle />
			<div className="skills__overview">
				<div>
					<p>As a Front-end Dev graduate I have been programming in several languages</p>
					<p>I have the most experience in Html, CSS, Javascript, React, Sass, git, Jest </p>
					<code>Js</code>
				</div>
				<div className="skills__overview__libraries">
					<span>
						<i className="fab fa-node"></i>
					</span>
					<span>
						<i className="fab fa-js"></i>
					</span>
					<span>
						<i className="fab fa-react"></i>
					</span>
					<span>
						<i className="fab fa-html5"></i>
					</span>
					<span>
						<i className="fab fa-css3-alt"></i>
					</span>
					<span>
						<i className="fab fa-git-square"></i>
					</span>
					<span>
						<i className="fab fa-sass"></i>
					</span>
				</div>
			</div>
		</div>
	);
};
