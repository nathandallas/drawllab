import React from "react";
import { Link } from "wouter";
import { SocialIcon } from "react-social-icons";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import "./AboutPage.css";
import ThemeToggle from "../../components/ThemeToggle";
import IconButton from "../../components/ui/IconButton/IconButton";
import Panel from "../../components/ui/Panel/Panel";
import { TOOLS } from "../../utils/constants/tools.js";

export default function AboutPage({ tool, setTool }) {
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
            <h2>libraries used</h2>
            <ul>
              <li className="box btn">
                <a href="https://roughjs.com/">roughJS</a>
              </li>
              <li className="box btn">
                <a href="https://www.npmjs.com/package/perfect-freehand">perfect-freehand</a>
              </li>
              <li className="box btn">
                <a href="https://casesandberg.github.io/react-color/">react color</a>
              </li>
              <li className="box btn">
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">html canvas</a>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <h2>created by</h2>
              <p>
                <span>Nathan Challender | </span>
                <a href="https://nathandallas.github.io/portfolio/">Portfolio</a>
              </p>
            </div>

            <div>
              <SocialIcon url="https://codepen.io/nathandallas" bgColor="#96bbbf" style={{ height: 75, width: 75 }} />
              <SocialIcon url="https://github.com/nathandallas" bgColor="#96bbbf" style={{ height: 75, width: 75 }} />
            </div>
          </div>
        </section>
      </div>

      <div>
        <Link to="/canvas">
          <ArrowUpRight size={20} className="about-nav__icon" />
          <h2>Back to Canvas</h2>
        </Link>
      </div>
    </div>
  );
}
