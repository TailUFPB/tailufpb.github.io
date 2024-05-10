import React from 'react';

import './styles.css';

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/membros">Membros</a></li>
                <li><a href="/projetos">Projetos</a></li>
                <li><a href="/contato">Contato</a></li>
                <li><a href="/rotacoes">Rotações</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;