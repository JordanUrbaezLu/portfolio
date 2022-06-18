import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { Routes, Route, Link } from 'react-router-dom';
import Experience from './components/Experience/Experience';
import backgroundVideo from "./assets/Background.mp4"

const App = () => {
  return (
    <div className='App'>
      <video src={backgroundVideo} type="video/mp4" autoPlay loop muted></video>
      <div className="main">
        <nav className='navbar'>
          <Link id='navbar__logoItem' to="/home">Jordan Urbaez Lu</Link>
          <Link id='navbar__item' to="/about">About</Link>
          <Link id='navbar__item' to="/experience">Experience</Link>
          <Link id='navbar__item' to="/skills">Skills</Link>
          <Link id='navbar__item' to="/courses">Courses</Link>
          <Link id='navbar__item' to="/projects">Projects</Link>
          <Link id='navbar__item' to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;