import React from "react";
import cvData from "../cv.json";

const Experience = () => (
  <section className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
    {/* Section header */}
    <div className="flex items-center gap-3 mb-6">
      <span className="bg-brand-100 text-brand-700 rounded-lg p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </span>
      <h2 className="text-xl font-bold text-slate-800 tracking-tight">Experience</h2>
    </div>

    {/* Timeline */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />

      <div className="flex flex-col gap-8">
        {cvData.experience?.map((exp, expIndex) => (
          <div key={expIndex} className="relative pl-12">
            {/* Timeline dot */}
            <span className="absolute left-0 top-1.5 w-8 h-8 flex items-center justify-center rounded-full bg-brand-700 text-white text-xs font-bold shadow-md">
              {expIndex + 1}
            </span>

            {/* Job header */}
            <div className="mb-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-800">{exp.position}</h3>
                <span className="text-xs bg-brand-50 text-brand-700 border border-brand-200 rounded-full px-3 py-1 font-medium whitespace-nowrap">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <p className="text-sm text-brand-600 font-medium mt-0.5">{exp.companyName}</p>
            </div>

            {/* Projects */}
            <div className="flex flex-col gap-4">
              {exp.projects?.map((project, pIndex) => (
                <div key={pIndex} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-semibold text-slate-700">{project.title}</h4>
                    <span className="text-xs text-slate-400 italic">{project.tools}</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {project.responsibilities?.map((r, rIndex) => (
                      <li key={rIndex}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
