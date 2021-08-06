import Person from '../../components/person/Person';
import ProjectSection from '../../components/projectSection/ProjectSection';
import './HomePage.css';

export default function HomePage() {

  return (
    <div className="homePage">
      <div>
      <Person/>
      </div>
      <div>
        {/* <ProjectSection/> */}
      </div>
    </div>
  )
}
