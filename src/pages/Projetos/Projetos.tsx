import React, { useState, useEffect } from 'react';
import { parseCsv } from '../../utils/csvUtils';  
import { Projeto, Rotacao, Diretoria } from '../../types/csvTypes';  
import { DataFrame } from "data-forge";

import './Projetos.css';

import BackgroundTemplate2 from '../../components/Background Template/BackgroundTemplate2';
import IndividualProject from '../../components/Projetos/IndividualProject';

interface RotacaoData {
    id_rot: string;
    diretoria: string;
    periodo_rot: string;
}

interface ProjetoData {
    index: number;
    id_proj: string;
    nome_proj: string;
    descricao_proj: string;
    tipo_proj: string;
    completo_proj: string;
    link_proj: string;
    imagem_proj_url: string;
    rotacoes: RotacaoData[];
}

const Projetos: React.FC = () => {
    const [dfProjetos, setDfProjetos] = useState<DataFrame | null>(null); // DataFrame dos dados da tabela Projeto
    const [dfRotacoes, setDfRotacoes] = useState<DataFrame | null>(null); // DataFrame dos dados da tabela Rotacao
    const [dfDiretorias, setDfDiretorias] = useState<DataFrame | null>(null); // DataFrame dos dados da tabela Diretoria

    useEffect(() => {
        parseCsv<Projeto>('/data/projeto_sem_imagem.csv').then(data => {
            if (data) {
                const df = new DataFrame(data);
                setDfProjetos(df);
            }
        });

        parseCsv<Rotacao>('/data/rotacao.csv').then(data => {
            if (data) {
                const df = new DataFrame(data);
                setDfRotacoes(df);
            }
        });

        parseCsv<Diretoria>('/data/diretoria.csv').then(data => {
            if (data) {
                const df = new DataFrame(data);
                setDfDiretorias(df);
            }
        });
    }, []);

    const [projetos, setProjetos] = useState<ProjetoData[]>([]);

    useEffect(() => {
        if (dfProjetos && dfRotacoes && dfDiretorias) {
            // Filtrar projetos que link_proj não é vazio
            const projetosComLink = dfProjetos.where(projeto => projeto.link_proj !== '' && projeto.imagem_proj_url !== '');

            // Mergir Rotacoes com Projetos
            const projetos: ProjetoData[] = projetosComLink.toArray().map(projeto => {
                const rotacoes = dfRotacoes.where(rotacao => rotacao.id_rot_proj === projeto.id_proj).toArray().map(rotacao => {
                    const diretoria = dfDiretorias.where(diretoria => diretoria.id_dir === rotacao.id_rot_dir).first();
                    return {
                        id_rot: rotacao.id_rot,
                        diretoria: diretoria.nome_dir,
                        periodo_rot: rotacao.periodo_rot
                    };
                });
                const index = projetosComLink.toArray().indexOf(projeto);
                return {
                    index: index,
                    id_proj: projeto.id_proj,
                    nome_proj: projeto.nome_proj,
                    descricao_proj: projeto.descricao_proj,
                    tipo_proj: projeto.tipo_proj,
                    completo_proj: projeto.completo_proj,
                    link_proj: projeto.link_proj,
                    imagem_proj_url: projeto.imagem_proj_url,
                    rotacoes
                };
            });

            setProjetos(projetos);
        }
        
    }, [dfProjetos, dfRotacoes, dfDiretorias]);

    // Projetos.js
    return (
        <div className='projetos-page-container'>
            <BackgroundTemplate2 
            header='Explore nossos principais projetos ao longo dos anos.' 
            subheader='As criações mais recentes da TAIL.' 
            />
            <div className='projetos-page-content'>
                {projetos.map(projeto => (
                    <IndividualProject
                        index={projeto.index}
                        id_proj={projeto.id_proj}
                        nome_proj={projeto.nome_proj}
                        descricao_proj={projeto.descricao_proj}
                        tipo_proj={projeto.tipo_proj}
                        completo_proj={projeto.completo_proj}
                        link_proj={projeto.link_proj}
                        imagem_proj_url={projeto.imagem_proj_url}
                        rotacoes={projeto.rotacoes}
                    />
                ))}
            </div>  
        </div>
    );
  
};

export default Projetos;