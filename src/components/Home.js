import React, { useState } from "react";
import ListSuburbs from "./ListSuburbs";
import Property from "./Property";
import "./Home.css";
import ListProperties from "./ListProperties";

const Home = () => {
  const [activeTab, setActiveTab] = useState("suburb");

  return (
    <div className="home-wrapper">

      {/* Toggle buttons */}
      <div className="toggle-tabs">
        <button
          className={activeTab === "suburb" ? "tab active" : "tab"}
          onClick={() => setActiveTab("suburb")}
        >
          Suburbs
        </button>

        <button
          className={activeTab === "property" ? "tab active" : "tab"}
          onClick={() => setActiveTab("property")}
        >
          Property
        </button>
      </div>

      {/* Content below */}
      <div className="tab-content">
        {activeTab === "suburb" && <ListSuburbs />}
        {activeTab === "property" && <ListProperties />}
      </div>

    </div>
  );
};

export default Home;
