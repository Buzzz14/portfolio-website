import Hero from "../components/Hero";
import Projects from "../components/Project/Project";
import { motion } from "framer-motion";
import { useMode } from "../context/ModeContext";

const Home = () => {
  const { mode } = useMode();
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

export default Home;
