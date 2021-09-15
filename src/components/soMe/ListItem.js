import React from "react";
import { motion } from "framer-motion";

export default function ListItem({ icon, src }) {
	return (
		<motion.li
			whileHover={{ scale: 1.2, backgroundColor: "var(--hover-color)" }}
			transition={{ type: "spring", stiffness: 250 }}>
			<a href={src} target="_blank" rel="noopener noreferrer">
				{icon}
			</a>
		</motion.li>
	);
}
