import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="main">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
