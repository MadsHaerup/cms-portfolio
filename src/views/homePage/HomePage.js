import "./HomePage.css";
import loadable from "@loadable/component";
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
