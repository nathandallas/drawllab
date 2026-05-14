import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";
import "./HomePage.css";
import ThemeToggle from "../../components/ThemeToggle";
import RoughToggle from "../../components/RoughToggle";
import useTheme from "../../hooks/useTheme";
import Button from "../../components/ui/Button/Button";
import RoughBorder from "../../components/ui/RoughBorder";
import { ArrowUpRight } from "lucide-react";
import NavBar from "../../components/NavBar/NavBar";

export default function HomePage() {
  const { theme } = useTheme();
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleKey = e => {
      if (e.key === "n" || e.key === "N") navigate("/canvas");
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.classList.remove("no-scroll");
    };
  }, [navigate]);

  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <h1>DRAWLLAB</h1>
          <h2>sketch faster,</h2>
          <h2 className="highlight">think clearer.</h2>
          <h3>A browser-based drawing app for wireframes, diagrams, and quick sketches.</h3>
          <NavBar className="home-nav"/>
          <h5 className="tablet-hide">
            or press <span><RoughBorder color="var(--text-primary)" strokeWidth={3} />N</span> for new canvas
          </h5>
        </div>
        <div className="box hero-graphic tablet-hide">
          <RoughBorder color="var(--text-primary)" strokeWidth={3} />
          <svg className="hero-draw" viewBox="0 0 420 320" width="100%" style={{ display: "block" }} aria-hidden="true">
            <rect x="10" y="10" width="400" height="300" fill="none" stroke="var(--text-primary)" strokeWidth="3" />
            <rect x="28" y="28" width="130" height="22" fill="var(--color-secondary)" stroke="var(--text-primary)" strokeWidth="2.5" />
            <rect x="28" y="68" width="364" height="100" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
            <circle cx="72" cy="118" r="22" fill="var(--color-primary)" stroke="var(--text-primary)" strokeWidth="2.5" />
            <line x1="108" y1="106" x2="370" y2="106" stroke="var(--text-primary)" strokeWidth="2.5" />
            <line x1="108" y1="124" x2="370" y2="124" stroke="var(--text-primary)" strokeWidth="2.5" />
            <line x1="108" y1="142" x2="370" y2="142" stroke="var(--text-primary)" strokeWidth="2.5" />
            <rect x="28" y="190" width="110" height="100" fill="var(--color-highlight)" stroke="var(--text-primary)" strokeWidth="2.5" />
            <rect x="154" y="190" width="110" height="100" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
            <rect x="280" y="190" width="110" height="100" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
            <line x1="28" y1="300" x2="392" y2="300" stroke="var(--text-primary)" strokeWidth="2" strokeDasharray="6 5" />
          </svg>
        </div>
      </div>

      <ThemeToggle />
      <RoughToggle />

      <div className="footer">
        <h5>
          BY <a href="https://nathandallas.github.io/portfolio/">NATHAN CHALLENDER</a>
          <ArrowUpRight />
        </h5>
      </div>
    </div>
  );
}
