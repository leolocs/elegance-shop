import { useState } from "react";

/**
 * Componente SearchBar
 * 
 * Demonstra:
 * - useState para armazenar o texto digitado
 * - onChange para capturar mudanças no input
 * - Formulário controlado (valor vem do estado)
 * 
 * @param {function} onSearch - Função chamada quando a busca muda
 * @param {string} placeholder - Texto de placeholder
 */
function SearchBar({ onSearch, placeholder = "Buscar produtos..." }) {
  // Estado para armazenar o texto digitado
  const [searchTerm, setSearchTerm] = useState("");

  // Função chamada toda vez que o usuário digita
  const handleChange = (event) => {
    // event.target.value contém o texto atual do input
    const value = event.target.value;
    
    // Atualiza o estado local
    setSearchTerm(value);
    
    // Chama a função do componente pai (se existir)
    if (onSearch) {
      onSearch(value);
    }
  };

  // Função para limpar a busca
  const handleClear = () => {
    setSearchTerm("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="search-bar">
      {/* Ícone de busca */}
      <i className="bx bx-search search-icon"></i>
      
      {/* 
        Input controlado:
        - value={searchTerm} = valor vem do estado
        - onChange={handleChange} = atualiza estado quando digita
      */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />
      
      {/* Botão de limpar (só aparece se tiver texto) */}
      {searchTerm && (
        <button className="search-clear" onClick={handleClear}>
          <i className="bx bx-x"></i>
        </button>
      )}
    </div>
  );
}

export default SearchBar;