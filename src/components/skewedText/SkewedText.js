import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Skewed.css";

export default function SkewedText({ text }) {
	const { ref, inView } = useInView({ threshold: 0.8 });

	const transition = {
		duration: 1.3,
		// delay: 0.1,
		ease: "easeInOut",
	};

	const variants = {
		hidden: {
			opacity: 0,
			transition,
		},
		show: {
			opacity: 1,
			transition,
		},
	};
	return (
		<motion.div
			className="skewed"
			ref={ref}
			initial="hidden"
			animate={inView ? "show" : "hidden"}
			exit="hidden"
			variants={variants}>
			<h1>{text}</h1>
		</motion.div>
	);
}
