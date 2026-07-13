import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2 className="footer-logo">
        Abraham <span>Kiptoo</span>
      </h2>

      <p>
        Building modern responsive web experiences.
      </p>

      <div className="footer-social">

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

      <hr />

      <p className="copyright">
        © {new Date().getFullYear()} Abraham Kiptoo.
        All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;