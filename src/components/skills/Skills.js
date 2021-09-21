import React from "react";
import { AnimatedTitle } from "../animatedTitle/AnimatedTitle";
import "./Skills.css";
import img from "./explosion.svg";

export const Skills = () => {
	return (
		<div className="skills">
			<AnimatedTitle />
			<div className="skills__overview">
				<div className="skills__overview__text">
					<p>
						As a recent Front-end Developer graduate, I have been taught several programming languages and soft-skills.
						During my education I have learned to use Scrum as an agile work-tool, team-collaboration in person and
						remote utilizing, kanban, Gantt, github and git as our versioning program.
					</p>
					<p>My experience counts languages such as Html, CSS, Javascript, Sass. </p>
					<p>
						{" "}
						Frontend Libraries and Frameworks: <span>React, Next, Gatsby, Tailwind, Material-ui</span>{" "}
					</p>
					<p>
						Backend and Database: <span>Node, express, mongoDB</span>{" "}
					</p>
					<p>
						Testing tools: <span>Jest and testing-library</span>{" "}
					</p>
					<p>
						Headless-CMS: <span>Strapi, Sanity.io and CosmisJS</span>{" "}
					</p>
					<p>..and a lot more tools...</p>
				</div>
				<div className="skills__overview__libraries">
					<img src={img} alt="color explosion" loading="lazy" />
				</div>
			</div>
		</div>
	);
};
