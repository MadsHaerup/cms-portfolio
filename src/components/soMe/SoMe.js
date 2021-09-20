import React from "react";
import "./SoMe.css";
import { FaGithub, FaLinkedinIn, FaDev } from "react-icons/fa";
import ListItem from "./ListItem";

export default function SoMe() {
	return (
		<ul className="soMe">
			<ListItem icon={<FaGithub />} src="https://github.com/MadsHaerup" />
			<ListItem icon={<FaLinkedinIn src="https://www.linkedin.com/in/mads-h%C3%A6rup-24b00a218/" />} />
			<ListItem icon={<FaDev />} src="https://dev.to/madshaerup" />
		</ul>
	);
}
