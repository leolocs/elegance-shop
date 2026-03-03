import { useState } from "react";

/**
 * Componente Newsletter
 * 
 * Demonstra:
 * - Formulário controlado completo
 * - Múltiplos estados
 * - Validação básica
 * - Evento onSubmit
 */
function Newsletter() {
  // Estados do formulário
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  // Função de validação de email
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (event) => {
    // Previne o comportamento padrão (recarregar página)
    event.preventDefault();

    // Validação
    if (!email) {
      setStatus("error");
      setMessage("Por favor, digite seu e-mail.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Por favor, digite um e-mail válido.");
      return;
    }

    // Simula envio (em produção, seria uma chamada à API)
    setStatus("loading");
    
    // Simula delay de rede
    setTimeout(() => {
      setStatus("success");
      setMessage("E-mail cadastrado com sucesso!");
      setEmail(""); // Limpa o campo
      
      // Reseta após 3 segundos
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    }, 1000);
  };

  return (
    <div className="newsletter">
      <h3>Receba Novidades</h3>
      <p>Cadastre-se e receba ofertas exclusivas</p>
      
      {/* 
        Formulário com onSubmit
        O onSubmit é chamado ao pressionar Enter ou clicar no botão
      */}
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          disabled={status === "loading"}
        />
        <button 
          type="submit" 
          disabled={status === "loading"}
        >
          {status === "loading" ? "Enviando..." : "Cadastrar"}
        </button>
      </form>
      
      {/* Mensagem de feedback */}
      {message && (
        <p className={`newsletter-message ${status}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Newsletter;