import React from "react";
import "./MyProjects.css";
import Project from "./Project";
import UprightText from "../uprightText/UprightText";
export default function MyProjects() {
	return (
		<div id="projects">
			<UprightText text="Projects" />
			<div className="allprojects">
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	);
}
