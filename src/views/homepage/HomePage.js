import Projects from '../../components/projects/Projects';
import './HomePage.css';
import SkewedText from '../../components/skewedText/SkewedText';
import Footer from '../../components/footer/Footer';
import TextBox from '../../components/textBox/TextBox';


export default function HomePage() {

  return (
    <div className="homePage">
      <section>
        <SkewedText/>
        <TextBox text ="Mads Hærup" />
      </section>

      <section id="projects">
      <Projects />
      </section>

      <Footer/>
    </div>
  )
}
