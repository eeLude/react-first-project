import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillHeight = "0%"; //palkin oletusarvo
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"; //skaalaa palkin
    console.log(props.value);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} //palkki visualisoidaan skaalattuna
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
