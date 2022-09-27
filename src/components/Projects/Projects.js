import "./Projects.css";
import Pokedex from "../../assets/Pokedex.png";
import NFAtoDFA from "../../assets/NFAtoDFA.png";
import TodoList from "../../assets/TodoList.png";
import SpaceshipPVP from "../../assets/SpaceshipPVP.webp";
import SmartLight from "../../assets/SmartLight.png";
import ShoePage from "../../assets/ShoeLandingPage.jpg";
import Astro from "../../assets/AstroJS.png";

import { DiCss3, DiGithub, DiHtml5, DiNpm, DiPython, DiReact, DiSass } from "react-icons/di";

import { TbAccessible, TbBrandJavascript, TbTestPipe } from "react-icons/tb";
import { SiBabel, SiCplusplus, SiGithubactions, SiJest, SiRollupdotjs, SiStorybook } from "react-icons/si";
import { GiOctopus } from "react-icons/gi";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="project">
        <div className="project-visual">
          <div className="project-title">Astro UI Library</div>
          <img
            className="project-image"
            src={Astro}
            alt="React Pokedex App"
          ></img>
        </div>
        <div className="project-technologies">
          <DiReact size={50} />
          <TbBrandJavascript size={50} />
          <DiSass size={50} />
          <DiNpm size={50} />
          <SiBabel size={50} />
          <SiRollupdotjs size={50} />
          <GiOctopus size={50} />
          <SiJest size={50} />
          <SiStorybook size={50} />
          <TbAccessible size={50} />
          <SiGithubactions size={50} />
          <TbTestPipe size={50} />
          <DiGithub size={50} />

        </div>
      </div>
      <div className="project">
        <div className="project-visual">
          <div className="project-title">React Pokedex App</div>
          <img
            className="project-image"
            src={Pokedex}
            alt="React Pokedex App"
          ></img>
        </div>
        <div className="project-technologies">
          <DiReact size={50} />
          <TbBrandJavascript size={50} />
          <DiHtml5 size={50} />
          <DiCss3 size={50} />
          <DiNpm size={50} />
        </div>
      </div>
      <div className="project">
        <div className="project-visual">
          <div className="project-title">Todo List</div>
          <img className="project-image" src={TodoList} alt="Todo List"></img>
        </div>
        <div className="project-technologies">
          <TbBrandJavascript size={50} />
          <DiHtml5 size={50} />
          <DiCss3 size={50} />
        </div>
      </div>
      <div className="project">
        <div className="project-visual">
          <div className="project-title">Shoe Company Landing Page</div>
          <img
            className="project-image"
            src={ShoePage}
            alt="Shoe Company Landing Page"
          ></img>
        </div>
        <div className="project-technologies">
          <DiReact size={50} />
          <TbBrandJavascript size={50} />
          <DiHtml5 size={50} />
          <DiCss3 size={50} />
        </div>
      </div>
      <div className="project">
        <div className="project-visual">
          <div className="project-title">SpaceshipPVP</div>
          <img
            className="project-image"
            src={SpaceshipPVP}
            alt="SpaceshipPVP"
          ></img>
        </div>
        <div className="project-technologies">
          <DiPython size={50} />
        </div>
      </div>
      <div className="project">
        <div className="project-visual">
          <div className="project-title">NFA to DFA Converter</div>
          <img
            className="project-image"
            src={NFAtoDFA}
            alt="NFA to DFA Converter"
          ></img>
        </div>
        <div className="project-technologies">
          <SiCplusplus size={50} />
        </div>
      </div>
      <div className="project">
        <div className="project-visual">
          <div className="project-title">Smart Light Intersection</div>
          <img
            className="project-image"
            src={SmartLight}
            alt="Smart Light Intersection"
          ></img>
        </div>
        <div className="project-technologies">
          <SiCplusplus size={50} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
