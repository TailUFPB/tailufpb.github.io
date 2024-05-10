import React, { useState, useEffect } from 'react';
import { parseCsv } from '../../utils/csvUtils';  
import { Projeto } from '../../types/csvTypes';  

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

    return (
        <div>
            <h1 className='class-name'>Projetos</h1>
            {/* Add your content here */}
        </div>
    );
};

export default Projetos;