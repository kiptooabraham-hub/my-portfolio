import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRocket } from "react-icons/fa";
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

  
            <div className="hero-buttons">

  <Link to="/projects" className="btn-primary">
    View Projects <FaArrowRight />
  </Link>

  <Link to="/contact" className="btn-secondary">
    <FaRocket />
    Start a Project
  </Link>
  
  <Link to="/cv" className="btn-secondary">
  📄 View CV
</Link>

</div>
            <a
  href="https://wa.me/254113975065?text=Hi%20Abraham,%20I%20visited%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20website%20projectS."
  target="_blank"
  rel="noopener noreferrer"
  className="btn-whatsapp"
>
  <FaWhatsapp /> WhatsApp Me
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