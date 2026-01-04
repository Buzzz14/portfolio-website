import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useMode } from "./context/ModeContext";

const App = () => {
  const { mode } = useMode();
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const controls = useAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIcon(true);
        controls.start({ opacity: 1, y: 0 });
      } else {
        setShowScrollIcon(false);
        controls.start({ opacity: 0, y: 50 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="bg-purple-950">
      <Navigation />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />

      {showScrollIcon && (
        <motion.div
          className={`fixed bottom-6 right-4 cursor-pointer p-3 rounded-full z-20 ${
            mode === "dark"
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-violet-600 hover:bg-violet-700"
          } transition-colors duration-300 shadow-lg`}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.2 }}
        >
          <KeyboardDoubleArrowUpIcon fontSize="large" className="text-white" />
        </motion.div>
      )}
    </div>
  );
};

export default App;
