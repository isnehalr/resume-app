import React from "react";
import cvData from "../cv.json";

const Introduction = () => (
  <section className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
    <div className="flex items-center gap-3 mb-4">
      <span className="bg-brand-100 text-brand-700 rounded-lg p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </span>
      <h2 className="text-xl font-bold text-slate-800 tracking-tight">About Me</h2>
    </div>
    <p className="text-slate-600 leading-relaxed text-base">
      {cvData.introduction}
    </p>
  </section>
);

export default Introduction;
