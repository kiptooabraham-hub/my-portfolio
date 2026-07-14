import aboutBg from "../assets/backgrounds/about.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section
  className="about"
  style={{
    backgroundImage: `linear-gradient(rgba(15,23,42,.88), rgba(15,23,42,.88)), url(${aboutBg})`,
  }}
></section>
      <h2>About Me</h2>

      <div className="about-container">

        <div className="about-text">

          <p>
            I'm <strong>Abrahim Kiptoo</strong>, a passionate full stack developer
            with a strong interest in building beautiful, responsive and
            user-friendly web applications among other services.
          </p>

          <p>
            I specialize in React, JavaScript, HTML and CSS and I'm currently
            expanding my skills into backend development to become a
            full-stack software engineer.
          </p>

          <p>
            I enjoy solving real-world problems through technology, learning
            new tools and building projects that improve people's lives, solving problems.

          </p>

        </div>

        <div className="about-cards">

          <div className="about-card">
            <h3>📍 Location</h3>
            <p>Kericho, Kenya</p>
          </div>

          <div className="about-card">
            <h3>💻 Focus</h3>
            <p>Full Stack Development</p>
          </div>

          <div className="about-card">
            <h3>🚀 Goal</h3>
            <p>Become a Full-Stack Software Engineer</p>
          </div>

          <div className="about-card">
            <h3>📚 Learning</h3>
            <p>Node.js • Express • MongoDB</p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;