import './PaginaIntroducao.css';

function PaginaIntroducao() {
    return (
        <div>
            <div className="card" >
            
            <h2>O que é possivel fazer com a plataforma da Sigmaia ?</h2>
            <li>
             Assistente de Estudo Personalizado <br/>
            </li>
           <li>
           Gerador de Exercícios e Questões
             
           </li>

            </div>
            <div className="botao">
             <button onClick={redirectToLogin}>Ir para a tela de login</button>
            </div>
        </div>
        
    );
    
}

function redirectToLogin() {
    // Adicione o redirecionamento para a tela de login
}

export default PaginaIntroducao;