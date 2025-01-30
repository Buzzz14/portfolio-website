import React, { useEffect, useState } from "react";
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

const App = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? JSON.parse(savedMode) : "dark";
  });

  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  useEffect(() => {
    const minLoadTime = 2000;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = minLoadTime - elapsedTime;

      setTimeout(
        () => {
          setLoading(false);
        },
        remainingTime > 0 ? remainingTime : 0
      );
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

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

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className={`${mode === "dark" ? "bg-purple-950" : "bg-red-500"}`}>
      <Navigation mode={mode} toggleMode={toggleMode} />

      <div>
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/home" element={<Home mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/projects" element={<Projects mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
        </Routes>
      </div>

      <Footer mode={mode} />

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
