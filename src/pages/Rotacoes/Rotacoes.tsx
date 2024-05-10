import React, { useState, useEffect } from 'react';
import { parseCsv } from '../../utils/csvUtils';  
import { Rotacao } from '../../types/csvTypes';  

// import component1, component2 from '../../components/Rotacoes/{Component}';

const Rotacoes: React.FC = () => {
    const [periodos, setPeriodos] = useState<string[]>([]); // Lista de periodos unicos
    const [allData, setAllData] = useState<Rotacao[]>([]);  // Todos os dados da tabela Rotacao

    useEffect(() => {
        parseCsv<Rotacao>('/data/rotacao.csv').then(data => {
            if (data) {
                setAllData(data);
            }
        });
    }, []);

    useEffect(() => {
        if (allData.length > 0) {
            const uniquePeriodos = Array.from(new Set(allData.map(item => item.periodo_rot)));
            setPeriodos(uniquePeriodos);
        }
    }, [allData]);  

    console.log(periodos);

    return (
        <div>
            <h1>Rotacoes Page</h1>
        </div>
    );
};

export default Rotacoes;
