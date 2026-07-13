import { motion } from "framer-motion";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: project1,
      description:
        "A modern portfolio built with React, Framer Motion and responsive design.",
      technologies: ["React", "CSS", "Framer Motion"],
      github: "https://github.com/Kiptooabraham-hub",
      demo: "#",
    },
    {
      title: "Task Management App",
      image: project2,
      description:
        "A productivity application with authentication and task organization.",
      technologies: ["React", "Firebase", "CSS"],
      github: "https://github.com/Kiptooabraham-hub",
      demo: "#",
    },
    {
      title: "E-Commerce Website",
      image: project3,
      description:
        "Responsive online shopping platform with a modern user interface.",
      technologies: ["React", "JavaScript", "Node.js"],
      github: "https://github.com/Kiptooabraham-hub",
      demo: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Featured Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ y: -10 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;