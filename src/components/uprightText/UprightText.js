import React from "react";
import "./UprightText.css";

export default function UprightText({ text }) {
	return (
		<div>
			<p className="upright">{text}</p>
		</div>
	);
}
