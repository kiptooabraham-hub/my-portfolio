import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const [sending, setSending] = useState(false);

  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {

    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        "service_hs1twvm",
        "template_9t43ujf",
        form.current,
        "GWX1IZFGqVW3lwC0h"
      )
      .then(() => {

        setSuccess("✅ Message sent successfully!");

        form.current.reset();

      })
      .catch((error) => {

  console.error("EmailJS Error:", error);

  setSuccess(`❌ ${error.text || "Failed to send message."}`);

})
      .finally(() => {

        setSending(false);

      });

  };
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Let's Work Together</h2>

      <p className="contact-subtitle">
        Interested in working together or have a project in mind?
        Feel free to reach out.
      </p>

      <div className="contact-container">

        {/* Contact Info */}

        <div className="contact-info">

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>ptooibrahim@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h4>Phone</h4>
              <p>+254 113 975 065</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Location</h4>
              <p>Kericho,Kenya</p>
            </div>
          </div>

          <div className="contact-social">

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

          </div>

        </div>

        {/* Contact Form */}

        <form
  ref={form}
  onSubmit={sendEmail}
  className="contact-form"
>

          <input
  type="text"
  name="from_name"
  placeholder="Your Name"
  required
/>
          <input
  type="email"
  name="from_email"
  placeholder="Your Email"
  required
/>
<input
  type="text"
  name="subject"
  placeholder="Subject"
  required
/>

          <textarea
  rows="6"
  name="message"
  placeholder="Your Message"
  required
></textarea>

          <button
  type="submit"
  disabled={sending}
>
  {sending ? "Sending..." : "Send Message"}
</button>
{success && (
  <p className="success-message">
    {success}
  </p>
)}

        </form>

      </div>
    </motion.section>
  );
}

export default Contact;