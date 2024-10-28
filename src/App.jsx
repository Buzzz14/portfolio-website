import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skill from "./components/Skill";

const App = () => {
  return (
    <div className="bg-[#2E3944]">
      <Navigation />
      <Hero />
      <Skill />
    </div>
  );
};

export default App;
