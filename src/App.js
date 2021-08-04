import { Router } from "@reach/router";
import Navbar from "./components/navbar/Navbar";
import Person from "./components/person/Person";
import SoMe from "./components/soMe/SoMe";
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SoMe/>

      <Person/>
      <Router>
      </Router>
     
    </div>
  );
}
export default App;
