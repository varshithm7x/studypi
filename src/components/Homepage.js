import React from 'react';
import { Link } from 'react-router-dom';
import mathLogo from '../assets/math-logo.png'; // Make sure this path is correct
import './Homepage.css';

function Homepage() {
    return (
        <div className="homepage">
            <img src={mathLogo} alt="Math Logo" className="math-logo" />
            <h1 className="title">StudyPy</h1>
            <p className="subtitle">Math isn't just numbers</p>
            <p className="tagline">it's the key to understanding the universe!</p>
            <Link to="/login" className="start-learning-btn">
                Start Learning
            </Link>
        </div>
    );
}

export default Homepage; 