import React, { useState, useEffect } from 'react';
import { parseCsv } from '../../utils/csvUtils';  
import { Membro } from '../../types/csvTypes';  

import './Membros.css';
import BackgroundTemplate from '../../components/Background Template/BackgroundTemplate';
import RotacoesButton from '../../components/RotaçoesButton/RotaçoesButton';

const Membros: React.FC = () => {
    const [membros, setMembros] = useState<Membro[]>([]); // Dados da tabela Membro -> Lista de diciionários coluna:valor

    useEffect(() => {
        parseCsv<Membro>('/data/membro (2).csv').then(data => {
            if (data) {
                setMembros(data);
            }
        });
    }, []);

    return (
        <div className='membros-page-container'>
            <BackgroundTemplate
                header='Conheça nosso time de doutores, mestres e estudantes.'
                subheader='Somos feitos de um grupo diverso.'
            />
            <div className='membros-page-content'>
                <div>
                    <h1 className='membro-header'>Professores</h1>
                </div>
                <div className="circles-professores">
                        {membros.filter(membro => membro.cargo_mem === 'Professor(a)').map((membro) => (
                            <div key={membro.id_mem} className="circle" style={{ backgroundImage: `url(${membro.imagem_mem_url})` }} data-tooltip={membro.nome_mem}></div>
                        ))}
                    </div>
                <div></div>
               
                <div><h1 className='membro-header'>Fundadores</h1>
                </div>
                <div className='page-content-fundadores'>
                    <div className="circles-fundadores">
                    {membros.filter(membro => membro.cargo_mem === 'Fundador').map((membro) => (
                        <div key={membro.id_mem} className="circle" style={{ 
                            backgroundImage: `url(${membro.imagem_mem_url})`}} 
                            data-tooltip={membro.nome_mem}>
                         </div>
                    ))}
                        </div>
                    <div>
                </div>
                
                <h1 className='membro-header'>Presidência</h1>
                </div>
                <div className="circles-presidencia">
                    {membros.filter(membro => membro.cargo_mem === 'Presidente' || membro.cargo_mem === 'Vice presidente' ).map((membro) => (
                        <div key={membro.id_mem} className='circle' style={{ backgroundImage: `url(${membro.imagem_mem_url})` }} data-tooltip={membro.nome_mem}></div>
                    ))}
                </div>
                <div>
                <h1 className='membro-header'>Diretores</h1>
                </div>
                <div className="circles-diretores1">
                   {membros.filter(membro => membro.cargo_mem === 'Diretor').map((membro) => (
                    <div key={membro.id_mem} className='circle' style={{ backgroundImage: `url(${membro.imagem_mem_url})` }} data-tooltip={membro.nome_mem}></div> 
                   ))}
                </div>
                <h2 className='membro-header'>Deseja conhecer o restante da nossa equipe<span className='dots'>?</span></h2>
                <div>
                    <RotacoesButton/>
                </div>
            </div>
        </div>
    );
};
export default Membros;