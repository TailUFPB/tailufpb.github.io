import React from 'react';
import './Sobre.css';
import halfLogo from '../../assets/half-logo.png';
import connectLogo from '../../assets/connect-logo.png';
import ideaLogo from '../../assets/idea-logo.png';
import wifiLogo from '../../assets/wifi-logo.png';
import whiteLogo from '../../assets/white-logo.png';

const Sobre: React.FC = () => {
  return (
    <div>
      <div className="top-gradient">
        <div className="sobre-alignment">
          <div className="sobre-title">
              <span>Saiba mais<br /> sobre a TAIL</span>
              <span style={{ color: 'rgba(25,226,254,1)' }}>.</span>
              <img src={halfLogo} alt="Half Logo" className="half-logo" />
          </div>
          <div className="sobre-box">
            <div className="sobre-text">
              <p>
                Nós somos a Liga de Tecnologia e Inteligência Artificial (TAIL), uma
                organização sem fins lucrativos, dirigida por estudantes. Nossa jornada
                começou em 2020, durante a pandemia. 
                <br />
                Estamos localizados em João Pessoa - Paraíba, Brasil, vinculados ao
                laboratório de Aplicações de Inteligência Artificial, ARIA - UFPB.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="distance-separator">
        <div className="distance-block">
          <img src={connectLogo} alt="Connect Logo" className="image-block" />
          <p className="text-block">A TAIL é aberta para o público em geral, <br />
          de todos os cursos.</p>
        </div>
        <div className="separator" />
        <div className="distance-block">
          <img src={ideaLogo} alt="Idea Logo" className="image-block" />
          <p className="text-block">Nós incentivamos fortemente e <br /> promovemos
          pesquisa e inovação <br /> em tecnologia.</p>
        </div>
        <div className="separator" />
        <div className="distance-block">
          <img src={wifiLogo} alt="Wifi Logo" className="image-block" />
          <p className="text-block">A inteligência artificial tem aplicação<br />
          em uma ampla variedade de áreas do<br /> conhecimento.</p>
        </div>
      </div>
      <section className="distance-white-logo">
        <img src={whiteLogo} alt="White Logo" className="white-logo" />         
        <div className="sobre-box" style={{ marginTop: '20px', marginBottom: '50px' }}>
          <p className="sobre-text">Temos como objetivo promover um ambiente para troca
          de conhecimentos em áreas como<br />
          inteligência artificial, ciência de dados, cálculo e estatística, bem como
          estimular e divulgar<br /> estudos científicos, publicações e cursos.</p>
        </div>
      </section>
      <div className="page-gradient" /> {/* degradê que acompanha o scroll, abaixo de todos os elementos */}
    </div>
  );
}

export default Sobre;