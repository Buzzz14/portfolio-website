import React from "react";

import Hero from "../components/Hero";
import About from "../components/About/About";
import Projects from "../components/Project/Project";

const Home = ({ mode }) => {
  return (
    <div>
      <div className="mx-auto">
        <Hero mode={mode} />
        <About mode={mode} />
        <Projects mode={mode} />
      </div>
    </div>
  );
};

export default Home;
