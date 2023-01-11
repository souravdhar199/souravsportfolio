import { IoIosSchool } from "react-icons/io";
import img1 from "../images/profile.jpg";
import "../styles/about.css";
import Typewriter from "typewriter-effect";
import Zoom from "react-reveal/Flip";
function About() {
  const onButtonClick = () => {
    fetch("resume_souravdhar.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume_souravdhar.pdf";
        alink.click();
      });
    });
  };

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
            delay: 30,
            wrapperClassName: "typed-wrapper",
          }}
        />

        <Zoom left duration={2000}>
          {" "}
          <button onClick={() => onButtonClick()}>Hire me</button>
        </Zoom>
      </div>
      <div className="image">
        <img alt="profile" src={img1} />
      </div>
    </section>
  );
}

export default About;
