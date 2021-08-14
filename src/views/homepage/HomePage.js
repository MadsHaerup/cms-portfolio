import Projects from '../../components/projects/Projects';
import './HomePage.css';
import Headline from '../../components/headline/Headline';
import SkewedText from '../../components/skewedText/SkewedText';
import Footer from '../../components/footer/Footer';


export default function HomePage() {

  return (
    <div className="homePage">
      <Headline/>
      <section>
        <SkewedText/>
      </section>

      <section>
        <Projects />
      </section>
      <Footer/>
    </div>
  )
}
