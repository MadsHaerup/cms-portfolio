import "./HomePage.css";
import loadable from "@loadable/component";
import { Introduction } from "../../components/introduction/Introduction";
const Contact = loadable(() => import("../contact/Contact"));
const MyProjects = loadable(() => import("../../components/myprojects/MyProjects"));
const Skills = loadable(() => import("../../components/skills/Skills"));

export default function HomePage() {
	return (
		<>
			<div className="homePage">
				<section id="home">
					<Introduction />
				</section>

				<section id="about">
					<Skills />
				</section>

				<section id="projects">
					<MyProjects />
				</section>

				<section id="contact">
					<Contact />
				</section>
			</div>
		</>
	);
}
