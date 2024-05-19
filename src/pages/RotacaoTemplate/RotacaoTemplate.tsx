import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataFrame, IDataFrame } from "data-forge";

import { parseCsv } from '../../utils/csvUtils';  
import { 
  Rotacao, 
  Projeto, 
  Membro, 
  RotacaoMembrosFeedback, 
  Diretoria
} from '../../types/csvTypes'; 

import './RotacaoTemplate.css';
import BackgroundTemplate from '../../components/Background Template/BackgroundTemplate';
import DiretoriaContainer from '../../components/DiretoriaContainer/DiretoriaContainer';
// import component1, component2 from '../../components/RotacaoTemplate/{Component}';

// Para acessar essa página, acesse /rotacoes/:id
const RotacaoTemplate: React.FC = () => {
  const { id } = useParams<'id'>();

  // dados de cada tabela
  const [rotacaoData, setRotacaoData] = useState<Rotacao[]>([]);
  const [dfRotacao, setDfRotacao] = useState<DataFrame | null>(null);

  const [projetoData, setProjetoData] = useState<Projeto[]>([]);

  const [membroData, setMembroData] = useState<Membro[]>([]);
  const [rotacaoMembrosFeedbackData, setRotacaoMembrosFeedbackData] = useState<RotacaoMembrosFeedback[]>([]);
  
  const [diretoriaData, setDiretoriaData] = useState<Diretoria[]>([]);
  const [dfDiretoria, setDfDiretoria] = useState<DataFrame | null>(null);

  const [mergedData, setMergedData] = useState<DataFrame | null>(null);

  const [uniqueNomeDir, setUniqueNomeDir] = useState<string[]>([]);
  const [uniqueIdRot, setUniqueIdRot] = useState<number[]>([]);

  useEffect(() => {
    parseCsv<Rotacao>('/data/rotacao.csv').then(data => {
      if (data) {
        setRotacaoData(data);
        const df = new DataFrame(data);
        setDfRotacao(df);
      }
    });

    parseCsv<Diretoria>('/data/diretoria.csv').then(data => {
      if (data) {
        setDiretoriaData(data);
        const df = new DataFrame(data);
        setDfDiretoria(df);
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
    
  }, []);

  useEffect(() => {
    if (dfRotacao && dfDiretoria) {
      // Mesclar os DataFrames com base nas colunas de chave
      console.log("dfrotacao:", dfRotacao.toString());
      console.log("dfDiretoria:", dfDiretoria.toString());
      console.log("Chaves de mesclagem em dfRotacao:", dfRotacao.getSeries("id_rot_dir").distinct().toArray());
      console.log("Chaves de mesclagem em dfDiretoria:", dfDiretoria.getSeries("id_dir").distinct().toArray());

      const merged = dfRotacao.join(
            dfDiretoria,
            leftRow => leftRow.id_rot_dir,
            rightRow => rightRow.id_dir,
            (leftRow, rightRow) => {
              return { ...leftRow, ...rightRow };
            }
        );

      console.log("Merged Data:", merged.toString());

      // // Extrair valores únicos de 'nome_dir' e 'id_rot'
      const filteredData = merged.where(row => row.periodo_rot === id);
      const uniqueNames = filteredData.getSeries("nome_dir").distinct().toArray();
      const uniqueIds = filteredData.getSeries("id_rot").distinct().toArray();

      console.log("Nomes únicos de diretoria:", uniqueNames);
      console.log("IDs únicos de rotacao:", uniqueIds);

      setUniqueNomeDir(uniqueNames);
      setUniqueIdRot(uniqueIds);
    }
  }, [dfRotacao, dfDiretoria]);

  // console.log("Merged Data:", mergedData.toString());

  // Original 
  // useEffect(() => {
  //   parseCsv<Rotacao>('/data/rotacao.csv').then(data => {
  //     if (data) {
  //       setRotacaoData(data);

  //     }
  //   });

  //   parseCsv<Projeto>('/data/projeto.csv').then(data => {
  //     if (data) {
  //       setProjetoData(data);
  //     }
  //   });

  //   parseCsv<Membro>('/data/membro.csv').then(data => {
  //     if (data) {
  //       setMembroData(data);
  //     }
  //   });

  //   parseCsv<RotacaoMembrosFeedback>('/data/rotacao_membros_feedback.csv').then(data => {
  //     if (data) {
  //       setRotacaoMembrosFeedbackData(data);
  //     }
  //   });

  //   parseCsv<Diretoria>('/data/diretoria.csv').then(data => {
  //     if (data) {
  //       setDiretoriaData(data);
  //     }
  //   });
  // }, []);

  const transformPeriodo = (periodo: string): string => {
    const [year, half] = periodo.split('_');
    const halfString = half === '1' ? '1' : '2';
    return `20${year}.${halfString}`;
  };

  return (
    <div className='rotacoes-page-container'>
        <BackgroundTemplate
            header="Descubra nossa equipe presente em cada fase da TAIL."
            subheader="Veja as mentes por trás de cada rotação."
        />
        <div className='rotacoes-page-content'>
            <h1 className='rotacoes-header'>{id && transformPeriodo(id)}<span className="dots">:</span></h1>
            {uniqueNomeDir.map((nomeDir, index) => (
              <DiretoriaContainer diretoria={nomeDir} diretor="João" />
            ))}
        </div>
    </div>
  );
};

export default RotacaoTemplate;
