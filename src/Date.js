import React from "react";

export default function Date() {
  return (
    <div className="day">
      <h2>Monday, 16, 2020</h2>
      <h3>18:42 pm</h3>
      <h4 className="Desciption"> Clear sky </h4>
      <div className="col-md-3 weather-info">
        <p>
          <b>Wind Speed: 20 </b>(km/hr)
        </p>
      </div>
      <div className="col-md-3 weather-info">
        <p>
          <b>Humidity: 25 </b>(%)
        </p>
      </div>
    </div>
  );
}
