import React from 'react';
import './PaginaIntroducao.css';
import { Link } from 'react-router-dom';


function PaginaIntroducao() {
  return (
    <div className="intro-container">
      <div className="info">
        <h2><strong>Bem-vindo ao SigmaIA!</strong></h2>
        <p>O SigmaIA é uma plataforma de inteligência artificial para educação, focada em personalizar e aprimorar o aprendizado. Oferecemos assistentes virtuais e tecnologias avançadas para tornar a educação mais eficaz e acessível. Junte-se a nós para transformar o futuro da aprendizagem. Bem-vindo ao SigmaIA.</p>
        <Link to="/login">
          <button className="botao-link" >Ir para tela de login</button>
        </Link>
        {/* <button>Avançar</button> */}
      </div>
      <div className="imagem-container">
        <img src="/Imagens/LogoIntro.png" alt="Imagem de introdução" />
      </div>
    </div>
  );
}

export default PaginaIntroducao;