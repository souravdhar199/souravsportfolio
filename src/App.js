import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="main">
      <Navbar />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
