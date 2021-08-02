import { Router } from "@reach/router";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./views/homepage/HomePage";
import Projects from "./views/projects/Projects";
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <HomePage path="/"/>
        <Projects path="projects" />
      </Router>
      <Footer/>
     
    </div>
  );
}
export default App;
