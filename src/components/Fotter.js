import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import "../styles/foots.css";
function Fotter() {
  return (
    <section>
      <div className="Footer">
        <h4>Let's Connect</h4>
        <div className="parentFoot">
          <a href="https://www.linkedin.com/in/sourav22/">
            <RiLinkedinBoxFill className="links" />
          </a>
          <a href="https://github.com/souravdhar199">
            <RiGithubFill className="links" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Fotter;
