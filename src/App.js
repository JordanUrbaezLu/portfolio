import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { Routes, Route, Link } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import backgroundVideo from "./assets/Background.mp4";
import { VscMenu } from "react-icons/vsc";
import { useState } from "react";
const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div
        dangerouslySetInnerHTML={{
          __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline>
      <source src=${backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
        }}
      />
      <div className="main">
        <nav className="navbar">
          <Link id="navbar__logoItem" to="/home">
            Jordan Urbaez Lu
          </Link>
          <Link id="navbar__item" to="/about">
            About
          </Link>
          <Link id="navbar__item" to="/experience">
            Experience
          </Link>
          <Link id="navbar__item" to="/skills">
            Skills
          </Link>
          <Link id="navbar__item" to="/education">
            Education
          </Link>
          <Link id="navbar__item" to="/projects">
            Projects
          </Link>
          <Link id="navbar__item" to="/contact">
            Contact
          </Link>
        </nav>
        <div className="menu-icon" onClick={() => setShow(!show)}>
          <VscMenu size={50} />
        </div>
        {show && (
          <div className="navbar2">
            <Link onClick={() => setShow(!show)} id="navbar__item2" to="/about">
              About
            </Link>
            <Link onClick={() => setShow(!show)} id="navbar__item2" to="/experience">
              Experience
            </Link>
            <Link onClick={() => setShow(!show)} id="navbar__item2" to="/skills">
              Skills
            </Link>
            <Link onClick={() => setShow(!show)} id="navbar__item2" to="/education">
              Education
            </Link>
            <Link onClick={() => setShow(!show)} id="navbar__item2" to="/projects">
              Projects
            </Link>
            <Link onClick={() => setShow(!show)} id="navbar__item2" to="/contact">
              Contact
            </Link>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
