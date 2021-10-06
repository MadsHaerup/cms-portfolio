import React from "react";
import ToTopBtn from "../totopButton/ToTopBtn";
import { FaGithub, FaLinkedinIn, FaDev } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<ul className="footerList">
				<li className="footerList__item">
					<a className="footerList__item__Link" href="https://github.com/MadsHaerup">
						<span className="footerList__item__Link__name">Github</span>
						<FaGithub />
					</a>
				</li>
				<li className="footerList__item">
					<a className="footerList__item__Link" href="https://www.linkedin.com/in/mads-h%C3%A6rup-24b00a218/">
						<span className="footerList__item__Link__name">LinkedIn</span>
						<FaLinkedinIn />
					</a>
				</li>
				<li className="footerList__item">
					<a className="footerList__item__Link" href="https://dev.to/madshaerup">
						<span className="footerList__item__Link__name">Dev</span>
						<FaDev />
					</a>
				</li>
			</ul>

			<ToTopBtn />
		</footer>
	);
}
