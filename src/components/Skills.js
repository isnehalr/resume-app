import React from "react";
import csvData from "../cv.json";

const Skills = () => (
  <>
    <div className="container">
      <header className="text-center mt-5">
        <h2 className="shadow-sm header">Skills</h2>
      </header>
      <ul className="list-group">
        {csvData.skills.map((skill, index) => (
          <li key={index} className="title list-group-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Skills;
