import { useState } from "react";

/**
 * Componente CategoryFilter
 * 
 * Demonstra:
 * - useState para controlar categoria ativa
 * - onClick para mudar categoria
 * - Classes condicionais para indicar item ativo
 * 
 * @param {array} categories - Lista de categorias
 * @param {function} onFilter - Função chamada ao selecionar categoria
 */
function CategoryFilter({ categories, onFilter }) {
  // Estado para categoria selecionada
  // null significa "Todos"
  const [activeCategory, setActiveCategory] = useState(null);

  // Função para selecionar categoria
  const handleSelect = (category) => {
    setActiveCategory(category);
    
    // Notifica o componente pai
    if (onFilter) {
      onFilter(category);
    }
  };

  return (
    <div className="category-filter">
      {/* Botão "Todos" */}
      <button
        className={`category-btn ${activeCategory === null ? "active" : ""}`}
        onClick={() => handleSelect(null)}
      >
        Todos
      </button>
      
      {/* Botões de cada categoria */}
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${activeCategory === category ? "active" : ""}`}
          onClick={() => handleSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;