import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import logo from '../../assets/images/drawllab-logo.svg';
import icon from '../../assets/images/drawllab-icon.svg';
import mouse from '../../assets/images/drawllab-icon-mouse.svg';

export default function HomePage() {
    return (
        <div className="home">
            
                <div className="home__logo"><img src={logo} alt="" className="home__logo" /></div>
                <h2>a browser based drawing application</h2>

                <div className="home__graphic">
                    <img src={icon} alt="drawllab icon" className="home__icon" />
                </div>
                <div className="home__graphic">
                    <img src={mouse} alt="drawllab icon" className="home__icon2" />
                </div>

            <div className="home__button-container">
                <Link to="/canvas">
                    <button className="home__canvas">
                        Start Drawing
                    </button>
                </Link>
                <Link to="/about">
                    <button className="home__about">
                        About
                    </button>
                </Link>
            </div>
           
        </div>
    )
}
