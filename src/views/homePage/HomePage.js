import "./HomePage.css";
import loadable from "@loadable/component";
// import { Skills } from "../../components/skills/Skills";
// import MyProjects from "../../components/myprojects/MyProjects";
// import { Contact } from "../contact/Contact";
// import { HeroPage } from "../../components/heropage/HeroPage";
// import { FollowUp } from "../../components/heropage/followup/FollowUp";
const HeroPage = loadable(() => import("../../components/heropage/HeroPage"));
const Contact = loadable(() => import("../contact/Contact"));
const MyProjects = loadable(() => import("../../components/myprojects/MyProjects"));
const Skills = loadable(() => import("../../components/skills/Skills"));
const FollowUp = loadable(() => import("../../components/heropage/followup/FollowUp"));

export default function HomePage() {
	return (
		<>
			<div className="homePage">
				<section id="home">
					<HeroPage />
					<FollowUp />
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
