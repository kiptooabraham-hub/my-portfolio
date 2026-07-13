import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", level: "95%" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "90%" },
    { icon: <FaJsSquare />, name: "JavaScript", level: "85%" },
    { icon: <FaReact />, name: "React", level: "85%" },
    { icon: <FaNodeJs />, name: "Node.js", level: "70%" },
    { icon: <FaGitAlt />, name: "Git & GitHub", level: "80%" },
  ];

  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>
            </div>

            <span>{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;