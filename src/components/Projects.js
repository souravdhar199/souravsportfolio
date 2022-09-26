import { useContext } from "react";
import PinnedContext from "../githubContext";
import { GiPlainCircle } from "react-icons/gi";
import { GoMarkGithub } from "react-icons/go";
import "../styles/project.css";
function Projects() {
  const pinnedRepo = useContext(PinnedContext);
  console.log(pinnedRepo);

  return (
    <section className="experience ">
      <h1>Projects</h1>
      <div className="Projects">
        <div className="Container">
          {pinnedRepo.pinnedRepo.map((item) => (
            <div className="childProjects">
              <h3>{item.name}</h3>
              <p className="des">{item.description}</p>
              <div className="language">
                {item.languages.nodes.map((lang) => (
                  <>
                    <GiPlainCircle
                      className="icons3"
                      style={{ color: `${lang.color}` }}
                    />
                    <span className="porgLang">{lang.name}</span>
                  </>
                ))}
              </div>

              <a href={item.url}>
                <button>
                  {" "}
                  <GoMarkGithub className="git" />
                  View Project
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
