import React from "react";
import cvData from "../cv.json";

const Skills = () => (
  <div className="w-full">
    <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-200 mb-3">Technical Skills</h2>
    <div className="flex flex-wrap gap-2">
      {cvData.skills.map((skill, index) => (
        <span key={index} className="skill-badge">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;
