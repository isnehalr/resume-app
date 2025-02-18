import React from "react";
import * as img from "../images/img.jpg";
import Skills from "./Skills";

const Sidebar = () => (
  <div className="col-sm-3 jumbotron shadow-sm">
    <div className="container">
      <div className="text-center">
        <img className="img img-fluid" src={img} alt="display"/>

        <h2 className="display-name">Snehal Ramteke</h2>
        <div>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <label className="header-label">
            &nbsp;&nbsp;
            <a href="mailto:isnehalr@gmail.com">isnehalr@gmail.com</a>
          </label>
        </div>
        <div>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          <label className="header-label">
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/isnehalr">
              linkedin.com/in/isnehalr
            </a>
          </label>
        </div>
      </div>
    </div>
    <Skills />
  </div>
);

export default Sidebar;
