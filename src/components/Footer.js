import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>© {new Date().getFullYear()} Microburbs Dashboard — Built for analysis & insights</p>
    </footer>
  );
};

export default Footer;
