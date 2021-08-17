import React from "react";
import { motion } from "framer-motion";

// const svgVariants = {
//   hidden:{opacity:1},
//   visible:{
//     opacity:1, transition: {duration: 1}
//   }
// }

// const pathVariants = {
//   hidden:{
//     opacity:0,
//     pathLength:0,
//   },
//   visible:{
//     opacity: 1,
//     pathLength: 1,
//     transition:{
//       duration: 2,
//       ease: "easeInOut"
//     }
//   }
// }

export default function Logo() {
	return (
		<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
			<motion.path
				d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
				stroke="black"
				fill="transparent"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={{ pathLength: 1, opacity: 1 }}
				transition={{
					duration: 2,
					ease: "easeInOut",
				}}
			/>
		</svg>
	);
}
