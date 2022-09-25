import { useContext } from "react";
import PinnedContext from "../githubContext";
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
              <p>{item.description}</p>
              {item.languages.nodes.map((lang) => (
                <p>{lang.name}</p>
              ))}
              <button>
                <a href={item.url}>View Project</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
