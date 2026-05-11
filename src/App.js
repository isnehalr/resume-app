import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-8">
          <Introduction />
          <Experience />
          <Education />
        </main>
      </div>
    </div>
  );
};

export default App;
