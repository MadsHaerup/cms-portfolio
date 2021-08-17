import React from "react";
import "./Loading.css";
import { motion } from "framer-motion";
import Logo from "../../assets/logo/Logo";

export default function Loading() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 2,
				staggerChildren: 1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, x: -100 },
		show: { opacity: 1, x: 100 },
	};
	return (
		<motion.div className="loading" variants={container} initial="hidden" animate="show">
			<Logo />
			<motion.h1 variants={item}>Mads</motion.h1>
			<motion.h1 variants={item}>Hærup</motion.h1>
		</motion.div>
	);
}
