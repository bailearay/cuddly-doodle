import "./App.css";
import { About } from "./components/About";
import { Cover } from "./components/Cover";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import React from "react";

function App() {
  return (
    <div className="App scroller">
      <section id="home" className="flexDis">
        <Cover />
      </section>
      <section id="about" className="flexDis">
        <About />
      </section>
      <section id="skills" className="flexDis">
        <Skills />
      </section>
      <section id="contact" className="flexDis">
        <Contact />
      </section>
    </div>
  );
}

export default App;
