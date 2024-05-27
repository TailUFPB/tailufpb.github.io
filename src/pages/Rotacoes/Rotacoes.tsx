import React, { useState, useEffect } from 'react';
import { DataFrame } from 'data-forge';
import { parseCsv } from '../../utils/csvUtils';
import { Rotacao } from '../../types/csvTypes';

import './Rotacoes.css';
import BackgroundTemplate from '../../components/Background Template/BackgroundTemplate';
import RotacaoButton from '../../components/Rotacoes/RotacaoButton';

const Rotacoes: React.FC = () => {
    const [periodos, setPeriodos] = useState<string[]>([]);

    useEffect(() => {
        parseCsv<Rotacao>('/data/rotacao.csv').then(data => {
            if (data) {
                // Creating a DataFrame from the data
                const df = new DataFrame(data);
                // Extracting unique periods and sorting
                const uniquePeriodos = df.deflate(row => row.periodo_rot)
                                         .distinct()
                                         .toArray()
                                         .sort((a, b) => {
                                             const [yearA, halfA] = a.split('_');
                                             const [yearB, halfB] = b.split('_');

                                             if (Number(yearA) !== Number(yearB)) {
                                                 return Number(yearA) - Number(yearB);
                                             }

                                             return Number(halfA) - Number(halfB);
                                         });
                setPeriodos(uniquePeriodos);
            }
        });
    }, []);

    const transformPeriodo = (periodo: string): string => {
        const [year, half] = periodo.split('_');
        return `20${year}.${half === '1' ? '1' : '2'}`;
    };

    return (
        <div className='rotacoes-page-container'>
            <BackgroundTemplate
                header="Descubra nossa equipe presente em cada fase da TAIL."
                subheader="Veja as mentes por trás de cada rotação."
            />
            <div className='rotacoes-page-content'>
                <h1 className='rotacoes-header'>Escolha uma rotação<span className="dots">:</span></h1>
                <div className='rotacoes-buttons-container'>
                    {periodos.map((periodo, index) => (
                        <RotacaoButton key={index} text={transformPeriodo(periodo)} link={periodo} clickable={true} />
                    ))}
                    <RotacaoButton key="em-breve" text="Em Breve" link={""} clickable={false} />
                </div>
            </div>
        </div>
    );
};

export default Rotacoes;
