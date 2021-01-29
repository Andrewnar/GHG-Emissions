import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import GHGMap from "./GHGMap";
import Legend from "./Legend";
import LoadCountriesTask from "../tasks/LoadCountriesTask";

const GHG = () => {
  const [countries, setCountries] = useState([]);

  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setCountries);
  };

  useEffect(load, []); //page load we tell it will track [], componentDidMount

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <GHGMap />
          <Legend />
        </div>
      )}
    </div>
  );
};

export default GHG;
