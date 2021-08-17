import React from "react";
import { NavbarData } from "./NavbarData";
import { Link } from "@reach/router";
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
						<NavLink to={item.path}>{item.title}</NavLink>
					</motion.li>
				))}
			</ul>
		</nav>
	);
}

const NavLink = (props) => (
	<Link
		{...props}
		getProps={({ isCurrent }) => {
			// the object returned here is passed to the
			// anchor element's props
			return {
				style: {
					color: isCurrent ? "#FBAF08" : "#2F1829",
				},
			};
		}}
	/>
);
