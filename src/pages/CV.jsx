import cvBg from "../assets/backgrounds/cv.jpg";
import cv from "../assets/Kiptooabraham-CV.pdf";

function CV() {
  return (
    <section
      className="cv"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,.88), rgba(15,23,42,.88)), url(${cvBg})`,
      }}
    >
      <h1>Curriculum Vitae</h1>

      <p className="cv-intro">
        This CV summarizes my education, technical skills, and experience in
        frontend development. I'm currently expanding my expertise into
        full-stack development by building applications with React, Node.js,
        Express, and MongoDB among others.
      </p>

      <div className="cv-buttons">
        <a
          href={cv}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          View CV
        </a>

        <a
          href={cv}
          download="Kiptooabraham-CV.pdf"
          className="btn-secondary"
        >
          Download CV
        </a>
      </div>

      <iframe
        src={cv}
        title="Curriculum Vitae"
        className="cv-frame"
      ></iframe>
    </section>
  );
}

export default CV;