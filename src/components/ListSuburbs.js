import React, { useEffect, useState } from "react";
import { SuburbsAPI } from "../services/SuburbsAPI";
import { useNavigate } from "react-router-dom";
import "./Suburbs.css";

const ListSuburbs = () => {
  const [suburbList, setSuburbList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadSuburbs = async () => {
      try {
        setLoading(true);
        const res = await SuburbsAPI("", "suburbs");
        setSuburbList(res.results || res);
      } catch {
        console.error("Error loading suburbs");
      } finally {
        setLoading(false);
      }
    };

    loadSuburbs();
  }, []);

  if (loading) return <p className="loading">Loading suburbs...</p>;

  return (
    <div className="suburb-list">
      <h2>Select a Suburb</h2>

      {suburbList.map((s, i) => (
        <div className="suburb-card" key={i}>
          <div className="suburb-info">
            <h3>{s.area_name}</h3>
            <p>{s.information.lga} • {s.information.state}</p>
          </div>

          <button
            className="learn-btn"
            onClick={() => navigate(`/suburb/${encodeURIComponent(s.area_name)}`)}
          >
            Learn More →
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListSuburbs;
