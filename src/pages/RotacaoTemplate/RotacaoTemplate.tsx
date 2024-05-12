import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { parseCsv } from '../../utils/csvUtils';  
import { Rotacao, Projeto, Membro, RotacaoMembrosFeedback, Diretoria } from '../../types/csvTypes'; 

import './RotacaoTemplate.css';
// import component1, component2 from '../../components/RotacaoTemplate/{Component}';

// Para acessar essa página, acesse /rotacoes/:id
const RotacaoTemplate: React.FC = () => {
  const { id } = useParams<'id'>();

  // dados de cada tabela
  const [rotacaoData, setRotacaoData] = useState<Rotacao[]>([]);
  const [projetoData, setProjetoData] = useState<Projeto[]>([]);
  const [membroData, setMembroData] = useState<Membro[]>([]);
  const [rotacaoMembrosFeedbackData, setRotacaoMembrosFeedbackData] = useState<RotacaoMembrosFeedback[]>([]);
  const [diretoriaData, setDiretoriaData] = useState<Diretoria[]>([]);

  useEffect(() => {
    parseCsv<Rotacao>('/data/rotacao.csv').then(data => {
      if (data) {
        setRotacaoData(data);
      }
    });

    parseCsv<Projeto>('/data/projeto.csv').then(data => {
      if (data) {
        setProjetoData(data);
      }
    });

    parseCsv<Membro>('/data/membro.csv').then(data => {
      if (data) {
        setMembroData(data);
      }
    });

    parseCsv<RotacaoMembrosFeedback>('/data/rotacao_membros_feedback.csv').then(data => {
      if (data) {
        setRotacaoMembrosFeedbackData(data);
      }
    });

    parseCsv<Diretoria>('/data/diretoria.csv').then(data => {
      if (data) {
        setDiretoriaData(data);
      }
    });
  }, []);

  console.log(rotacaoData);
  console.log(projetoData);
  console.log(membroData);
  console.log(rotacaoMembrosFeedbackData);
  console.log(diretoriaData);

  return (
    <div>
        <h1 className='rotacao-header'>Dynamic Page</h1>
        <p>This is a dynamic page for item ID: {id}</p>
    </div>
  );
};

export default RotacaoTemplate;
