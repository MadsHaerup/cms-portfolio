import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
	return (
		<AnimatedCursor
			innerSize={14}
			outerSize={18}
			color="254, 179, 0"
			outerAlpha={0.2}
			innerScale={0.7}
			outerScale={2.5}
		/>
	);
}
