import React, { useMemo } from "react";
import { Link } from "wouter";
import { SocialIcon } from "react-social-icons";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Button from "../../components/ui/Button/Button";
import "./AboutPage.css";
import ThemeToggle from "../../components/ThemeToggle";
import IconButton from "../../components/ui/IconButton/IconButton";
import Panel from "../../components/ui/Panel/Panel";
import { TOOLS } from "../../utils/constants/tools.js";
import { CREDITS } from "../../utils/constants/credits.js";

export default function AboutPage({ tool, setTool }) {
  const creditRotations = useMemo(() => CREDITS.map(() => Math.random() * 4 - 2), []);

  return (
    <div className="about-page">
      <ThemeToggle />
      <div className="about-nav">
        <Link to="/">
          <IconButton>
            <ArrowLeft size={20} />
          </IconButton>
        </Link>
      </div>
      <h2>
        ABOUT <span className="highlight">DRAWLLAB</span>
      </h2>
      <div className="about-container">
        <div className="about-left">
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

          <section className="credits">
            <div className="credits-container">
              <h4>libraries used</h4>
              <ul>
                {CREDITS.map(({ id, name, url, description }, i) => (
                  <li key={id} className="box btn" style={{ transform: `rotate(${creditRotations[i]}deg)` }}>
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

        <section className="tools">
          <h5>TOOLS</h5>
          <ul>
            {TOOLS.map(({ id, icon: Icon, name: name }) => (
              <li key={id}>
                <Icon size={22} className="tool-icon" />
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
