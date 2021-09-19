import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import logo from '../../assets/images/drawllab-logo.svg';

export default function HomePage() {
    return (
        <div className="home">
            <img src={logo} alt="" className="home__logo" />
            <h2>a collaborative drawing application.</h2>

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
