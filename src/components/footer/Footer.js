import React from "react";
import ToTopBtn from "../totopButton/ToTopBtn";
import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<ul className="footerList">
				<li className="footerList__item">
					<a className="footerList__item__Link" href="https://github.com/MadsHaerup">
						Github
					</a>
				</li>
				<li className="footerList__item">
					<a className="footerList__item__Link" href="https://www.linkedin.com/in/mads-h%C3%A6rup-24b00a218/">
						LinkedIn
					</a>
				</li>
				<li className="footerList__item">
					<a className="footerList__item__Link" href="https://dev.to/madshaerup">
						Dev
					</a>
				</li>
			</ul>

			<ToTopBtn />
		</footer>
	);
}
