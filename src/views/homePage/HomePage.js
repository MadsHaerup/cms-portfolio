import "./HomePage.css";
import Footer from "../../components/footer/Footer";
import { Skills } from "../../components/skills/Skills";
import MyProjects from "../../components/myprojects/MyProjects";
import { Contact } from "../contact/Contact";
import { HeroPage } from "../../components/heropage/HeroPage";

export default function HomePage() {
	return (
		<div className="homePage">
			<section id="home">
				<HeroPage />
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

			<Footer />
		</div>
	);
}
