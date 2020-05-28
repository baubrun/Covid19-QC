import React from "react";
import "./App.css";
import { Title } from "./components/Title";
import { DataContainer } from "./components/DataContainer";

const App = () => {
  return (
    <div className="container">
      <Title title="Situation du Coronavirus (COVID-19) au Québec" />
      <DataContainer />
    </div>
  );
};

export default App;
