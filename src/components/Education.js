import React from "react";
import cvData from "../cv.json";

const Education = () => (
  <>
    <header>
      <h2 className="shadow-sm header">Education</h2>
    </header>
    {cvData.education.map((education, index) => (
      <div className="mt-2">
        <div className="year font-weight-bold">{education.year}</div>
        <div>
          <span className="position font-weight-bold">{education.degree} </span> -{" "}
          <span className="title">
            {education.schoolName}
          </span>
        </div>
        {education.branch && <span>{education.branch}</span>}
      </div>
    ))}
  </>
);

export default Education;
