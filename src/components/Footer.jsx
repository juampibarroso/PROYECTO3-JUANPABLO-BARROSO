
import React from "react";
import "../styles/Footer.css";
import github from "../assets/github.png";

const Footer = () => {
  
  return (
    <div className="footer-container">

      <span>By <b>Juan Pablo Barroso</b></span><a href="https://github.com/juampibarroso" target="_blank" rel="noreferrer"><img src={github} className="github-icon" alt=""/></a>
    </div>
  );
};

export default Footer;



