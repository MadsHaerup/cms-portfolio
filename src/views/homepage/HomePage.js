import HeroImage from '../../components/heroSection/HeroImage';
import Projects from '../../components/projects/Projects';
import './HomePage.css';
import Headline from '../../components/headline/Headline';

export default function HomePage() {

  return (
    <div className="homePage">
      <Headline/>
      <section>
        <HeroImage/>
      </section>

      <section>
        <Projects />
      </section>
    </div>
  )
}
