import React from "react";
import gif from "../../assets/gif/pbanimation-min.gif";
import img from "../../assets/images/inline-circles.svg";
import "./Introduction.css";
export const Introduction = () => {
	return (
		<section className="introduction">
			<img className="gif" src={gif} alt="gif" />
			<div className="introContainer">
				<p className="introText">
					Hey I'm Mads, a frontend{" "}
					<span className="greenRing" style={{ backgroundImage: `url(${img})` }}>
						developer
					</span>
				</p>
				<p className="introText sm">
					I'm open to work 🖐🏼
					<a className="followUp__cta__link" href="#contact">
						Reach out!
					</a>
				</p>
			</div>
		</section>
	);
};
