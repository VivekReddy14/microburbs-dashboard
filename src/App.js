import React, { useState } from "react";
import Suburbs from "./components/Suburbs";
import Property from "./components/Property";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("suburbs");

  return (
    <div className="App">
      <header className="header">
        <h1>Microburbs Insights Dashboard</h1>
      </header>

      <div className="tab-buttons">
        <button
          className={activeTab === "suburbs" ? "active" : ""}
          onClick={() => setActiveTab("suburbs")}
        >
          🏙️ Suburbs
        </button>
        <button
          className={activeTab === "property" ? "active" : ""}
          onClick={() => setActiveTab("property")}
        >
          🏠 Property
        </button>
      </div>

      <div className="content">
        {activeTab === "suburbs" && <Suburbs />}
        {activeTab === "property" && <Property />}
      </div>
    </div>
  );
}

export default App;
