import { motion } from "framer-motion";
import aboutBg from "../assets/backgrounds/about.jpg";
import AboutSection from "../components/About";

function About() {
  return (
    <motion.section
      className="about"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,.60), rgba(15,23,42,.60)), url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <AboutSection />
    </motion.section>
  );
}

export default About;