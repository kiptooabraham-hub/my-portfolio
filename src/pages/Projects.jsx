import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

import projectsBg from "../assets/backgrounds/projects.jpg";

function Projects() {
  const projects = [
    {
      icon: <FaLaptopCode />,
      title: "TaskFlow - Full Stack Task Manager",
      status: "Coming Soon",
      description:
        "Currently building a full-stack task management application with authentication, REST APIs, and MongoDB.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
    },
    {
      icon: <FaCode />,
      title: "Expense Tracker",
      status: "Planned",
      description:
        "A personal finance application with income and expense tracking, analytics, and secure user accounts.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      icon: <FaRocket />,
      title: "Job Portal",
      status: "Planned",
      description:
        "A modern recruitment platform connecting employers and job seekers with authentication and dashboards.",
      technologies: [
        "React",
        "Express",
        "MongoDB",
      ],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,.65), rgba(15,23,42,.65)), url(${projectsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-content">

        <h2>Projects In Development</h2>

        <p className="projects-subtitle">
          I'm currently building real-world full-stack applications.
          These projects will soon include live demos, GitHub
          repositories and deployment links as they are completed.
        </p>

        <div className="projects-container">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              className="project-card"
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
            >

              <div className="coming-icon">
                {project.icon}
              </div>

              <span className="status-badge">
                {project.status}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.technologies.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

              <button
                className="coming-btn"
                disabled
              >
                🚧 In Development
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Projects;