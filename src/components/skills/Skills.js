import React from "react";
import { AnimatedTitle } from "../animatedTitle/AnimatedTitle";
import "./Skills.css";

export const Skills = () => {
	return (
		<div className="skills">
			<AnimatedTitle />
			<div className="skills__overview">
				<div className="skills__overview__details">
					<details>
						<summary>REACT</summary>
						<ul>
							<li>REACT QUERY</li>
						</ul>
					</details>
					<details>
						<summary>REACT</summary>
						<ul>
							<li>REACT QUERY</li>
						</ul>
					</details>
					<details>
						<summary>REACT</summary>
						<ul>
							<li>REACT QUERY</li>
						</ul>
					</details>
				</div>
				<div className="skills__overview__bggimage"></div>
			</div>
		</div>
	);
};
