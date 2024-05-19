import React, { useState } from 'react';
import './styles.css'; 

interface DiretoriaContainerProps {
  diretoria: string;
  diretor: string;
}

const DiretoriaContainer: React.FC<DiretoriaContainerProps> = ({ diretoria, diretor }) => {
  const [expandido, setExpandido] = useState(false);

  const toggleExpansao = () => {
    setExpandido(!expandido);
  };

  return (
    <div className="diretoria-container" onClick={toggleExpansao}>
      <div className="diretoria-header">
        <h3>{diretoria}</h3>
      </div>
      {expandido && (
        <div className="diretor-info">
          <p>Diretor: {diretor}</p>
        </div>
      )}
    </div>
  );
};

export default DiretoriaContainer;
