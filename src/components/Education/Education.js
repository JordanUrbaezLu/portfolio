import "./Education.css";
import Logo from "../../assets/UmassLowell.svg";

const Education = () => {
  return (
    <div className="Courses">
      <div className="Courses-container">
        <img className="logo" src={Logo} alt="Umass Lowell Logo" />
        <div className="School-Title">University of Massachusettes Lowell</div>
        <ul className="courseList">
          <li className="courseItem">Software Engineering I</li>
          <li className="courseItem">Computing I/II/III/IV</li>
          <li className="courseItem">Artificial Intelligence</li>
          <li className="courseItem">Machine Learning</li>
          <li className="courseItem">Foundations of Comp. Science</li>
          <li className="courseItem">Operating Systems</li>
          <li className="courseItem">Assembly Language</li>
          <li className="courseItem">Intro to Prog. For Data Science</li>
          <li className="courseItem">Analysis of Algorithms</li>
          <li className="courseItem">Linear Algebra I/II</li>
          <li className="courseItem">Calculus I/II/III</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
