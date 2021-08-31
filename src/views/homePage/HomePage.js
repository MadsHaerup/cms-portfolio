import Projects from "../../components/projects/Projects";
import "./HomePage.css";
import SkewedText from "../../components/skewedText/SkewedText";
import Footer from "../../components/footer/Footer";
import TextBox from "../../components/textBox/TextBox";
import UprightText from "../../components/uprightText/UprightText";

export default function HomePage() {
	return (
		<div className="homePage">
			<section>
				<div className="herosection">
					<TextBox text="Mads Hærup" />
					<SkewedText />
					<TextBox text="Mads Hærup" />
				</div>
			</section>

			<Footer />
		</div>
	);
}
