import React from "react";
import csvData from "../cv.json";

const Experience = () => (
  <>
    <header>
      <h2 className="display-5 shadow-sm header"> Experience</h2>
    </header>
    {csvData.experience?.map((experience, expIndex) => (
      <>
        <span className="year font-weight-bold">{experience.startDate} - {experience.endDate}</span>
        <div>
          <span className="position font-weight-bold">{experience.position}</span> -{" "}
          <span className="title">{experience.companyName}</span>
        </div>
        { experience.projects?.map((project, index) => (
            <div className="mt-2">
              <section>
                <h6 className="font-weight-bold">Project #{index + 1} :</h6>
                <div>
                  <span className="title"> Title :</span> {project?.title}{" "}
                </div>
                <div>
                  <span className="title">Tools/Technologies :</span> {project?.tools}{" "}
                </div>
                <h6 className="mt-2">Roles and Responsibilities: </h6>
                <ul>
                  {project.responsibilities?.map((responsibility, index) => (
                    <>
                    <li>{responsibility}</li>
                    </>
                  ))}
                </ul>           
              </section>
            </div>
        ))}
        {expIndex < (csvData.experience?.length - 1) && <hr/>}
      </>
    ))}
  </>
);

export default Experience;
