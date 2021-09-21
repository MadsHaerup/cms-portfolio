import React from "react";
import { NavbarData } from "./NavbarData";
import "./Navbar.css";
import { motion } from "framer-motion";

export default function Navbar() {
	return (
		<nav>
			<ul className="navigationItems">
				{NavbarData.map((item) => (
					<motion.li
						key={item.id}
						className="navigationsItems__item"
						whileHover={{ scale: 1.3, originX: 0, color: "var(--hover-color)" }}
						transition={{ type: "spring", stiffness: 250 }}>
						<a href={item.path}>{item.title}</a>
					</motion.li>
				))}
			</ul>
		</nav>
	);
}
