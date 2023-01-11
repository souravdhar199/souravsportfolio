import { IoIosSchool } from "react-icons/io";
import img1 from "../images/profile.jpg";
import "../styles/about.css";
import Typewriter from "typewriter-effect";
function About() {
  return (
    <section className="about">
      <div className="info">
        <h1>
          Hi my name is <span class="nameColor">Sourav</span>{" "}
        </h1>
        <h2 className="makeInline">
          <IoIosSchool className="icon2" />
          Georgia State University
        </h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Looking for Entry Level Software Engineer Role")

              .start();
          }}
          options={{
            delay: 40,
            wrapperClassName: "typed-wrapper",
          }}
        />
      </div>
      <div className="image">
        <img alt="profile" src={img1} />
      </div>
    </section>
  );
}

export default About;
