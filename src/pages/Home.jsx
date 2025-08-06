import Hero from "../components/Hero";
import Projects from "../components/Project/Project";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Home = ({ mode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto overflow-x-hidden">
        <Hero mode={mode} />
        <Projects mode={mode} />
      </div>
    </motion.div>
  );
};

Home.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Home;
