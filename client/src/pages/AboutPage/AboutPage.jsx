import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.scss';
import home from '../../assets/images/home.png';
import back from '../../assets/images/arrow.png'
import paintbrush from '../../assets/images/paintbrush.svg';
import line from '../../assets/images/draw-line.svg';
import square from '../../assets/images/rectangle.svg';
import selection from '../../assets/images/select.svg';
import about from '../../assets/images/about.png';
// import deleteicon from '../../assets/images/delete.png';
// import colorpicker from '../../assets/images/color-picker.svg';
// import collab from '../../assets/images/collab.svg';
// import layers from '../../assets/images/layers.svg';
// import light from '../../assets/images/light.svg';

export default function AboutPage() {
    return (
        <div className="about">
            <h1>About Drawllab</h1>
            <p className="about__text">Drawllab is a browser based whiteboard and drawing application. Use it to make wireframes, sketch out ideas and jump start your creative projects!</p>

            <h3>Key</h3>
            <div className="key">
                <ul className="key__ul">
                    {/* <li className="key__li">
                        <img src={colorpicker} alt="key" className="key__icon" />
                        <p>Select Color</p>
                    </li> */}
                    <li className="key__li">
                        <img src={paintbrush} alt="key" className="key__icon" />
                        <p>Pen/Brush</p>
                    </li>
                    {/* <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Eraser</p>
                    </li> */}
                    <li className="key__li">
                        <img src={line} alt="key" className="key__icon" />
                        <p>Draw Straight Line</p>
                    </li>
                    <li className="key__li">
                        <img src={square} alt="key" className="key__icon" />
                        <p>Create Quadrilateral</p>
                    </li>
                    {/* <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Create Circle</p>
                    </li> */}
                    <li className="key__li">
                        <img src={selection} alt="key" className="key__icon" />
                        <p>Move / Resize</p>
                    </li>
                   {/*  <li className="key__li">
                        <img src={collab} alt="key" className="key__icon" />
                        <p>Generate Collab Link</p>
                    </li>
                    <li className="key__li">
                        <img src={layers} alt="key" className="key__icon" />
                        <p>New/Manage Layers</p>
                    </li>
                    <li className="key__li">
                        <img src={light} alt="key" className="key__icon" />
                        <p>Toggle Dark/Light Mode</p>
                    </li> 
                    <li className="key__li">
                        <img src={deleteicon} alt="key" className="key__icon" />
                        <p>Clear Canvas</p>
                    </li>*/}
                    <li className="key__li">
                        <img src={home} alt="key" className="key__icon" />
                        <p>Go to Home</p>
                    </li>
                    <li className="key__li">
                        <img src={about} alt="key" className="key__icon" />
                        <p>Go to About</p>
                    </li>
                </ul>
                </div>

            
                <div className="about-nav__link--canvas">
                <Link to="/canvas" className="about-nav__link">
                    <img src={back} alt="back button" className="about-nav__icon" />
                    <h2 className="about-nav__h2">Back to Canvas</h2>
                </Link>
                </div>
                <div className="about-nav__link--home">
                <Link to="/">
                    <img src={home} alt="home button" className="about-nav__icon" />
                </Link>
                </div>
        </div>
    )
}
