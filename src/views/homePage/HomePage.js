import "./HomePage.css";
import SkewedText from "../../components/skewedText/SkewedText";
import Footer from "../../components/footer/Footer";
import { Skills } from "../../components/skills/Skills";

export default function HomePage() {
	return (
		<div className="homePage">
			<section>
				<div className="herosection">
					<SkewedText text="Mads Hærup" />
					<SkewedText text="Front End Developer" />
					<SkewedText text="Reach Out!" />
				</div>
			</section>

			<section>
				<Skills />
			</section>

			<Footer />
		</div>
	);
}
