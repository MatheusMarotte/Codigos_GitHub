import React, { useState } from "react";
import openai from 'openai';
import './Ia.css';

const Ia = () => {
    const [messages, setMessages] = useState([
        { text: "Olá! Eu sou o chatbot do CRA. Como posso ajudar você hoje?", sender: "bot" }
    ]);


    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (input.trim() !== "") {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");

            try {
                const gptResponse = await openai.complete({
                    engine: 'text-davinci-004',
                    prompt: input,
                    maxTokens: 500,
                });

                const botResponse = gptResponse.data.choices[0].text.trim();

                setMessages([...messages, { text: botResponse, sender: "bot" }]);
            } catch (error) {
                console.error('Erro:', error);
            }
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Digite sua mensagem..." 
                
            />
            <button className='enviar-ia' onClick={sendMessage}>Enviar</button>
        </div>
    );
}

export default Ia;
