import logo from "../assets/logo.png";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
  src={logo}
  alt="Abraham Kiptoo Logo"
  className="loader-logo"
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
  transition={{
    duration: 0.8,
    repeat: Infinity,
    repeatType: "reverse",
  }}
/>
      <p>Loading Portfolio...</p>

      <div className="loader-bar">
        <motion.div
          className="loader-progress"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
        />
      </div>
    </motion.div>
  );
}

export default Loader;