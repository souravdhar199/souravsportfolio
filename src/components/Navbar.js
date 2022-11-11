import "../styles/navbar.css";
import { Link } from "react-scroll";
import Blog from "./Blog";
function Navbar() {
  return (
    <nav className="nav">
      <ul className="firstul">
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
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="mainProject">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to={<Blog />}>BLOG</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
