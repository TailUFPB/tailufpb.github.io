import React, { useState, useEffect } from 'react';
import { parseCsv } from '../../utils/csvUtils';  
import { Projeto } from '../../types/csvTypes';  

import maize from './maize.png';
import storia from './storia.png';

import './Projetos.css';
// import component1, component2 from '../../components/Projetos/{Component}';

const Projetos: React.FC = () => {
    const [projetos, setProjetos] = useState<Projeto[]>([]); // Dados da tabela Projeto -> Lista de diciionários coluna:valor

    useEffect(() => {
        parseCsv<Projeto>('/data/projeto.csv').then(data => {
            if (data) {
                setProjetos(data);
            }
        });
    }, []);

    console.log(projetos);

    // Projetos.js
    return (
        <div>
            <div className="projetos-container">
                <h1 className="titulo">Explore nossos principais projetos ao longo dos anos.</h1>
                <p className="subtitulo">As criações mais recentes da TAIL.</p>
            </div>
            <div className="image-container">
                <div className="image-content">
                    <img src={maize} alt="Descrição da imagem" />
                </div>
                <div className="text-content">
                    <h2>mAIze</h2>
                    <p>Projeto focado em treinar um agente capaz de encontrar solucoes eficientes para maximizar o numero de queijos coletados e minimizar o numero de passos.</p>
                </div>
                <div className="additional-texts">
                    <div className="additional-text">
                        <p>Aprendizagem de Maquina</p>
                    </div>
                    <div className="additional-text">
                        <p>2021.2</p>
                    </div>
                </div>
            </div>

            <div className="image-container">
                <div className="image-content">
                    <img src={storia} alt="Descrição da imagem" />
                </div>
                <div className="text-content">
                <h2>StorIA</h2>
                    <p>Explore o lado sombrio com StorIA. Uma plataforma de contos de terror colaborativos, aliment ada por LLMs para criar narrativas unicas e arrepiantes.</p>
                </div>
                <div className="additional-texts">
                    <div className="additional-text">
                        <p>Aprendizagem de Maquina</p>
                    </div>
                    <div className="additional-text">
                        <p>2021.2</p>
                    </div>
                </div>
            </div>
        </div>
    );
  
};

export default Projetos;