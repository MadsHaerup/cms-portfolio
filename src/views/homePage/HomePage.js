import "./HomePage.css";
// import Footer from "../../components/footer/Footer";
import { Skills } from "../../components/skills/Skills";
import MyProjects from "../../components/myprojects/MyProjects";
import { Contact } from "../contact/Contact";
import { HeroPage } from "../../components/heropage/HeroPage";
import { FollowUp } from "../../components/heropage/followup/FollowUp";

export default function HomePage() {
	return (
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

			{/* <Footer /> */}
		</div>
	);
}
