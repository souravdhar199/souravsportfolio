import img1 from "../images/profile.jpg";
import "../styles/about.css";
function About() {
  return (
    <section className="about">
      <div className="info">
        <h1>Hi my name is Sourav</h1>
        <p>Upcoming CS grad, Looking for Entry level SWE role</p>
      </div>
      <div className="image">
        <img alt="profile" src={img1} />
      </div>
    </section>
  );
}

export default About;
