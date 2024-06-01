import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataFrame } from "data-forge";

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

interface rotacaoData {
  id_rot: string;
  diretoria: string;
  membros: string[];
  lideres: string;
  diretores: string;
  projeto_nome: string;
  projeto_descricao: string;
}

// Para acessar essa página, acesse /rotacoes/:id
const RotacaoTemplate: React.FC = () => {
  const { id } = useParams<'id'>();

  // dados de cada tabela
  const [dfRotacao, setDfRotacao] = useState<DataFrame | null>(null);
  const [dfProjeto, setDfProjeto] = useState<DataFrame | null>(null);
  const [dfMembro, setDfMembro] = useState<DataFrame | null>(null);
  const [dfRotacaoMembrosFeedback, setDfRotacaoMembrosFeedback] = useState<DataFrame | null>(null);
  const [dfDiretoria, setDfDiretoria] = useState<DataFrame | null>(null);

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

  const [rotacaoData, setRotacaoData] = useState<rotacaoData[]>([]);

  useEffect(() => {
    if (dfRotacao && dfDiretoria && dfProjeto && dfMembro && dfRotacaoMembrosFeedback) {
        const rotacoes = dfRotacao.where(row => row.periodo_rot === id).toArray();

        const rotacoesData = rotacoes.map(rotacao => {
          const diretoria_nome = dfDiretoria.where(row => row.id_dir === rotacao.id_rot_dir).first().nome_dir;
          const projeto_nome = dfProjeto.where(row => row.id_proj === rotacao.id_rot_proj).first().nome_proj;
          const projeto_descricao = dfProjeto.where(row => row.id_proj === rotacao.id_rot_proj).first().descricao_proj;
          let membros = dfRotacaoMembrosFeedback.where(row => row.id_rot_mem_fbk_rotacao === rotacao.id_rot).toArray();

          // Adicionar à membros os dados de dfMembros
          membros = membros.map(membro => {
            const membroData = dfMembro.where(row => row.id_mem === membro.id_rot_mem_fbk_membro);
            // Retornar os dados do membro originais com os novos. Utilizarr toArray() e não first()
            return {
              ...membroData.toArray()[0],
              cargo: membro.cargo_rot_mem_fbk
            };
          });          

          // Filtrar membros para pegar apenas os líderes
          const lideres = membros.filter(membro => membro.cargo === 'Líder');
          // Filtrar membros para pegar apenas os diretores
          const diretores = membros.filter(membro => membro.cargo === 'Diretor');
          // Filtrar membros para pegar apenas os membros
          membros = membros.filter(membro => membro.cargo === 'Membro');

          return {
            id_rot: rotacao.id_rot,
            diretoria: diretoria_nome,
            membros: membros.map(membro => membro.nome_mem),
            lideres: lideres.map(lider => lider.nome_mem)[0],
            diretores: diretores.map(diretor => diretor.nome_mem)[0],
            projeto_nome,
            projeto_descricao
          };
        });

        setRotacaoData(rotacoesData);
        console.log(rotacoesData);
    } 
  }, [id, dfRotacao, dfDiretoria, dfProjeto, dfMembro, dfRotacaoMembrosFeedback]);

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
            <h1 className='rotacao-header'>{id && transformPeriodo(id)}<span className="dots">:</span></h1>
            <div className='rotacao-header-line'></div>
            {rotacaoData.map((rotacao, index) => {
            console.log('Rendering rotacao:', rotacao);
            return (
              <div key={rotacao.id_rot} className='rotacao-container'>
                  <DiretoriaContainer
                      index={index}
                      diretoria={rotacao.diretoria}
                      lider={rotacao.lideres}
                      diretor={rotacao.diretores}
                      projetos={[{ nome_proj: rotacao.projeto_nome, descricao_proj: rotacao.projeto_descricao }]}
                      membros={rotacao.membros}
                  />
              </div>
            );
          })}
            <BackButton />
        </div>
    </div>
  );
};

export default RotacaoTemplate;
