import React from "react";
import "./Loading.css";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

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

	return (
		<motion.div className="loading" variants={container} initial="hidden" animate="show">
			<HashLoader variants={item} size={150} />
		</motion.div>
	);
}
