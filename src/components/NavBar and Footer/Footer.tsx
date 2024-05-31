import React from 'react';

import './styles.css';
import FooterLogo from '../../assets/footer-logo.png';

import InstagramSVG from '../../assets/socials/instagram.svg';
import LinkedinSVG from '../../assets/socials/linkedin.svg';
import GithubSVG from '../../assets/socials/github.svg';
//a
const Footer: React.FC = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-logo'>
                <a href="/">
                    <img src={FooterLogo} alt="Footer Logo" />
                </a>
            </div>
            <div className='footer-content'>
                <ul className='footer-routes-elements'>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/rotacoes">Rotações</a></li>
                    <li><a href="/membros">Membros</a></li>
                    <li><a href="/projetos">Projetos</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
                <div className='footer-socials'>
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
        </footer>
    );
};

export default Footer;