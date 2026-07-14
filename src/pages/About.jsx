import AboutSection from "../components/About";
import aboutBg from "../assets/backgrounds/about.jpg";

<section
  className="about"
  style={{
    backgroundImage: `linear-gradient(rgba(15,23,42,.88), rgba(15,23,42,.88)), url(${aboutBg})`,
  }}
></section>

function About() {
  return <AboutSection />;
}

export default About;