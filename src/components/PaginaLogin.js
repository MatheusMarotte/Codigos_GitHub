import React from 'react';
import './PaginaLogin.css';

function PaginaLogin() {
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const username = event.target['login-username'].value;
    const password = event.target['login-password'].value;
    console.log(`Login attempt with Username: ${username} and Password: ${password}`);
    // Aqui você pode adicionar a lógica de autenticação
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const name = event.target['register-name'].value;
    const username = event.target['register-username'].value;
    const password = event.target['register-password'].value;
    console.log(`Register attempt with Name: ${name}, Username: ${username}, and Password: ${password}`);
    // Aqui você pode adicionar a lógica de registro
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="nome">Sigma.IA</h1>
        <h1>Faça seu login!</h1>
        <h2>ou faça seu cadastro conosco</h2>
      </div>
      <div className="form-container">
        <div className="login-container">
          <h3>Login</h3>
          <form id="login-form" onSubmit={handleLoginSubmit}>
            <label htmlFor="login-username">Usuário:</label>
            <input type="text" id="login-username" name="login-username" required />
            <label htmlFor="login-password">Senha:</label>
            <input type="password" id="login-password" name="login-password" required />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="register-container">
          <h3>Cadastro</h3>
          <form id="register-form" onSubmit={handleRegisterSubmit}>
            <label htmlFor="register-name">Nome:</label>
            <input type="text" id="register-name" name="register-name" required />
            <label htmlFor="register-username">Usuário:</label>
            <input type="text" id="register-username" name="register-username" required />
            <label htmlFor="register-password">Senha:</label>
            <input type="password" id="register-password" name="register-password" required />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}



export default PaginaLogin;