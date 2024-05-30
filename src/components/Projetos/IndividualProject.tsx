import React from 'react';

import './styles.css';

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

const IndividualProject: React.FC<ProjetoData> = (props) => {
    const transformPeriodo = (periodo: string): string => {
        const [year, half] = periodo.split('_');
        return `20${year}.${half === '1' ? '1' : '2'}`;
    };
    if (props.index % 2 === 0) {
        return (
            <div className="project-container" key={props.id_proj}>
                <div className='upper-content'>
                    <div className="image-content">
                        <img src={props.imagem_proj_url} alt="Descrição da imagem" />
                    </div>
                    <div className="text-content">
                        <h2>{props.nome_proj}</h2>
                        <div className="project-description">
                             <p>{props.descricao_proj}</p>
                        </div>
                    </div>
                </div>
                <div className='lower-content'>
                    <div className="additional-texts">
                        {props.rotacoes.map(rotacao => (
                            <div key={rotacao.id_rot} className='rot-content'>
                                <div className="additional-text">
                                    <p>{rotacao.diretoria}</p>
                                </div>
                                <a href={`/rotacoes/${rotacao.periodo_rot}`}>
                                    <div className="additional-text">
                                        <p>{transformPeriodo(rotacao.periodo_rot)}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );}
    else {
        return (
            <div className="project-container" key={props.id_proj}>
                <div className='upper-content'>
                    <div className="text-content">
                        <h2>{props.nome_proj}</h2>
                        <div className="project-description">
                             <p>{props.descricao_proj}</p>
                        </div>
                    </div>
                    <div className="image-content">
                        <img src={props.imagem_proj_url} alt="Descrição da imagem" />
                    </div>
                </div>
                <div className='lower-content-2'>
                    <div className="additional-texts">
                        {props.rotacoes.map(rotacao => (
                            <div key={rotacao.id_rot} className='rot-content'>
                                <div className="additional-text">
                                    <p>{rotacao.diretoria}</p>
                                </div>
                                <a href={`/rotacoes/${rotacao.periodo_rot}`}>
                                    <div className="additional-text">
                                        <p>{transformPeriodo(rotacao.periodo_rot)}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default IndividualProject;