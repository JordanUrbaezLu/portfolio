import "./Skills.css";
import {
  DiReact,
  DiCss3,
  DiSass,
  DiGit,
  DiGithub,
  DiMongodb,
  DiPython,
  DiNodejs,
  DiJira,
  DiHtml5,
  DiScrum,
} from "react-icons/di";

import { GiOctopus } from "react-icons/gi";

import {
  SiCplusplus,
  SiCodio,
  SiTypescript,
  SiJest,
  SiStorybook,
  SiExpress,
  SiMaterialui,
  SiWebpack,
  SiBabel,
  SiJson,
  SiNextdotjs,
  SiGithubactions,
  SiJenkins,
  SiRollupdotjs
} from "react-icons/si";

import { 
  TbBrandEdge, 
  TbBrandJavascript,
  TbAccessible,
  TbMathFunction,
  TbTestPipe
} from "react-icons/tb";

import { ImSpinner9 } from "react-icons/im";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="Skill">
        <div className="Skill-Title">Programming Languages: </div>
        <div className="IconContainer">
          <TbBrandJavascript size={50} />
          <div className="IconName">JavaScript</div>
        </div>
        <div className="IconContainer">
          <SiTypescript size={50} />
          <div className="IconName">TypeScript</div>
        </div>
        <div className="IconContainer">
          <DiPython size={50} />
          <div className="IconName">Python</div>
        </div>
        <div className="IconContainer">
          <SiCplusplus size={50} />
          <div className="IconName">C++</div>
        </div>
        <div className="IconContainer">
          <SiCodio size={50} />
          <div className="IconName">C</div>
        </div>
        <div className="IconContainer">
          <TbMathFunction size={50} />
          <div className="IconName">Matlab</div>
        </div>
      </div>
      <div className="Skill">
        <div className="Skill-Title">Front-End Technologies: </div>
        <div className="IconContainer">
          <DiReact size={50} />
          <div className="IconName">React</div>
        </div>
        <div className="IconContainer">
          <DiHtml5 size={50} />
          <div className="IconName">HTML5</div>
        </div>
        <div className="IconContainer">
          <DiCss3 size={50} />
          <div className="IconName">CSS3</div>
        </div>
        <div className="IconContainer">
          <DiSass size={50} />
          <div className="IconName">Sass</div>
        </div>
        <div className="IconContainer">
          <SiMaterialui size={50} />
          <div className="IconName">MaterialUI</div>
        </div>
        <div className="IconContainer">
          <SiWebpack size={50} />
          <div className="IconName">Webpack</div>
        </div>
        <div className="IconContainer">
          <SiBabel size={50} />
          <div className="IconName">Babel</div>
        </div>
        <div className="IconContainer">
          <SiRollupdotjs size={50} />
          <div className="IconName">Rollup</div>
        </div>
      </div>
      <div className="Skill">
        <div className="Skill-Title">Back-End Technologies: </div>
        <div className="IconContainer">
          <DiNodejs size={50} />
          <div className="IconName">NodeJS</div>
        </div>
        <div className="IconContainer">
          <DiMongodb size={50} />
          <div className="IconName">MongoDB</div>
        </div>
        <div className="IconContainer">
          <SiExpress size={50} />
          <div className="IconName">Express</div>
        </div>
        <div className="IconContainer">
          <SiNextdotjs size={50} />
          <div className="IconName">Next.js</div>
        </div>
        <div className="IconContainer">
          <SiJson size={50} />
          <div className="IconName">JSON</div>
        </div>

      </div>
      <div className="Skill">
        <div className="Skill-Title">Testing: </div>
        <div className="IconContainer">
          <GiOctopus size={50} />
          <div className="IconName">React Testing Library</div>
        </div>
        <div className="IconContainer">
          <SiJest size={50} />
          <div className="IconName">Jest</div>
        </div>
        <div className="IconContainer">
          <SiStorybook size={50} />
          <div className="IconName">Storybook</div>
        </div>
        <div className="IconContainer">
          <TbBrandEdge size={50} />
          <div className="IconName">Enzyme</div>
        </div>
        <div className="IconContainer">
          <TbAccessible size={50} />
          <div className="IconName">A11y</div>
        </div>
      </div>
      <div className="Skill">
        <div className="Skill-Title">CI/CD: </div>
        <div className="IconContainer">
          <SiGithubactions size={50} />
          <div className="IconName">Github Actions</div>
        </div>
        <div className="IconContainer">
          <SiJenkins size={50} />
          <div className="IconName">Jenkins</div>
        </div>
        <div className="IconContainer">
          <TbTestPipe size={50} />
          <div className="IconName">Workflows</div>
        </div>
      </div>
      <div className="Skill">
        <div className="Skill-Title">Version Control: </div>
        <div className="IconContainer">
          <DiGit size={50} />
          <div className="IconName">Git</div>
        </div>
        <div className="IconContainer">
          <DiGithub size={50} />
          <div className="IconName">Github</div>
        </div>
      </div>
      <div className="Skill">
        <div className="Skill-Title">Methodologies: </div>
        <div className="IconContainer">
          <ImSpinner9 size={50} />
          <div className="IconName">Agile</div>
        </div>
        <div className="IconContainer">
          <DiJira size={50} />
          <div className="IconName">Jira</div>
        </div>
        <div className="IconContainer">
          <DiScrum size={50} />
          <div className="IconName">Scrum</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
