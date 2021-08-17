import React, { useEffect } from "react";
import "./TextBox.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function TextBox({ text }) {
	const { ref, inView } = useInView({ threshold: 0.5 });

	const transition = {
		duration: 1.3,
		delay: 0.2,
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
			className="textBox"
			ref={ref}
			initial="hidden"
			animate={inView ? "show" : "hidden"}
			exit="hidden"
			variants={variants}>
			{`Header inside viewport ${inView}.`}
			<h1> {text} </h1>
		</motion.div>
	);
}
