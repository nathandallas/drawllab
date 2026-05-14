import React, { useMemo } from "react";
import Button from "../../components/ui/Button/Button";
import "./AboutPage.css";
import ThemeToggle from "../../components/ThemeToggle";
import RoughToggle from "../../components/RoughToggle";
import Panel from "../../components/ui/Panel/Panel";
import RoughBorder from "../../components/ui/RoughBorder";
import { TOOLS } from "../../utils/constants/tools.js";
import { CREDITS } from "../../utils/constants/credits.js";
import NavBar from "../../components/NavBar/NavBar.jsx";

export default function AboutPage() {
  const creditRotations = useMemo(() => CREDITS.map(() => Math.random() * 4 - 2), []);

  return (
    <div className="about-page">
      <ThemeToggle />
      <RoughToggle />
      <NavBar className="about-nav" />
      <h2>
        ABOUT <span className="highlight">DRAWLLAB</span>
      </h2>
      <div className="about-container">
        <Panel as="section" className="about-details">
          <div>
            <h4>a tiny drawing application.</h4>
            <p>
              Drawllab is a lightweight, user-friendly alternative to modern drawing apps. With its minimalist interface and a small set of
              focused tools, you can jump right in and start creating.
            </p>
          </div>

          <hr className="about-divider" />
          <div className="made-by">
            <div className="made-by__name">
              <span className="made-by__label">made by</span>
              <strong>Nathan Challender</strong>
            </div>
            <div className="made-by__links">
              <a href="https://nathandallas.github.io/portfolio/">
                <Button variant="accent">portfolio</Button>
              </a>
              <a href="https://github.com/nathandallas">
                <Button>github</Button>
              </a>
            </div>
          </div>
        </Panel>

        <section className="tools surface">
          <RoughBorder color="var(--surface-color)" strokeWidth={3} />
          <h5>TOOLS</h5>
          <ul>
            {TOOLS.map(({ id, icon: Icon, name: name }) => (
              <li key={id}>
                <RoughBorder color="var(--color-primary)" strokeWidth={3} />
                <Icon className="tool-icon" />
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="credits">
          <div className="credits-container">
            <h4>libraries used</h4>
            <ul>
              {CREDITS.map(({ id, name, url, description }, i) => (
                <li key={id} className="box lift" style={{ transform: `rotate(${creditRotations[i]}deg)` }}>
                  <RoughBorder color="var(--surface-color)" strokeWidth={3} />
                  <div style={{ transform: `rotate(${-creditRotations[i]}deg)` }}>
                    <a href={url}>{name}</a>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
