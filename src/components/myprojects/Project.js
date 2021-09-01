import React from "react";
import "./Projects.css";

export default function Project({ imageUrl, title, description, github, webUrl }) {
	return (
		<div className="item-wrap">
			<a href={webUrl} target="_blank" className="image" style={{ backgroundImage: `url(${imageUrl})` }} rel="noreferrer"></a>
			<div className="info">
				<h3>
					<span>{title}</span>
				</h3>
				<p>
					<span>{description}</span>
				</p>
				<a className="item-wrap__link" href={github} target="_blank" rel="noreferrer">
					View on Github
				</a>
			</div>
		</div>
	);
}
