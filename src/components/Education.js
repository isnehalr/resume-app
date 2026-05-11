import React from "react";
import cvData from "../cv.json";

const Education = () => (
  <section className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
    <div className="flex items-center gap-3 mb-6">
      <span className="bg-brand-100 text-brand-700 rounded-lg p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </span>
      <h2 className="text-xl font-bold text-slate-800 tracking-tight">Education</h2>
    </div>

    <div className="flex flex-col gap-5">
      {cvData.education.map((edu, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-200 hover:bg-brand-50 transition-colors"
        >
          {/* Year badge */}
          <span className="shrink-0 bg-brand-700 text-white text-xs font-semibold rounded-lg px-3 py-1.5 h-fit">
            {edu.year}
          </span>

          {/* Details */}
          <div>
            <p className="font-semibold text-slate-800 text-sm">{edu.degree}</p>
            <p className="text-slate-600 text-sm">{edu.schoolName}</p>
            {edu.branch && (
              <p className="text-brand-600 text-xs mt-0.5 font-medium">{edu.branch}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
