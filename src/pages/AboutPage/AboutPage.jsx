import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.scss';
import home from '../../assets/images/home.png';
import back from '../../assets/images/arrow.png'

export default function AboutPage() {
    return (
        <div className="about">
            <h1>About Drawllab</h1>
            <p className="about__text">Drawllab is a browser based whiteboard and drawing application. Multiple users can use Drawllab to work on the same canvas simultaneously.</p>

            <h3>Key</h3>
            <div className="key">
                <ul className="key__ul">
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Select Color</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Pen/Brush</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Eraser</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Draw Straight Line</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Create Quadrilateral</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Create Circle</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Select</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Resize</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Generate Collab Link</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>New/Manage Layers</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Toggle Dark/Light Mode</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Clear Canvas</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>Home</p>
                    </li>
                    <li className="key__li">
                        <img src="https://via.placeholder.com/50" alt="key" className="key__icon" />
                        <p>About</p>
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
