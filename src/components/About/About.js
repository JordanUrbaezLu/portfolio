import "./About.css";
import picture from "../../assets/ProfilePicture.jpg";
import {
  FaReact,
  FaChess,
  FaBook,
  FaRunning,
  FaNutritionix,
} from "react-icons/fa";
import { GiBrain, GiGameConsole } from "react-icons/gi";
import { DiAndroid } from "react-icons/di";

const About = () => {
  return (
    <div className="About">
      <div className="profile">
        <img
          className="profile-image"
          src={picture}
          alt="Jordan Urbaez Lu"
        ></img>
        <div className="name">Jordan Urbaez Lu</div>
        <div className="description">
          I am a Senior Front-End Developer who specializes in React
          Development. I have been in the field for over 4 years using industry
          leading technolgies such as HTML5, CSS3, SASS, JavaScript, ES6, JSON,
          React, TypeScript, Redux, Node.js, jQuery, Jest, Enzyme, Express,
          Webpack, MongoDB, and many more. I am also well experienced building
          effective React applications using concpets like React Router, React
          Hooks, JSX, Functional Components, Component Life Cycles, Context Api,
          React Redux, Server-Side Rendering, and more.
        </div>
      </div>
      <div className="interests">
        <div className="interest-title">Personal Interests</div>
        <ul className="interests-container">
          <li className="interests-item">
            <FaReact size={50} color="cornflowerblue" />
            <h1 className="About__h1">React</h1>
          </li>
          <li className="interests-item">
            <DiAndroid size={50} />
            <h1 className="About__h1">Technology</h1>
          </li>
          <li className="interests-item">
            <FaChess size={50} color="#f5f5dc" />
            <h1 className="About__h1">Chess</h1>
          </li>
          <li className="interests-item">
            <FaBook size={50} color="#38250e" />
            <h1 className="About__h1">Reading</h1>
          </li>
          <li className="interests-item">
            <FaRunning size={50} color="yellow" />
            <h1 className="About__h1">Fitness</h1>
          </li>
          <li className="interests-item">
            <FaNutritionix size={50} color="lightgreen" />
            <h1 className="About__h1">Nutrition</h1>
          </li>
          <li className="interests-item">
            <GiBrain size={50} color="pink" />
            <h1 className="About__h1">Psychology</h1>
          </li>
          <li className="interests-item">
            <GiGameConsole size={50} color="#900D09" />
            <h1 className="About__h1">Videogames</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
