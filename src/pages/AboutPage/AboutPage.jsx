import React, { useMemo } from "react";
import { Link } from "wouter";
import { SocialIcon } from "react-social-icons";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import "./AboutPage.css";
import ThemeToggle from "../../components/ThemeToggle";
import IconButton from "../../components/ui/IconButton/IconButton";
import Panel from "../../components/ui/Panel/Panel";
import { TOOLS } from "../../utils/constants/tools.js";
import { CREDITS } from "../../utils/constants/credits.js";

export default function AboutPage({ tool, setTool }) {
  const creditRotations = useMemo(
    () => CREDITS.map(() => Math.random() * 6 - 3),
    []
  );

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
        <Panel as="section" className="about-details">
          <h4>a tiny drawing application.</h4>
          <p>
            Drawllab is a lightweight, user-friendly alternative to modern drawing apps. With its minimalist interface and a small set of
            focused tools, you can jump right in and start creating.
          </p>
        </Panel>

        <section className="tools">
          <h5>TOOLS</h5>

          <ul>
            {TOOLS.map(({ id, icon: Icon, name: name }) => (
              <li>
                <Icon size={22} className="toolbar__icon" />
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div>
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

          <div>
            <h4>created by</h4>
            <p>
              <span>Nathan Challender | </span>
              <a href="https://nathandallas.github.io/portfolio/">Portfolio</a>
            </p>
          </div>
        </section>
      </div>

      <div>
        <Link to="/canvas">
          <ArrowLeft size={20} className="about-nav__icon" />
          <p>Back to Canvas</p>
        </Link>
      </div>
    </div>
  );
}
