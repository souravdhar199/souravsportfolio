import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ProviderPinned } from "./githubContext";
import Fotter from "./components/Fotter";

function App() {
  return (
    <ProviderPinned>
      <div className="main">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Fotter />
      </div>
    </ProviderPinned>
  );
}

export default App;
