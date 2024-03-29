import "../styles/exp.css";
import Flip from "react-reveal/Flip";
function Experience() {
  return (
    <section className="experience ">
      <h1>Experience</h1>
      <div className="frontdoor">
        <div className="image1">
          <img alt="none" src="https://s1.q4cdn.com/541446483/files/doc_multimedia/Frontdoor_Logo_2023_4C_copy.jpg" />
        </div>
        <div className="info1">
          <h2>Software Engineer Intern</h2>
          <ul>
            <Flip right duration={1000}>
              <li>
                Using React, Onboarded a new business partner to the existing
                Frontdoor website, which was used by 100k+ customers.
              </li>
              <li>
                Developed a REST API by designing schema and instances and
                writing Parsley code in Zesty.
              </li>
              <li>
                Debugged over 500+ lines of Go code to ensure the backend
                received expected responses.{" "}
              </li>
              <li>
                Extracted features from the code base and designed technical
                architecture documents to help onboard new partners to the
                website instantly rather than in a week.
              </li>
            </Flip>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
