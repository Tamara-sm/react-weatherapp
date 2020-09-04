import React from "react";

export default function Temperature(props) {
  return (
    <div className="temperature">
      <h2 id="current-temp">{props.value}</h2>
      <span className="celsius">°C </span>
      <span className="marker"> | </span>
      <span className="farh">°F </span>
    </div>
  );
}
