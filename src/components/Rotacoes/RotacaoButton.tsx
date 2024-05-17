import React from 'react';
import './styles.css'; // Import your CSS file if needed

interface RotacaoButtonProps {
    text: string;
    link: string;
    clickable?: boolean;
}

const RotacaoButton: React.FC<RotacaoButtonProps> = ({ text, link, clickable }) => {
    if (!clickable) {
        return (
            <button className='rotacao-button'>{text}</button>
        );
    }
    return (
        <a href={`/rotacoes/${link}`}>
            <button className='rotacao-button'>{text}</button>
        </a>
    );
};

export default RotacaoButton;