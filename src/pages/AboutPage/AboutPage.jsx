import React from "react";
import { Link } from "wouter";
import { SocialIcon } from "react-social-icons";
import "./AboutPage.css";

// ----- icons -----
import back from "../../assets/images/arrow.png";
import paintbrush from "../../assets/images/paintbrush.svg";
import line from "../../assets/images/draw-line.svg";
import square from "../../assets/images/rectangle.svg";
import selection from "../../assets/images/select.svg";
import ThemeToggle from "../../components/ThemeToggle";
// import deleteicon from '../../assets/images/delete.png';
// import colorpicker from '../../assets/images/color-picker.svg';
// import collab from '../../assets/images/collab.svg';
// import layers from '../../assets/images/layers.svg';
// import light from '../../assets/images/light.svg';

export default function AboutPage() {
  return (
    <div className="about-page">
      <ThemeToggle />
      <div className="about-nav">
        <Link to="/">
          <button className="btn">
            <img src={back} alt="home button" className="about-nav__icon" />
          </button>
        </Link>
      </div>
      <h2>
        ABOUT <span className="highlight">DRAWLLAB</span>
      </h2>
      <div className="about-container">
        <section className="about-details box">
          <h4>a tiny drawing application.</h4>
          <p>
            Drawllab is a lightweight, user-friendly alternative to modern drawing apps. With its minimalist interface and a small set of
            focused tools, you can jump right in and start creating.
          </p>
        </section>

        <section className="tools">
          <h5>TOOLS</h5>
          <ul>
            <li>
              <img src={paintbrush} alt="key" />
              <p>Pen/Brush</p>
            </li>
            <li>
              <img src={line} alt="key" />
              <p>Straight Line</p>
            </li>
            <li>
              <img src={square} alt="key" />
              <p>Draw Quadrilateral</p>
            </li>
            <li>
              <img src={selection} alt="key" />
              <p>Move / Resize</p>
            </li>
          </ul>
        </section>
      </div>
      <div>
        <section className="credits">
          <div className="credits-container">
            <h2>libraries used</h2>
            <ul>
              <li>
                <a href="https://roughjs.com/">roughJS</a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/perfect-freehand">perfect-freehand</a>
              </li>
              <li>
                <a href="https://casesandberg.github.io/react-color/">react color</a>
              </li>
              <li>
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
          <img src={back} alt="back button" className="about-nav__icon" />
          <h2>Back to Canvas</h2>
        </Link>
      </div>
    </div>
  );
}
