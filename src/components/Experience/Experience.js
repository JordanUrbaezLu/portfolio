import "./Experience.css";

const Experience = () => {
  return (
    <div className="Experience-container">
      <div className="resume">
        Check out my resume
        <a
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.docdroid.net/WQFpFUD/updated-resume-pdf"
        >
          here!
        </a>
      </div>
      <div className="experience">
        <div className="Xcompany">Melt Water</div>
        <div className="Xposition">React Developer</div>
        <div className="Xdate">Decemeber 2020 - Present</div>
        <div className="Xlocation">Boston, MA</div>
        <div className="Xproject">Media Monitoring</div>
        <ul className="XdescriptionList">
          <li className="XdescriptionItem">
            Responsible for styling, developing, testing reusable React
            components for user interface controls in a single page application.
          </li>
          <li className="XdescriptionItem">
            Developed styling and functionality for components in the company
            shared UI library using SCSS, TypeScript, React, Babel, Storybook,
            etc.
          </li>
          <li className="XdescriptionItem">
            Involved with creating the interface of media analysis charts with
            highchart.js.
          </li>
          <li className="XdescriptionItem">
            Some involvement with creation of RESTful API based on the Express
            Router middleware integrated with MongoDB.
          </li>
          <li className="XdescriptionItem">
            Promoted seamless user experience by accomplishing dynamic routing
            for the project using React Router.
          </li>
          <li className="XdescriptionItem">
            Responsible for adding functionality for the filter options on the
            monitor and display correct information.
          </li>
          <li className="XdescriptionItem">
            Responsible for migrating code from Redux and Redux Thunk into
            React's context api.
          </li>
          <li className="XdescriptionItem">
            Initiated private meetings with other developers or UI team when any
            challenges came up.
          </li>
          <li className="XdescriptionItem">
            Managed version control and code adjustments with Git.
          </li>
          <li className="XdescriptionItem">
            Wrote unit tests for my software with the testing frameworks like,
            React Testing Library and Jest, and met the 85% code coverage
            standard for my React components.
          </li>
          <li className="XdescriptionItem">
            Used Jira software for agile project management.
          </li>
          <li className="XdescriptionItem">
            Participated in the Agile/Scrum development process and reported to
            the administrative team regarding development progress in a timely
            manner.
          </li>
        </ul>
      </div>

      <div className="experience">
        <div className="Xcompany">BeyondTrust</div>
        <div className="Xposition">React Developer</div>
        <div className="Xdate">August 2019 - October 2020</div>
        <div className="Xlocation">Somerville, MA</div>
        <div className="Xproject">Secure Remote Access</div>
        <ul className="XdescriptionList">
          <li className="XdescriptionItem">
            Implemented Responsive Web Design to ensure website compatibility
            with different devices like desktops, laptops, tablets, and smart
            phones using HTML5, CSS3, JavaScript, and React.
          </li>
          <li className="XdescriptionItem">
            Used Webpack as build tools for configuring tasks through utilizing
            the React architecture.
          </li>
          <li className="XdescriptionItem">
            Used Redux Form to handle form state in Redux.
          </li>
          <li className="XdescriptionItem">
            Designed scalable and reusable CSS templates for all pages of the
            website by utilizing SASS and CSS Background, positioning, text
            border, margin, padding, and table.
          </li>
          <li className="XdescriptionItem">
            Made use of NPM to manage modules and used it to install development
            tools that come handy.
          </li>
          <li className="XdescriptionItem">
            Implemented RESTful web services to communicate between server side
            to client Side.
          </li>
          <li className="XdescriptionItem">
            Created automated unit tests using testing frameworks such as Jest
            and Enzyme.
          </li>
          <li className="XdescriptionItem">
            Used SVN to perform version control.
          </li>
        </ul>
      </div>

      <div className="experience">
        <div className="Xcompany">Drift</div>
        <div className="Xposition">Front End Developer</div>
        <div className="Xdate">October 2018 - July 2019</div>
        <div className="Xlocation">Boston , MA</div>
        <div className="Xproject">Real Time Personalization</div>
        <ul className="XdescriptionList">
          <li className="XdescriptionItem">
            Mainly responsible for developing the user interface of the
            application HTML, CSS, UX, JSON, JavaScript, jQuery, highcharts.js,
            etc.
          </li>
          <li className="XdescriptionItem">
            Helped complete the UI component library used for the project to
            keep consistent UI designs and functionality.
          </li>
          <li className="XdescriptionItem">
            Worked on code to get data from web services using Axios based on
            those results updated HTML pages.
          </li>
          <li className="XdescriptionItem">
            Enhanced page functionality and pop-up screens using JavaScript and
            used HTML to build drop-down menus on the web page and display
            appropriate web contents based on user's requests.
          </li>
          <li className="XdescriptionItem">
            Created visually appealing UI charts using highcharts.js.
          </li>
          <li className="XdescriptionItem">
            Developed test cases and wrote unit tests using Jest.
          </li>
          <li className="XdescriptionItem">
            Performed version control for efficiency with colleague developers
            using Git.
          </li>
          <li className="XdescriptionItem">
            Actively participated in Agile/Scrum development workflow.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
