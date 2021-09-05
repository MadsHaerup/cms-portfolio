import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../AnimatedTitle";

export const ProjectsTitle = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });

	const container = {
		hidden: { opacity: 0 },
		show: {
			duration: 1,
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				type: "spring",
				bounce: 0.25,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 50 },
		show: { opacity: 1, y: 0 },
	};
	return (
		<motion.h1
			ref={ref}
			initial="hidden"
			animate={inView ? "show" : "hidden"}
			exit="hidden"
			variants={container}
			data-splitting=""
			className="words chars splitting">
			<motion.span variants={item} className="char" data-char="P">
				p
			</motion.span>

			<motion.span variants={item} className="char" data-char="r">
				r
			</motion.span>

			<motion.span variants={item} className="char" data-char="o">
				o
			</motion.span>

			<motion.span variants={item} className="char" data-char="j">
				j
			</motion.span>

			<motion.span variants={item} className="char" data-char="e">
				e
			</motion.span>

			<motion.span variants={item} className="char" data-char="c">
				c
			</motion.span>

			<motion.span variants={item} className="char" data-char="t">
				t
			</motion.span>
			<motion.span variants={item} className="char" data-char="s">
				s
			</motion.span>
		</motion.h1>
	);
};
