import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="main-header" onClick={() => navigate("/")}>
      <h1>Microburbs Dashboard</h1>
    </header>
  );
};

export default Header;
