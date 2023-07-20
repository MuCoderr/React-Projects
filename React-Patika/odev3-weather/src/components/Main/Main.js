import React from "react";
import Search from "../Search/Search";
import WeatherCard from "../WeatherCard/WeatherCard";
import Weekly from "../Weekly/Weekly";

function Main() {
  return (
    <div className="Main">
      <Search />
      <hr />
      <WeatherCard />
      <hr />
      <Weekly />
    </div>
  );
}

export default Main;
