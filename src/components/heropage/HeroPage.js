import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HeroPage.css";

export const HeroPage = () => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const container = {
		hidden: { opacity: 0 },
		show: {
			duration: 1,
			opacity: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.2,
				type: "spring",
				bounce: 1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 50 },
		show: { opacity: 1, y: 0 },
	};
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "show" : "hidden"}
			exit="hidden"
			variants={container}
			className="heroPage">
			<h1 className="heroPage__title">
				<motion.span variants={item}>Hi,</motion.span>
				<motion.span variants={item}>I'm Mads,</motion.span>
				<motion.span variants={item}>Front-end</motion.span>
				<motion.span variants={item}>Developer</motion.span>
			</h1>
		</motion.div>
	);
};
