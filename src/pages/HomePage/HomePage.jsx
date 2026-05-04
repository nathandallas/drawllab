import React from "react";
import { Link } from "wouter";
import "./HomePage.css";
import ThemeToggle from "../../components/ThemeToggle";
import logo from "../../assets/images/drawllab-logo.svg";
import icon from "../../assets/images/drawllab-icon.svg";
import mouse from "../../assets/images/drawllab-icon-mouse.svg";
import hero from "../../assets/images/hero-image.png";

export default function HomePage() {
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <h1>DRAWLLAB</h1>
          <h2>sketch faster,</h2>
          <h2 className="highlight">think clearer.</h2>
          <h3>A browser-based drawing app for wireframes, diagrams, and quick sketches.</h3>
          <div className="home-nav">
            <Link to="/canvas">
              <button className="btn-primary">start drawing</button>
            </Link>
            <Link to="/about">
              <button className="btn">about</button>
            </Link>
          </div>
          <h5>
            or press <span>N</span> for new canvas
          </h5>
        </div>
        <div className="container">
          <img className="hero-img" src={hero} alt="drawing sample" />
        </div>
      </div>

      <ThemeToggle />

      <div className="footer">
        <h5>
          BY <a href="https://nathandallas.github.io/portfolio/">NATHAN CHALLENDER</a>
        </h5>
      </div>
    </div>
  );
}
