import React from "react";
import "./BrowserMockup.css";

export default function BrowserMockup({ website, title }) {
	return (
		<div class="browser-mockup browser-mockup--quick-start">
			<div className="cover">
				<p className="cover__title">{title}</p>
			</div>

			<iframe className="projectFrame" id={title} title={title} width="100%" height="100%" src={website}></iframe>
		</div>
	);
}
