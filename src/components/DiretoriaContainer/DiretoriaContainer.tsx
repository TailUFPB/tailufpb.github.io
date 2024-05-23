import React, { useState } from 'react';
import './styles.css'; 

interface Projeto {
  nome_proj: string;
  descricao_proj: string;
}

interface DiretoriaInfo {
  lider: string;
  diretor: string;
  projetos: Projeto[];
}

interface DiretoriaContainerProps {
  diretoria: { [key: string]: DiretoriaInfo };
  membros: string[];
}

const DiretoriaContainer: React.FC<DiretoriaContainerProps> = (props) => {
  const [expandido, setExpandido] = useState<{ [key: string]: boolean }>({});

  const toggleExpansao = (nomeDir: string) => {
    setExpandido(prevState => ({
      ...prevState,
      [nomeDir]: !prevState[nomeDir]
    }));
  };

  return (
    <div className="diretorias-container">
      {Object.keys(props.diretoria).map(nomeDir => {
        const dirInfo = props.diretoria[nomeDir];
        const isExpanded = expandido[nomeDir] || false;

        return (
          <div key={nomeDir} className="diretoria-container" onClick={() => toggleExpansao(nomeDir)}>
            <div className="diretoria-header">
              <h3>{nomeDir}</h3>
            </div>
            {isExpanded && (
              <div className="diretoria-info">
                <p><strong>Líder:</strong> {dirInfo.lider}</p>
                <p><strong>Diretor:</strong> {dirInfo.diretor}</p>
                <div className="projetos-list">
                  <h4>Projetos:</h4>
                  {dirInfo.projetos.map((proj, index) => (
                    <div key={index} className="projeto">
                      <p><strong>Nome do Projeto:</strong> {proj.nome_proj}</p>
                      <p><strong>Descrição do Projeto:</strong> {proj.descricao_proj}</p>
                    </div>
                  ))}
                </div>
                <div className="membros-list">
                  <h4>Membros:</h4>
                  {props.membros.map((membro, index) => (
                    <p key={index}>{membro}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
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
