import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactSection from "../components/Contact";

function Contact() {

  const form = useRef();

  const [sending, setSending] = useState(false);

  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {

    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        "service_7o77v5o",
        "template_9t43ujf",
        form.current,
        "GWX1IZFGqVW3lwC0h"
      )
      .then(() => {

        setSuccess("✅ Message sent successfully!");

        form.current.reset();

      })
      .catch(() => {

        setSuccess("❌ Failed to send message.");

      })
      .finally(() => {

        setSending(false);

      });

  };
  return <ContactSection />;
}

export default Contact;