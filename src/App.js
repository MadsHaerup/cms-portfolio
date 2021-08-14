import { Router } from "@reach/router";
import Cursor from "./components/cursor/Cursor";
import HeroGif from "./components/heroSection/HeroGif";
import Navbar from "./components/navbar/Navbar";
import SoMe from "./components/soMe/SoMe";
import AllBlogs from "./views/blog/AllBlogs";
import Blog from "./views/blog/Blog";
import HomePage from "./views/homepage/HomePage";
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Cursor />
      <Navbar/>
      <SoMe/>
  
      <Router>
        <HomePage path="/" />
        
        <AllBlogs path="blog" />
        <Blog path="blog/:id" />
      </Router>
     
    </div>
  );
}
export default App;
