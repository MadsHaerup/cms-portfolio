import React from "react";
import ToTopBtn from "../totopButton/ToTopBtn";
import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<ul className="footerList">
				<li className="footerList__item">
					<a className="footerList__item__Link" href="">
						Github
					</a>
				</li>
				<li className="footerList__item">
					<a className="footerList__item__Link" href="">
						LinkedIn
					</a>
				</li>
				<li className="footerList__item">
					<a className="footerList__item__Link" href="">
						Dev
					</a>
				</li>
				<li className="footerList__item">
					<a className="footerList__item__Link" href="">
						CodePen
					</a>
				</li>
			</ul>

			<ToTopBtn />
		</footer>
	);
}
