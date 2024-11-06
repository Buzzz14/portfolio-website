import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion"; // Import from Framer Motion
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const App = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? JSON.parse(savedMode) : "light";
  });

  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const controls = useAnimation(); // Animation controls

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Show icon after scrolling 100px
        setShowScrollIcon(true);
        controls.start({ opacity: 1, y: 0 }); // Animate in
      } else {
        setShowScrollIcon(false);
        controls.start({ opacity: 0, y: 50 }); // Animate out
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, [controls]);

  return (
    <div className={mode === "dark" ? "bg-purple-950" : "bg-red-500"}>
      <Navigation mode={mode} toggleMode={toggleMode} />

      <div>
        <Routes>
          <Route path="/" element={<Home mode={mode} />}></Route>
          <Route path="/home" element={<Home mode={mode} />}></Route>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/projects" element={<Projects mode={mode} />} />
        </Routes>
      </div>

      <Footer mode={mode} />

      {showScrollIcon && ( // Conditionally render the scroll-to-top icon
        <motion.div
          className="fixed bottom-6 right-4 cursor-pointer"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }} // Initial state before animation
          animate={controls} // Animation controls
          transition={{ duration: 0.2 }} // Transition duration
        >
          <KeyboardDoubleArrowUpIcon fontSize="large" className="text-white" />
        </motion.div>
      )}
    </div>
  );
};

export default App;
