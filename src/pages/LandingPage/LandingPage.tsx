import React from 'react';

import './LandingPage.css';
// import component1, component2 from '../../components/LandingPage/{Component}';
import HeroLogo from '../../assets/landing-page-logo.png';

const LandingPage: React.FC = () => {
    return (
        <div className='landing-page-container'>
            <h1 className="hero-text">TAIL</h1>
            <img src={HeroLogo} alt="Hero" className="hero-image" />
        </div>
    );
};

export default LandingPage;