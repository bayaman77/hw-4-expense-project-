import React from "react";
import "./ChartBar.css";

const ChartBar = ({maxPrice, currentPrice, label}) => {
const fillHeight = (100 * currentPrice) / maxPrice

  return (
    <div className="char-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: `${fillHeight}%` }}></div>
      </div>
      <p className="chart-bar__label">{label}</p>
    </div>
  );
};

export default ChartBar;
