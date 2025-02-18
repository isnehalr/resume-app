import React from "react";
import csvData from "../cv.json";

const Introduction = () => (
  <>
    <h2 className="display-5 shadow-sm header">Introduction</h2>
    <p className="text-indent">
      {csvData.introduction}
    </p>
  </>
);

export default Introduction;
