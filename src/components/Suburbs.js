import React, { useEffect, useState } from "react";
import { SuburbsAPI } from "../services/SuburbsAPI";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList
} from "recharts";
import { useParams, useNavigate } from "react-router-dom";
import "./Suburbs.css";

const Suburbs = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  // For sanbox use Belmont North
  // const [suburb, setSuburb] = useState(name);
  const [suburb, setSuburb] = useState('Belmont North');
  const [info, setInfo] = useState(null);
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [demographics, setDemographics] = useState(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [propOpen, setPropOpen] = useState(false);
  const [propLoading, setPropLoading] = useState(false);
  const [risk, setRisk] = useState([]);
  const [riskLoading, setRiskLoading] = useState(true);
  const [schools, setSchools] = useState([]);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const [schoolsLoading, setSchoolsLoading] = useState(false);
  const [similarSubs, setSimilarSubs] = useState([]);
  const [similarLoading, setSimilarLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const infoRes = await SuburbsAPI(suburb, "info");
        const summaryRes = await SuburbsAPI(suburb, "summary");
        setInfo(infoRes.information);
        setSummary(summaryRes.results);
        handlePropertyToggle();
      } catch {
        console.error("Failed to load suburb info");
      } finally {
        setLoading(false);
      }

      try {
        const riskRes = await SuburbsAPI(suburb, "risk");
        // debugger
        let formatted = [];

        if (riskRes?.results && Array.isArray(riskRes.results)) {
          formatted = riskRes.results;
        } else if (Array.isArray(riskRes)) {
          formatted = riskRes;
        }

        // ✅ Remove duplicates based on name
        const unique = formatted.filter(
          (v, i, self) => i === self.findIndex(t => t.name === v.name && t.value === v.value)
        );

        setRisk(unique);
      } catch (e) {
        console.error("Risk load failed", e);
      } finally {
        setRiskLoading(false);
      }

      try {
        const simRes = await SuburbsAPI(suburb, "similar");

        let formatted = [];
        if (Array.isArray(simRes)) formatted = simRes;
        else if (Array.isArray(simRes.results)) formatted = simRes.results;

        setSimilarSubs(formatted);
      } catch (e) {
        console.error("Similar suburbs failed", e);
      } finally {
        setSimilarLoading(false);
      }


    };
    loadData();
  }, [suburb]);

  const handleDemoToggle = async () => {
    if (!demoOpen && !demographics) {
      try {
        setDemoLoading(true);
        const res = await SuburbsAPI(suburb, "demographics");
        setDemographics(res);
      } catch {
        console.error("Failed fetching demographics");
      } finally {
        setDemoLoading(false);
      }
    }
    setDemoOpen(!demoOpen);
  };

  const handleSchoolsToggle = async () => {
    if (!schoolsOpen && schools.length === 0) {
      try {
        setSchoolsLoading(true);
        let res = await SuburbsAPI(suburb, "schools");

        if (typeof res === "string") {
          try { res = JSON.parse(res); } catch {}
        }

        let formatted = [];

        if (Array.isArray(res)) {
          formatted = res;
        } else if (Array.isArray(res.results)) {
          formatted = res.results;
        }

        setSchools(formatted);

      } catch (e) {
        console.error("Schools load failed", e);
        setSchools([]);
      } finally {
        setSchoolsLoading(false);
      }
    }

    setSchoolsOpen(!schoolsOpen);
  };


  if (loading) return <p className="loading">Loading...</p>;

  const chartData = summary.map((item, i) => ({
    index: i + 1,
    value: Number(item.value.split("/")[0]),
    fullName: item.name,
  }));

  const average =
    chartData.reduce((sum, d) => sum + d.value, 0) / chartData.length;

  // Top & Bottom 3 scores (chart remains unsorted)
  const sortedByScore = [...chartData].sort((a, b) => b.value - a.value);
  const topThree = sortedByScore.slice(0, 3);
  const bottomThree = sortedByScore.slice(-3).reverse();

  const handlePropertyToggle = async () => {
    if (!propOpen && properties.length === 0) {
      try {
        setPropLoading(true);
        
        const res = await SuburbsAPI(suburb, "properties");
        console.log(res, typeof res);
        setProperties(res);
      } catch (e) {
        console.error("Failed loading properties");
      } finally {
        setPropLoading(false);
      }
    }
    setPropOpen(!propOpen);
  };

  const scrollCarousel = (direction) => {
    const box = document.getElementById("carousel");
    const cardWidth = 260; // card width + gap
    box.scrollLeft += direction * cardWidth * 3;
  };

  const scrollSchoolCarousel = (direction) => {
    const box = document.getElementById("school-carousel");
    const cardWidth = 260;
    box.scrollLeft += direction * cardWidth * 3;
  };

  const scrollSimilar = (direction) => {
    const slider = document.getElementById("similar-slider");
    const cardWidth = slider.firstChild?.offsetWidth || 260;
    slider.scrollLeft += direction * (cardWidth * 3);
  };


  return (
    <div className="suburb-page">

      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to suburbs
      </button>

      {info && (
        <div className="suburb-header">
          <h2>{info.area_name}</h2>
          <p>{info.state_abr} • {info.postcode}</p>
        </div>
      )}

      <div className="content-row">
        {info && (
          <div className="info-box">
            <h3>Suburb Information</h3>
            <ul>
              <li><strong>Region:</strong> {info.geo_divisions.region}</li>
              <li><strong>LGA:</strong> {info.geo_divisions.lga}</li>
              <li><strong>SA2:</strong> {info.geo_divisions.sa2}</li>
              <li><strong>SA3:</strong> {info.geo_divisions.sa3}</li>
              <li><strong>State:</strong> {info.state}</li>
            </ul>

            {/* Top & Bottom 3 */}
            <div className="score-cards">
              <div className="score-card high">
                <h4>Best In</h4>
                <ul>
                  {topThree.map((item, i) => (
                    <li key={i}>
                      {item.fullName} – <strong>{item.value}</strong>/100
                    </li>
                  ))}
                </ul>
              </div>

              <div className="score-card low">
                <h4>Bad In</h4>
                <ul>
                  {bottomThree.map((item, i) => (
                    <li key={i}>
                      {item.fullName} – <strong>{item.value}</strong>/100
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* ✅ RISK FACTORS */}
            <div className="risk-section">
              <h3>Risk Factors</h3>

              {riskLoading && <p>Loading risk data...</p>}

              {!riskLoading && risk.length === 0 && <p>No risk data available.</p>}

              {!riskLoading && risk.length > 0 && (
                <ul className="risk-list">
                  {risk.map((r, i) => (
                    <li key={i} className="risk-item">
                      <span className="risk-name">{r.name}</span>
                      <span className="risk-value">{r.value || "-"}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          
          </div>
          
        )}

        <div className="chart-box">
          <h3>Summary Score Chart</h3>

          <div className="chart">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="index" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
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
              {chartData.map((item, i) => (
                <p key={i}>
                  <b>{item.index}</b> – {item.fullName}
                </p>
              ))}
            </div>
          </div>
          {/* ✅ SIMILAR SUBURBS */}
          <div className="similar-section">
            <h3>Similar Suburbs</h3>

            {similarLoading && <p>Loading similar suburbs...</p>}

            {!similarLoading && similarSubs.length === 0 && (
              <p>No similar suburbs found.</p>
            )}

            {!similarLoading && similarSubs.length > 0 && (
              <div className="similar-wrapper">

                {/* LEFT ARROW */}
                <button className="similar-btn left" onClick={() => scrollSimilar(-1)}>‹</button>

                {/* SCROLLING ROW */}
                <div className="similar-carousel" id="similar-slider">
                  {similarSubs.map((s, i) => (
                    <div className="similar-card" key={i}>
                      <div className="similar-card-header">
                        <h4>{s.area_name}</h4>

                        <div className="info-icon">
                          ℹ️
                          <span className="tooltip">{s.summary}</span>
                        </div>
                      </div>
                      
                      <p className="keywords">{s.keywords}</p>

                      {s.price && (
                        <p className="price">
                          <b>House:</b> ${s.price.house.toLocaleString()}<br/>
                          <b>Unit:</b> ${s.price.unit.toLocaleString()}
                        </p>
                      )}

                      {/* <p className="summary">{s.summary}</p> */}
                    </div>
                  ))}
                </div>

                {/* RIGHT ARROW */}
                <button className="similar-btn right" onClick={() => scrollSimilar(1)}>›</button>

              </div>
            )}
          </div>

        </div>

      </div>

      {/* Accordion for demographics */}
      <div className="toggle-section">
        <div className="toggle-header" onClick={handleDemoToggle}>
          <h3>Demographic Statistics</h3>
          <span className={`arrow ${demoOpen ? "open" : ""}`}>&#9662;</span>
        </div>

        {demoOpen && demoLoading && (
          <div className="toggle-content">
            <p>Loading demographic data...</p>
          </div>
        )}

        {demoOpen && demographics && (
          <div className="toggle-content">

            <div className="sub-block">
              <h4>Age Distribution</h4>
              <table>
                <thead>
                  <tr>
                    <th>Age</th>
                    <th>Males</th>
                    <th>Females</th>
                    <th>Persons</th>
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
                    <th>Bracket</th>
                    <th>Proportion</th>
                  </tr>
                </thead>
                <tbody>
                  {demographics.income.map((item, i) => (
                    <tr key={i}>
                      <td>{item.income_bracket}</td>
                      <td>{(item.proportion * 100).toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sub-block">
              <h4>Population Over Time</h4>
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Population</th>
                  </tr>
                </thead>
                <tbody>
                  {demographics.population.map((p, i) => (
                    <tr key={i}>
                      <td>{new Date(p.date).getFullYear()}</td>
                      <td>{p.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}
      </div>

      {/* ✅ PROPERTIES FOR SALE */}
      <div className="toggle-section">
        <div className="toggle-header" onClick={handlePropertyToggle}>
          <h3>Properties For Sale</h3>
          <span className={`arrow ${propOpen ? "open" : ""}`}>&#9662;</span>
        </div>

        {propOpen && propLoading && (
          <div className="toggle-content">
            <p>Loading property listings...</p>
          </div>
        )}

        {/* temporarily it should be open  */}
        {((propOpen && !propLoading && properties.length > 0) || true) && (
          <div className="toggle-content">

            {/* Carousel */}
            <div className="property-carousel-wrapper">
              <button className="scroll-btn left" onClick={() => scrollCarousel(-1)}>‹</button>

              <div className="property-carousel" id="carousel">
                {properties.map((p, i) => (
                  <div className="property-card" key={i}>
                    {/* <img src={p.image || "https://via.placeholder.com/250"} alt="house" /> */}
                    <h4>{p.address.street}</h4>
                    <p>{p.attributes.bedrooms} beds | {p.attributes.bathrooms} bath</p>
                    <p>{p.price ? `$${p.price.toLocaleString()}` : "Price not listed"}</p>
                  </div>
                ))}
              </div>

              <button className="scroll-btn right" onClick={() => scrollCarousel(1)}>›</button>
            </div>

          </div>
        )}

      </div>

      {/* ✅ SCHOOLS SECTION */}
      <div className="toggle-section">
        <div className="toggle-header" onClick={handleSchoolsToggle}>
          <h3>Schools</h3>
          <span className={`arrow ${schoolsOpen ? "open" : ""}`}>&#9662;</span>
        </div>

        {schoolsOpen && schoolsLoading && (
          <div className="toggle-content">
            <p>Loading school data...</p>
          </div>
        )}

        {schoolsOpen && !schoolsLoading && schools.length === 0 && (
          <div className="toggle-content">
            <p>No school data available.</p>
          </div>
        )}

        {schoolsOpen && !schoolsLoading && schools.length > 0 && (
          <div className="toggle-content">
            <div className="property-carousel-wrapper">
              <button className="scroll-btn left" onClick={() => scrollSchoolCarousel(-1)}>‹</button>

              <div className="property-carousel" id="school-carousel">
                {schools.map((s, i) => (
                  <div className="property-card" key={i}>
                    <h4>{s.name}</h4>
                    <p><b>Type:</b> {s.school_level_type}</p>
                    <p><b>Sector:</b> {s.school_sector_type}</p>
                    <p><b>Attendance:</b> {(s.attendance_rate * 100).toFixed(1)}%</p>
                    <p><b>NAPLAN:</b> {s.naplan_rank}</p>
                    <p><b>Boys/Girls:</b> {s.boys} / {s.girls}</p>
                  </div>
                ))}
              </div>

              <button className="scroll-btn right" onClick={() => scrollSchoolCarousel(1)}>›</button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Suburbs;
