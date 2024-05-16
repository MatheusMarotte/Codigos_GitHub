import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PaginaLogin.css';

const PaginaLogin = () => {
  const [id, setId] = useState('');
  const [senha, setSenha] = useState('');
  const [exibirSenha, setExibirSenha] = useState(false);

  const handleLogin = () => {
    // Lógica para lidar com o login
    console.log('Fazer login com ID:', id, 'e senha:', senha);
  };

  const toggleExibirSenha = () => {
    setExibirSenha(!exibirSenha);
  };

  return (
    <div>
      <h1>Tela de Login</h1>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          type={exibirSenha ? 'text' : 'password'}
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={toggleExibirSenha}>
          {exibirSenha ? 'Ocultar Senha' : 'Exibir Senha'}
        </button>
      </div>
      <Link to="/DashBoard">
      <button onClick={handleLogin}>Login</button>
      </Link>
      
      <Link to="/cadastro">
        <button>Criar Conta</button>
      </Link>
    </div>
  );
}

export default PaginaLogin;