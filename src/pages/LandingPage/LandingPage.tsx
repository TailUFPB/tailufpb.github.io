import React from 'react';

import './LandingPage.css';
// import component1, component2 from '../../components/LandingPage/{Component}';
import HeroLogo from '../../assets/landing-page-logo.png';
import InstagramSVG from '../../assets/socials/instagram.svg';
import LinkedinSVG from '../../assets/socials/linkedin.svg';
import GithubSVG from '../../assets/socials/github.svg';

const LandingPage: React.FC = () => {
    return (
        <div className='landing-page-container'>
            <h1 className="hero-text">TAIL</h1>
            <img src={HeroLogo} alt="Hero" className="hero-image" />
            <h1 className="hero-subtitle">Technology and Artificial Intelligence League</h1>
            <div className='landing-page-socials'>
                <a href='https://www.instagram.com/tailufpb/'>
                    <img src={InstagramSVG} alt="Instagram" className="social-icon" />
                </a>
                <a href='https://www.linkedin.com/company/tailufpb/mycompany/'>
                    <img src={LinkedinSVG} alt="Linkedin" className="social-icon" />
                </a>
                <a href='https://github.com/TailUFPB'>
                    <img src={GithubSVG} alt="Github" className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default LandingPage;