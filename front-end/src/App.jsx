import React from "react";
import Cabecalho from "./components/header/header";
import Rodape from "./components/footer/footer";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Consulta from './pages/Consulta/consulta';
import Deletar from './pages/Deletar/deletar';
import Home from './pages/Home/home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link style={{ textDecoration: 'none' }} to="/"><Cabecalho /></Link>
        <nav className="navegador">
          <Link className="link" style={{ textDecoration: 'none' }} to="/consulta">CONSULTAR</Link>
          <Link className="link" style={{ textDecoration: 'none' }} to="/deletar">DELETAR</Link>
        </nav>
        <Routes>
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/deletar" element={<Deletar />} />
          <Route path="/" element={<Home />} /> {/* Rota para a página inicial */}
        </Routes>
        <Rodape />
      </div>
    </Router>
  );
}

export default App;