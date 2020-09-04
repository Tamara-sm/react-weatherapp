import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";
import Date from "./Date";
import Temperature from "./Temperature";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="Weather-box">
        <h1 className="city">Miami</h1>
        <Temperature value={22} />
        <div className="emoji">
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            height="120"
            alt="new"
          />
          <Date />
          <Search />
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
