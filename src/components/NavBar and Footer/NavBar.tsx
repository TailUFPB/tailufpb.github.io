import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './styles.css';

import NavBarLogo from '../../assets/navbar-logo.png';

const NavBar: React.FC = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    if (isMobile) {
        return (
            <nav className='navbar-container'>
                <div className='navbar-logo'>
                    <a href="/">
                        <img src={NavBarLogo} alt="NavBar Logo" />
                    </a>
                </div>
            </nav>
        );
    }
    return (
        <nav className='navbar-container'>
            <div className='navbar-logo'>
                <a href="/">
                    <img src={NavBarLogo} alt="NavBar Logo" />
                </a>
            </div>
            <ul className='navbar-routes-elements'>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/rotacoes">Rotações</a></li>
                <li><a href="/membros">Membros</a></li>
                <li><a href="/projetos">Projetos</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
            <div className='navbar-brazil-flag'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png" alt="Brazil Flag" />
            </div>
        </nav>
    );
};

export default NavBar;