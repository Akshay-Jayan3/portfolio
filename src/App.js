import About from "./componrnts/About";
import Home from "./componrnts/Home";
import Navbar from "./componrnts/Navbar";
import Skills from "./componrnts/Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
