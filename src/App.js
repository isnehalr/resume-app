import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Education from "./components/Education";

const App = () => {
  return (
    <>
      <div className="row">
        <Sidebar />
        <div className="col-sm-9 content">
          <Introduction />
          <Experience />
          <Education />
          <div className="pb-5" />
        </div>
      </div>
    </>
  );
};

export default App;
