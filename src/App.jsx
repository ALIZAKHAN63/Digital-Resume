import { useState } from "react";
import "./App.css";
import React from "react";
import "./App.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Language from "./components/Language";

function App() {
  return (
    <div className="App">
      <Header />
      <Contact/>
      <Skill />
      <Education/>
      <Experience/>
      <Projects/>
      <Language/>
    </div>
  );
}

export default App;
