import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./FollowUp.css";

export const FollowUp = () => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const container = {
		hidden: { opacity: 0 },
		show: {
			duration: 0.5,
			opacity: 1,
			transition: {
				delayChildren: 0.1,
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
		<>
			<motion.div
				ref={ref}
				initial="hidden"
				animate={inView ? "show" : "hidden"}
				exit="hidden"
				variants={container}
				className="followUp">
				<h1 className="followUp__title">
					<motion.span variants={item}>I'm</motion.span>
					<motion.span variants={item}>open to work.</motion.span>
				</h1>
				<div className="followUp__cta">
					<a className="followUp__cta__link" href="#contact">
						Reach out!
					</a>
				</div>
			</motion.div>
		</>
	);
};
