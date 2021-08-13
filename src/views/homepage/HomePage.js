import Projects from '../../components/projects/Projects';
import './HomePage.css';
import Headline from '../../components/headline/Headline';
import SkewedText from '../../components/skewedText/SkewedText';
import HeroImage from '../../components/HeroImage/HeroImage';


export default function HomePage() {

  return (
    <div className="homePage">
      <Headline/>
      <section>
        <HeroImage/>
        <SkewedText/>
      </section>

      <section>
        <Projects />
      </section>
    </div>
  )
}
