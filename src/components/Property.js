import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PropertyAPI } from "../services/PropertyAPI";
import "./Properties.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Property = () => {
  // const { id } = useParams();
  const id = 'GANSW704074813';
  const navigate = useNavigate();

  const [summary, setSummary] = useState(null);
  const [insight, setInsight] = useState([]);
  const [loading, setLoading] = useState(true);

  const [demoOpen, setDemoOpen] = useState(false);
  const [demographics, setDemographics] = useState(null);
  const [demoLoading, setDemoLoading] = useState(false);

  useEffect(() => {
    const loadPropertyData = async () => {
      try {
        // ✅ 1. SUMMARY
        let s = await PropertyAPI(id, "summary");
        if (typeof s === "string") {
          try { s = JSON.parse(s); } catch (e) {}
        }
        setSummary(s);

        // ✅ 2. SUBURB INSIGHT → chart
        let i = await PropertyAPI(id, "suburb_insights");
        if (typeof i === "string") {
          try { i = JSON.parse(i); } catch (e) {}
        }

        let cleaned = [];
        if (Array.isArray(i)) cleaned = i;
        else if (Array.isArray(i.results)) cleaned = i.results;

        setInsight(cleaned);
      } catch (e) {
        console.error("Property page load failed", e);
      } finally {
        setLoading(false);
      }
    };

    loadPropertyData();
  }, [id]);


  // ✅ Lazy load demographics when accordion opens
  const handleDemoToggle = async () => {
    if (!demoOpen && !demographics) {
      try {
        setDemoLoading(true);
        let d = await PropertyAPI(id, "demographics");
        if (typeof d === "string") try { d = JSON.parse(d); } catch {}
        setDemographics(d);
      } catch {
        console.error("Demographics load failed");
      } finally {
        setDemoLoading(false);
      }
    }
    setDemoOpen(!demoOpen);
  };

  if (loading) return <p className="loading">Loading property data...</p>;
  if (!summary) return <p className="loading">No property data found.</p>;

  // ✅ Chart format from insight
  const chartData = insight.map((item, i) => ({
    index: i + 1,
    value: Number(item.value?.split("/")[0]) || 0,
    fullName: item.name || item.metric || `Metric ${i + 1}`,
  }));

  const average = chartData.length
    ? chartData.reduce((a, b) => a + b.value, 0) / chartData.length
    : 0;

  // ✅ Key points list
  const keyPoints = summary.summary_points
    ? summary.summary_points.split("\n").filter((p) => p.trim() !== "")
    : [];

  return (
    <div className="property-page">

      <button className="back-btn" onClick={() => navigate("/properties")}>
        ← Back to Properties
      </button>

      <h2 className="property-title">Property Insights</h2>
      <p className="property-short">{summary.summary_short}</p>

      {/*  ✅ SUMMARY + CHART SIDE-BY-SIDE  */}
      <div className="summary-row">
        
        <div className="summary-box">
          <h3>Key Points</h3>
          <ul className="summary-list">
            {keyPoints.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="chart-box">
          <h3>Suburb Insight Score</h3>

          <div className="chart">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="index" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="value" fill="#1976d2">
                  <LabelList dataKey="value" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-footer">
            <p className="average-text">
              Average Score: <strong>{average.toFixed(1)}/100</strong>
            </p>

            <div className="legend-mini">
              {chartData.map((c, i) => (
                <p key={i}>
                  <b>{c.index}</b> – {c.fullName}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ DEMOGRAPHICS ACCORDION */}
      <div className="toggle-section">
        <div className="toggle-header" onClick={handleDemoToggle}>
          <h3>Demographic Statistics</h3>
          <span className={`arrow ${demoOpen ? "open" : ""}`}>&#9662;</span>
        </div>

        {demoOpen && demoLoading && (
          <div className="toggle-content">
            <p>Loading demographics...</p>
          </div>
        )}

        {demoOpen && demographics && (
          <div className="toggle-content">

            <div className="sub-block">
              <h4>Age Distribution</h4>
              <table>
                <thead>
                  <tr>
                    <th>Age</th><th>Males</th><th>Females</th><th>Persons</th>
                  </tr>
                </thead>
                <tbody>
                  {["0-17","18-24","25-44","45-64","65+"].map(age => {
                    const m = demographics.age_brackets.find(a=>a.age===age && a.gender==="males");
                    const f = demographics.age_brackets.find(a=>a.age===age && a.gender==="females");
                    const p = demographics.age_brackets.find(a=>a.age===age && a.gender==="persons");

                    return (
                      <tr key={age}>
                        <td>{age}</td>
                        <td>{(m?.proportion*100).toFixed(1)}%</td>
                        <td>{(f?.proportion*100).toFixed(1)}%</td>
                        <td>{(p?.proportion*100).toFixed(1)}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="sub-block">
              <h4>Household Income</h4>
              <table>
                <thead>
                  <tr>
                    <th>Bracket</th><th>Proportion</th>
                  </tr>
                </thead>
                <tbody>
                  {demographics.income.map((i, x) => (
                    <tr key={x}>
                      <td>{i.income_bracket}</td>
                      <td>{(i.proportion*100).toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}
      </div>

    </div>
  );
};

export default Property;
