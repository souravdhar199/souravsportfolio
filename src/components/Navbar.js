import "../styles/navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link activeClass="active" to="about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="skills">
            SKILLS
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="experience">
            EXPERIRNCE
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="mainProject">
            PROJECTS
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
