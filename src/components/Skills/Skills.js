import "./Skills.css";
import {
  DiReact,
  DiJavascript,
  DiCss3,
  DiSass,
  DiGit,
  DiGithub,
  DiMongodb,
  DiPython,
  DiNodejs,
  DiNpm,
  DiJira,
  DiHtml5,
  DiJqueryLogo,
  DiScrum,
} from "react-icons/di";

import {
    GiOctopus
} from "react-icons/gi"

import {
    SiCplusplus,
    SiCodio,
    SiTypescript,
    SiMysql,
    SiJest,
    SiStorybook,
    SiExpress,
    SiMocha,
    SiChai,
    SiMaterialui,
    SiSubversion,
    SiAzuredevops,
    SiWebpack,
    SiBabel,
    SiJson,
    SiLodash
} from "react-icons/si"

import {
    AiOutlineConsoleSql,
} from "react-icons/ai"

import {
    TbBrandReactNative,
} from "react-icons/tb"

import {
    HiChartBar,
} from "react-icons/hi"

import {
    BiLineChartDown,
} from "react-icons/bi"



const Skills = () => {
  return (
    <div className="Skills">
      <div className="Skill">
        <div className="Skill-Title">Programming Languages: </div>
        <div className="IconContainer">
          <DiJavascript size={50} />
          <div className="IconName">JavaScript</div>
        </div>
        <div className="IconContainer">
            <SiTypescript size={50} />
            <div className="IconName">TypeScript</div>
        </div>
        <div className="IconContainer">
            <AiOutlineConsoleSql size={50} />
            <div className="IconName">SQL</div>
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
        
      </div>
      <div className="Skill">
        <div className="Skill-Title">Front-End Technologies: </div>
        <div className="IconContainer">
          <DiReact size={50} />
          <div className="IconName">React</div>
        </div>
        <div className="IconContainer">
          <TbBrandReactNative size={50} />
          <div className="IconName">React Native</div>
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
            <HiChartBar size={50} />
            <div className="IconName">Highcharts</div>
        </div>
        <div className="IconContainer">
            <SiLodash size={50} />
            <div className="IconName">Lodash</div>
        </div>
        <div className="IconContainer">
            <DiJqueryLogo size={50} />
            <div className="IconName">jQuery</div>
        </div>
      </div>
      <div className="Skill">
        <div className="Skill-Title">Back-End Technologies: </div>
        <div className="IconContainer">
            <DiMongodb size={50} />
            <div className="IconName">MongoDB</div>
        </div>
        <div className="IconContainer">
            <SiMysql size={50} />
            <div className="IconName">MySQL</div>
        </div>
        <div className="IconContainer">
            <DiNodejs size={50} />
            <div className="IconName">NodeJS</div>
        </div>
        <div className="IconContainer">
            <SiExpress size={50} />
            <div className="IconName">Express</div>
        </div>
        <div className="IconContainer">
            <DiNpm size={50} />
            <div className="IconName">NPM</div>
        </div>
        <div className="IconContainer">
            <SiJson size={50} />
            <div className="IconName">JSON</div>
        </div>
      </div>
      <div className="Skill">
        <div className="Skill-Title">Testing: </div>
        <div className="IconContainer">
            <SiJest size={50} />
            <div className="IconName">Jest</div>
        </div>
        <div className="IconContainer">
            <GiOctopus size={50} />
            <div className="IconName">React Testing Library</div>
        </div>
        <div className="IconContainer">
            <SiStorybook size={50} />
            <div className="IconName">Storybook</div>
        </div>
        <div className="IconContainer">
            <SiMocha size={50} />
            <div className="IconName">Mocha</div>
        </div>
        <div className="IconContainer">
            <SiChai size={50} />
            <div className="IconName">Chai</div>
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
        <div className="IconContainer">
            <SiSubversion size={50} />
            <div className="IconName">SVN</div>
        </div>
        <div className="IconContainer">
            <SiAzuredevops size={50} />
            <div className="IconName">Azure Devops</div>
        </div>
      </div>
      <div className="Skill">
        <div className="Skill-Title">Methodologies: </div>
        <div className="IconContainer">
            <DiJira size={50} />
            <div className="IconName">Jira</div>
        </div>
        <div className="IconContainer">
            <DiScrum size={50} />
            <div className="IconName">Scrum</div>
        </div>
        <div className="IconContainer">
            <BiLineChartDown size={50} />
            <div className="IconName">Waterfall</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
