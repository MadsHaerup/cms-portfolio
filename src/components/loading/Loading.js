import React from "react";
import "./Loading.css";
import { motion } from "framer-motion";

export default function Loading() {
	const container = {
		hidden: { opacity: 0, y: "-100vh" },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				when: "beforeChildren",
				ease: "easeInOut",
				duration: 1.5,
				delayChildren: 0.5,
				staggerChildren: 0.5,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, x: -400 },
		show: { opacity: 1, x: -100 },
	};
	const itemTwo = {
		hidden: { opacity: 0, x: 400 },
		show: { opacity: 1, x: 100, backgroundColor: "#e4ff49" },
	};
	return (
		<motion.div className="loading" variants={container} initial="hidden" animate="show">
			{/* <Logo /> */}
			<motion.h1 variants={item}>Mads</motion.h1>
			<motion.h1 variants={itemTwo}>Hærup</motion.h1>
		</motion.div>
	);
}
