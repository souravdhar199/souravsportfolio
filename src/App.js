import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ProviderPinned } from "./githubContext";

function App() {
  return (
    <ProviderPinned>
      <div className="main">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </ProviderPinned>
  );
}

export default App;
