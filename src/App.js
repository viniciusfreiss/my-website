import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <div className="Card">
        <div className="CardTitle">Hey, I'm Vinicius </div>
        <div className="CardBody">
          <p>
            I’m a Brazilian B. Eng. student who likes to make cool and pretty stuff.
          </p>

          <p>
            Currently, I’m developing{" "}
            <a href="https://github.com/viniciusfreiss/habits_project">Habits Tracker</a>, a fullstack application that aims to track user habits.

          </p>

          <p>
            If you're interested in seeing what kind of awesome stuff I can do,
            check out my <a href="https://github.com/viniciusfreiss">GitHub</a>,{" "}
            <a href="https://www.linkedin.com/in/viniciusfreis/">LinkedIn</a> and{" "}
            <a href="https://drive.google.com/file/d/1AH1FmXLTFduqTx0KMC1ZDC5ACT7hxyPF/view?usp=sharing">
              Resume
            </a>
            .
          </p>

          <p>Spoiler: Right now, I’m open to work!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
