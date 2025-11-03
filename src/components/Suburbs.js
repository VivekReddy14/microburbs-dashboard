import React, { useEffect, useState } from "react";
import { SuburbsAPI } from "../services/SuburbsAPI";
import "./Suburbs.css";

const Suburbs = () => {
  const [suburb, setSuburb] = useState("Belmont North");
  const [info, setInfo] = useState(null);
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const infoData = await SuburbsAPI(suburb, "info");
        const summaryData = await SuburbsAPI(suburb, "summary");
        setInfo(infoData.information);
        setSummary(summaryData.results);
      } catch (err) {
        setError("Failed to fetch suburb details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [suburb]);

  if (loading) return <p>Loading data for {suburb}...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="suburb-container">
      {info && (
        <div className="suburb-header">
          <h2>{info.area_name}</h2>
          <p>
            {info.state_abr} • Postcode {info.postcode}
          </p>
        </div>
      )}

      {/* Information Section */}
      {info && (
        <div className="info-section">
          <h3>Suburb Information</h3>
          <ul>
            <li><strong>Region:</strong> {info.geo_divisions.region}</li>
            <li><strong>LGA:</strong> {info.geo_divisions.lga}</li>
            <li><strong>SA2:</strong> {info.geo_divisions.sa2}</li>
            <li><strong>State:</strong> {info.state}</li>
            <li><strong>Area Level:</strong> {info.area_level}</li>
          </ul>
        </div>
      )}

      {/* Summary Section */}
      {summary.length > 0 && (
        <div className="summary-section">
          <h3>Summary Scores</h3>
          <div className="summary-grid">
            {summary.map((item) => (
              <div key={item.id} className="summary-card">
                <h4>{item.name}</h4>
                <p className="value">{item.value}</p>
                <p className="comment">{item.comment}</p>
                <p className="summary-text">{item.summary[0]}</p>
                <div className="adjectives">
                  {item.adjectives.map((adj, idx) => (
                    <span key={idx} className="badge">{adj}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Suburbs;
