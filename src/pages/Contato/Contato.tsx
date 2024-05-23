import React from 'react';
import InstagramBlueSVG from '../../assets/socials/insta-blue.svg';
import GithubBlueSVG from '../../assets/socials/github-blue.svg';
import LinkedInBlueSVG from '../../assets/socials/linkedin-blue.svg';
import ContatoLogoSVG from '../../assets/contato-logo.svg';
import './Contato.css';

const Contato: React.FC = () => {
    return (
        <div>
        <div className="top-gradient">
            <div className="contato-alignment">
                <div className="contato-title">
                    <span>Conecte-se conosco através das redes soc</span>
                    <span style={{ color: 'rgba(25,226,254,1)' }}>ia</span>
                    <span>is</span>
                    <span style={{ color: 'rgba(25,226,254,1)' }}>.</span>
                    <br />
                    <span>Nosso time adorar</span>
                    <span style={{ color: 'rgba(25,226,254,1)' }}>ia</span>
                    <span> ouvir</span>
                    <br />
                    <span>o que você tem a dizer</span>
                    <span style={{ color: 'rgba(25,226,254,1)' }}>!</span>
                </div>
            </div>
        </div>
        <div className="distance-separator">
            <div className="socials-distance">
                <p className="socials-text">Instagram</p>
                <a href='https://www.instagram.com/tailufpb/'>
                    <img src={InstagramBlueSVG} alt="Instagram Blue Logo" className="socials-blue-logo" />
                </a>
            </div>
            <div className="separator-contato" />
            <div className="socials-distance">
                <p className="socials-text">LinkedIn</p>
                <a href='https://www.linkedin.com/company/tailufpb/mycompany/'>
                    <img src={LinkedInBlueSVG} alt="LinkedIn Blue Logo" className="socials-blue-logo" />
                </a>
            </div>
            <div className="separator-contato" />
            <div className="socials-distance">
                <p className="socials-text">Github</p>
                <a href='https://github.com/TailUFPB'>
                    <img src={GithubBlueSVG} alt="Github Blue Logo" className="socials-blue-logo" />
                </a>
            </div>
        </div>
        <img src={ContatoLogoSVG} alt="Contato Logo" className="contato-logo" />
        <div className="page-gradient" />
      </div>
    );
  }

export default Contato;