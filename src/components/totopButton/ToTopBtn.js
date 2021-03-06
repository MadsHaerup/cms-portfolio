import React from "react";
import BackToTop from "react-easy-back-to-top";

export default function ToTopBtn() {
	return (
		<BackToTop
			backgroundColor="white"
			position={{ right: "2%", bottom: "0%" }}
			hover={{ backgroundColor: "black", color: "white" }}
			transition="all 0.5s"
			showOnDistance={0}
			borderRadius="50%"
			opacity="1"
			color="black"
			fontSize="12px"
			icon="fas fa-arrow-up"
		/>
	);
}
