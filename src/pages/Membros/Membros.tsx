import React, { useState, useEffect } from 'react';
import { parseCsv } from '../../utils/csvUtils';  
import { Membro } from '../../types/csvTypes';  
// import component1, component2 from '../../components/Membros/{Component}';

const Membros: React.FC = () => {
    const [membros, setMembros] = useState<Membro[]>([]); // Dados da tabela Membro -> Lista de diciionários coluna:valor

    useEffect(() => {
        parseCsv<Membro>('/data/membro.csv').then(data => {
            if (data) {
                setMembros(data);
            }
        });
    }, []);

    console.log(membros);

    return (
        <div>
            <h1>Membros Page</h1>
            {/* Add your content here */}
        </div>
    );
};

export default Membros;