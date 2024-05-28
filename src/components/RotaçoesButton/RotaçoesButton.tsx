import React from 'react';
import './RotaçoesButton.css'; 

const RotacoesButton: React.FC = () => {
  return (
    <a href={`/rotacoes`}>
            <button className='rotacoes-button'>Rotações</button>
        </a>
  );
};

export default RotacoesButton;
