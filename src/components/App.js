import React from "react";
import "../styles/App.css";
const description =
  "an app where you can order from local shop and pickup at set time to avoide queue";

export default function App() {
  return (
    <div className="App">
      <h1 data-ns-test="project-name">Local Grocery</h1>
      <h3 data-ns-test="project-description">{description}</h3>
    </div>
  );
}
