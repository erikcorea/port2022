import Main from './Components/Main.js'
import About from './Components/About.js';
import Navbar from './Components/Navbar.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import './Styling/main.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="section1">
      <Main />
      </div>
      <div id="section2">
        <About />
      </div>
      <div id="section3">
        <Projects />
      </div>
      <div id="section4">
        <Contact />
      </div>
    </div>
  );
}

export default App;
