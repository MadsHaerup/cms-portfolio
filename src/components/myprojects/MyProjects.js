import React from "react";
import "./MyProjects.css";
import Project from "./Project";
import { ProjectData } from "./ProjectData";
export default function MyProjects() {
	return (
		<div id="projects">
			<div className="allprojects">
				{ProjectData.map(({ id, ...otherProps }) => (
					<Project key={id} {...otherProps} />
				))}
			</div>
		</div>
	);
}
