import React from "react";
import "./Projects.css";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";

export default function Project({ imageUrl, title, description, github, webUrl }) {
	const ref = React.useRef(null);
	const { style, ...mouseHandlers } = use3dEffect(ref);

	return (
		<div className="item-wrap">
			<animated.a
				href={webUrl}
				target="_blank"
				className="image"
				rel="noreferrer"
				ref={ref}
				style={{
					backgroundImage: `url(${imageUrl})`,
					...style,
				}}
				{...mouseHandlers}
			/>
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
