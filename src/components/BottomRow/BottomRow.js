import React from "react";
import "./BottomRow.css";

const BottomRow = props => {
  return (
    <div className="bottom-row">
      <h3>Description</h3>
      <p>{props.data.explanation}</p>
    </div>
  );
};

export default BottomRow;
