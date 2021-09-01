import React from "react";
import "./MyProjects.css";
import Project from "./Project";
import UprightText from "../uprightText/UprightText";
import { ProjectData } from "./ProjectData";
export default function MyProjects() {
	return (
		<div id="projects">
			<UprightText text="Projects" />
			<div className="allprojects">
				{ProjectData.map(({ id, ...otherProps }) => (
					<Project key={id} {...otherProps} />
				))}
			</div>
		</div>
	);
}
