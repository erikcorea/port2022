import Main from './Components/Main.js'
import About from './Components/About.js';
import Navbar from './Components/Navbar.js';
import './Styling/main.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div id="section2">
        <About />
      </div>
      <div id="section3">
        <h1>Section 3</h1>
      </div>
      <div id="section4">
        <h1>Section 4</h1>
      </div>
    </div>
  );
}

export default App;
