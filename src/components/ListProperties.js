import React, { useEffect, useState } from "react";
import { SuburbsAPI } from "../services/SuburbsAPI";
import { useNavigate } from "react-router-dom";
import "./Properties.css";

const ListProperties = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Default suburb for sandbox
  const suburbName = "Belmont North";

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        let res = await SuburbsAPI(suburbName, "properties");

        // Handle API JSON/string types
        if (typeof res === "string") {
          try { res = JSON.parse(res); } catch {}
        }

        let formatted = [];

        if (Array.isArray(res)) {
          formatted = res;
        } else if (Array.isArray(res.properties)) {
          formatted = res.properties;
        }

        setList(formatted);
      } catch (e) {
        console.error("Failed to fetch properties", e);
        setList([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <p className="loading">Loading properties...</p>;

  return (
    <div className="prop-list-page">

      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Menu
      </button>

      <h2 className="page-title">Properties For Sale</h2>

      <div className="prop-grid">
        {list.map((p, i) => (
          <div className="prop-card" key={i}>
            
            <h3 className="prop-name">{p.address?.street}</h3>

            <p className="prop-meta">
              🛏 {p.attributes?.bedrooms} &nbsp; | &nbsp; 🛁 {p.attributes?.bathrooms}
            </p>
            
            <p className="prop-price">
              {p.price ? `$${p.price.toLocaleString()}` : "Price Not Listed"}
            </p>

            <button
              className="learn-btn"
              onClick={() =>
                navigate(`/property/${encodeURIComponent(p.gnaf_pid)}`)
              }
            >
              Learn More →
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProperties;
