import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";

import profile from "../assets/profile.jpg";
import background from "../assets/background.png";

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,.82), rgba(15,23,42,.82)), url(${background})`,
      }}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">

        {/* LEFT SIDE */}

        <div className="hero-text">

          <h4 className="greeting">
            👋 Hello, I'm
          </h4>

          <h1>Abraham Kiptoo</h1>

          <h2>
  <Typewriter
    words={[
      "Frontend Developer",
      "React Developer",
      "JavaScript Developer",
      "Aspiring Full-Stack Developer",
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1800}
  />
</h2>

          <p>
            I build modern, responsive and high-performance web applications
            using React, JavaScript, HTML and CSS among many others.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Hire Me
            </a>

          </div>

          <div className="social-icons">

            <a
              href="https://github.com/Kiptooabraham-hub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:ptooibrahim@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        
      <div className="hero-image">

  <div className="profile-wrapper">

  <div className="glow-ring"></div>

  <div className="floating-icon react">
    <FaReact />
  </div>

  <div className="floating-icon js">
    <FaJsSquare />
  </div>

  <div className="floating-icon html">
    <FaHtml5 />
  </div>

  <div className="floating-icon css">
    <FaCss3Alt />
  </div>

  <div className="floating-icon git">
    <FaGitAlt />
  </div>

  <img
    src={profile}
    alt="Abraham Kiptoo"
    className="profile-image"
  />

</div>

</div>



      </div>
    </motion.section>
  );
}

export default Hero;