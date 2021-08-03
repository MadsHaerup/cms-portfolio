import { Router } from "@reach/router";
import BlogPost from "./components/blogPost/BlogPost";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Blog from "./views/blog/Blog";
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
        <Blog path="blog" />
        <BlogPost path="blogpost/:id" />
      </Router>
      <Footer/>
     
    </div>
  );
}
export default App;
