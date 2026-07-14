import skillsBg from "../assets/backgrounds/skills.jpg";
import SkillsSection from "../components/Skills";

function Skills() {
  return (
    <section
      className="skills"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,.88), rgba(15,23,42,.88)), url(${skillsBg})`,
      }}
    >
      <SkillsSection />
    </section>
  );
}

export default Skills;