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
import BackButton from '../../components/BackButton/BackButton';
// import component1, component2 from '../../components/RotacaoTemplate/{Component}';

// Para acessar essa página, acesse /rotacoes/:id
const RotacaoTemplate: React.FC = () => {
  const { id } = useParams<'id'>();

  // dados de cada tabela
  const [dfRotacao, setDfRotacao] = useState<DataFrame | null>(null);
  const [dfProjeto, setDfProjeto] = useState<DataFrame | null>(null);
  const [dfMembro, setDfMembro] = useState<DataFrame | null>(null);
  const [dfRotacaoMembrosFeedback, setDfRotacaoMembrosFeedback] = useState<DataFrame | null>(null);
  const [dfDiretoria, setDfDiretoria] = useState<DataFrame | null>(null);

  const [uniqueNomeDir, setUniqueNomeDir] = useState<string[]>([]);
  const [diretoria, setDiretoria] = useState<{ [key: string]: { lider: string; diretor: string; projetos: { nome_proj: string; descricao_proj: string }[] } }>({});
  const [membros, setMembros] = useState<string[]>([]);

  useEffect(() => {
    parseCsv<Rotacao>('/data/rotacao.csv').then(data => {
      if (data) {
        const df = new DataFrame(data);
        setDfRotacao(df);
      }
    });

    parseCsv<Diretoria>('/data/diretoria.csv').then(data => {
      if (data) {
        const df = new DataFrame(data);
        setDfDiretoria(df);
      }
    });

    parseCsv<Projeto>('/data/projeto.csv').then(data => {
      if (data) {
        const df = new DataFrame(data);
        setDfProjeto(df);
      }
    });

    parseCsv<Membro>('/data/membro.csv').then(data => {
      if (data) {
        const df = new DataFrame(data);
        setDfMembro(df);
      }
    });

    parseCsv<RotacaoMembrosFeedback>('/data/rotacao_membros_feedback.csv').then(data => {
      if (data) {
        const df = new DataFrame(data);
        setDfRotacaoMembrosFeedback(df);
      }
    });
    
  }, []);

  useEffect(() => {
    if (dfRotacao && dfDiretoria && dfProjeto && dfMembro && dfRotacaoMembrosFeedback) {
 
      const merged = dfRotacao.join(
            dfDiretoria,
            leftRow => leftRow.id_rot_dir,
            rightRow => rightRow.id_dir,
            (leftRow, rightRow) => {
              return { ...leftRow, ...rightRow };
            }
        );

      const mergedMem = dfMembro.join(
        dfRotacaoMembrosFeedback,
        leftRow => leftRow.id_mem,
        rightRow => rightRow.id_rot_mem_fbk_membro,
        (leftRow, rightRow) => {
          return { ...leftRow, ...rightRow };
        }
      );

      if (!dfProjeto || !dfMembro || !merged || !mergedMem) {
        console.error("Um ou mais DataFrames estão indefinidos.");
        return;
      }

      const filteredData = merged.where(row => row.periodo_rot === id);

      const uniqueNames = filteredData.getSeries("nome_dir").distinct().toArray();
      const uniqueIds = filteredData.getSeries("id_rot").distinct().toArray();

      const membros = mergedMem
      .where(row => row.id_rot_mem_fbk_rotacao === uniqueIds[0])
      .getSeries('nome_mem')
      .toArray();

      setMembros(membros);

      const result = uniqueNames.reduce((acc, nomeDir) => {
        // Filtrar dados para o nome_dir atual
        const currentDirData = filteredData.where(row => row.nome_dir === nomeDir);
      
        const projetoIds = currentDirData.getSeries("id_rot_proj").distinct().toArray();
      
        const projetos = dfProjeto.where(row => projetoIds.includes(row.id_proj))
          .select(row => ({
            nome_proj: row.nome_proj,
            descricao_proj: row.descricao_proj
          }))
          .toArray();
    
        const liderId = currentDirData.getSeries("id_rot_mem_lider").distinct().toArray();
        const diretorId = currentDirData.getSeries("id_rot_mem_diretor").distinct().toArray();

        console.log("LiderId:", liderId);
        console.log("DiretorId:", diretorId);
      
        const lider = dfMembro.where(row => row.id_mem === liderId).select(row => row.nome_mem);
        const diretor = dfMembro.where(row => row.id_mem === diretorId).select(row => row.nome_mem);
      
        acc[nomeDir] = {
          lider: lider,
          diretor: diretor,
          projetos: projetos
        };
        return acc;
      }, {} as { [key: string]: { lider: string; diretor: string; projetos: { nome_proj: string; descricao_proj: string }[] } });
      
      setDiretoria(result);
      setUniqueNomeDir(uniqueNames);
    }
  }, [dfRotacao, dfDiretoria]);

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
              <DiretoriaContainer diretoria={diretoria} membros={membros}/>
            ))}
            <BackButton />
        </div>
    </div>
  );
};

export default RotacaoTemplate;
