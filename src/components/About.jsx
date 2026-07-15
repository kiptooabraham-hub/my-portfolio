import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="about-content"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      <div className="about-container">

        {/* Left Section */}
        <div className="about-text">

          <h3>Who I Am</h3>

          <p>
            Hello! I'm <strong>Abraham Kiptoo</strong>, a passionate Full stack Developer committed to building modern, responsive and
            user-friendly web applications that solve real-world problems.
          </p>

          <p>
            My journey began with frontend development and I'm now fully expanding
            into full-stack development using React, Node.js, Express and
            MongoDB among other technologies to create complete web solutions.
          </p>

          <div className="about-highlights">

            <div className="highlight">
              <h4>🚀 Current Focus</h4>
              <p>Building modern full-stack web applications.</p>
            </div>

            <div className="highlight">
              <h4>💡 Passion</h4>
              <p>Creating clean, responsive and user-friendly interfaces.</p>
            </div>

            <div className="highlight">
              <h4>📚 Currently Learning</h4>
              <p>REST APIs, Authentication, Express & MongoDB.</p>
            </div>

            <div className="highlight">
              <h4>🎯 Mission</h4>
              <p>Deliver reliable software that helps businesses grow.</p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="about-cards">

          <div className="about-card">
            <h3>📍 Based In</h3>
            <p>Kericho, Kenya</p>
          </div>

          <div className="about-card">
            <h3>💻 Specialization</h3>
            <p>Full-Stack Development</p>
          </div>

          <div className="about-card">
            <h3>⚙️ Technologies</h3>
            <p>
              React • JavaScript • HTML • CSS • Node.js • Express • MongoDB
            </p>
          </div>

          <div className="about-card">
            <h3>🌍 Availability</h3>
            <p>
              Open to freelance, internships, collaborations and full-time opportunities.
            </p>
          </div>

          <div className="about-card">
            <h3>🎯 Career Goal</h3>
            <p>
              To become a highly skilled full stack developer building scalable,
              impactful digital products.
            </p>
          </div>

          <div className="about-card">
            <h3>🤝 Let's Connect</h3>
            <p>
              I'm always excited to discuss new ideas, projects and opportunities.
            </p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;