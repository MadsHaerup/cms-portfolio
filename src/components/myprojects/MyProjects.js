import React from "react";
import "./MyProjects.css";
import Project from "./Project";
import { ProjectData } from "./ProjectData";
import { ProjectsTitle } from "../animatedTitle/projectsTitle/ProjectsTitle";
export default function MyProjects() {
	return (
		<div className="allprojects">
			<ProjectsTitle />
			{ProjectData.map(({ id, ...otherProps }) => (
				<Project key={id} {...otherProps} />
			))}
		</div>
	);
}
