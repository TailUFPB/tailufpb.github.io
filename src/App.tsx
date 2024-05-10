import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';

import Sobre from './pages/Sobre/Sobre';
import Rotacoes from './pages/Rotacoes/Rotacoes';
import RotacaoTemplate from './pages/RotacaoTemplate/RotacaoTemplate';
import Membros from './pages/Membros/Membros';
import Projetos from './pages/Projetos/Projetos';
import Contato from './pages/Contato/Contato';
import NavBar from './components/Shared/NavBar';
import Footer from './components/Shared/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/rotacoes" element={<Rotacoes />} />
          <Route path="/rotacoes/:id" element={<RotacaoTemplate />} />
          <Route path="/membros" element={<Membros />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
