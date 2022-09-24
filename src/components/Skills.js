import {
  FaHtml5,
  FaJava,
  FaReact,
  FaPython,
  FaCss3,
  FaJs,
} from "react-icons/fa";
import "../styles/skills.css";
function Skills() {
  return (
    <section className="skills ">
      <h1>Skills</h1>
      <div className="skillitems">
        <div className="info2">
          <ul>
            <li>
              <FaJava className="icon" />
              <p>Java</p>
            </li>
            <li>
              <FaReact className="icon" />
              <p>React</p>
            </li>
            <li>
              <FaHtml5 className="icon" />
              <p>Html</p>
            </li>
            <li>
              <FaPython className="icon" />
              <p>Python</p>
            </li>
            <li>
              <FaCss3 className="icon" />
              <p>CSS</p>
            </li>
            <li>
              <FaJs className="icon" />
              <p>JS</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
