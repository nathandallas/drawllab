import React, { useEffect } from "react";
import { Link } from "wouter";
import "./HomePage.css";
import ThemeToggle from "../../components/ThemeToggle";
import useTheme from "../../hooks/useTheme";

import heroLight from "../../assets/images/hero-image.png";
import heroDark from "../../assets/images/hero-image-dark.png";

export default function HomePage() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

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
              <button className="btn btn-primary">start drawing</button>
            </Link>
            <Link to="/about">
              <button className="btn">about</button>
            </Link>
          </div>
          <h5 className="tablet-hide">
            or press <span>N</span> for new canvas
          </h5>
        </div>
        <div className="container">
          <img className="hero-img tablet-hide" src={theme === "light" ? heroLight : heroDark} alt="drawing sample" />
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
