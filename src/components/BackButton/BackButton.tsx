import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button className="button-back" onClick={handleBackClick}>Voltar</button>
      {/* Resto do conteúdo da página */}
    </div>
  );
};

export default BackButton;