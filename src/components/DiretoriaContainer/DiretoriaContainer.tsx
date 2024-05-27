import React, { useState } from 'react';
import './styles.css'; 

interface DiretoriaContainerProps {
  index: number;
  diretoria: string;
  lider: string;
  diretor: string;
  membros: string[];
  projetos: { nome_proj: string, descricao_proj: string }[];
}

const DiretoriaContainer: React.FC<DiretoriaContainerProps> = (props) => {
  const projeto = props.projetos[0];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansao = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="diretorias-container">
      <div className="diretoria-container" onClick={toggleExpansao}>
        <div className="diretoria-header">
          {isExpanded ? <h4 className='colored'>Diretoria {props.diretoria}</h4> : <h4>Diretoria {props.diretoria} - {projeto.nome_proj}</h4>}
          {isExpanded ? <span>-</span> : <span>+</span>}
        </div>
        {isExpanded && (
          <div className="rotacao-info">
          <div className="diretoria-info">
            <p><strong>Diretor<span className="dots">:</span></strong> {props.diretor}</p>
            <p><strong>Líder<span className="dots">:</span></strong> {props.lider}</p>
            <div className="membros-list">
              <h4>Membros<span className="dots">:</span></h4>
              {props.membros.map((membro, index) => (
                <li key={index}>{membro}</li>
              ))}
            </div>
          </div>
          <div className="projeto-info">
              <div className="projeto">
                <p><strong>Projeto<span className="dots">:</span></strong> {projeto.nome_proj}</p>
                <li>{projeto.descricao_proj}</li>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// const DiretoriaContainer: React.FC<DiretoriaContainerProps> = (props) => {
//   const [expandido, setExpandido] = useState(false);
//   const diretoria = props.diretoria;
//   const membro = props.membros;

//   const toggleExpansao = () => {
//     setExpandido(!expandido);
//   };

//   return (
//     <div className="diretoria-container" onClick={toggleExpansao}>
//       <div className="diretoria-header">
//         <h3>{diretoria}</h3>
//       </div>
//       {expandido && (
//         <div className="diretor-info">
//           <p>Diretor: {diretor}</p>
//         </div>
//       )}
//     </div>
//   );
// };

export default DiretoriaContainer;
