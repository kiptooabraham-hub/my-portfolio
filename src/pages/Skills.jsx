import { motion } from "framer-motion";
import skillsBg from "../assets/backgrounds/skills.jpg";
import SkillsSection from "../components/Skills";

function Skills() {
  return (
    <motion.section
      className="skills"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,.60), rgba(15,23,42,.60)), url(${skillsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <SkillsSection />
    </motion.section>
  );
}

export default Skills;