import "./Experience.css";

const Experience = () => {
  return (
    <div className="Experience-container">
      <div className="experience">
        <div className="Xcompany">Walmart Global Tech</div>
        <div className="Xposition">Software Engineer III</div>
        <div className="Xdate">July 2022 - Present</div>
        <div className="Xlocation">Remote</div>
        <div className="Xproject">Project: Living Design</div>
        <div style={{ paddingBottom: "20px" }}>
          Living Design is a major design system for Walmart.com. It is a
          collection of processes, guidelines, components, patterns, and styles
          used to design and develop digital products for the customer and
          associate experience.
        </div>
        <ul className="XdescriptionList">
          <li className="XdescriptionItem">
            Developed/maintained a major react component library for
            Walmart.com.
          </li>
          <li className="XdescriptionItem">
            Responsible for styling, engineering, and testing, accessible and
            reusable React components for millions of customers world-wide.
          </li>
          <li className="XdescriptionItem">
            Worked very closely with an expert team of designers to engineer new
            React products/components for our design system.
          </li>
          <li className="XdescriptionItem">
            Responsible for implementing automation for Living Design's release
            version and changelog with semantic-release.
          </li>
          <li className="XdescriptionItem">
            Responsible for engineering and fixing, customer requested, features
            and bugs in our React components.
          </li>
          <li className="XdescriptionItem">
            Maintained a private design system documentation site, powered
            through Gatsby, similar to Material UI docs.
          </li>
          <li className="XdescriptionItem">
            Maintained and innovated on brand consistency in our Walmart design
            system.
          </li>
          <li className="XdescriptionItem">
            Initiated private meetings with other engineers or design team
            members when any blockers or challenges came up.
          </li>
          <li className="XdescriptionItem">
            Wrote unit tests for my software with testing frameworks and tools
            like, React Testing Library, Jest, and Storybook.
          </li>
          <li className="XdescriptionItem">
            Met the company standard of 100% code coverage for our teams React
            components.
          </li>
          <li className="XdescriptionItem">
            Responsible for in-depth, attentive code reviews before important
            products got pushed out to customers.
          </li>
          <li className="XdescriptionItem">
            Managed version control and code adjustments with Git.
          </li>
          <li className="XdescriptionItem">
            Used Jira software for agile project management.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
