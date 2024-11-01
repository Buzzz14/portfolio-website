import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? JSON.parse(savedMode) : "light";
  });

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <div className={mode === "dark" ? "bg-purple-950" : "bg-red-500"}>
      <Navigation mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Home mode={mode} />}></Route>
        <Route path="/home" element={<Home mode={mode} />}></Route>
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/projects" element={<Projects mode={mode} />} />
      </Routes>
      <Footer mode={mode} />
    </div>
  );
};

export default App;
