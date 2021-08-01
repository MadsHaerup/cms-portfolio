import Navbar from "./components/navbar/Navbar";
import HomePage from "./views/homepage/HomePage";
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
     
    </div>
  );
}
export default App;
