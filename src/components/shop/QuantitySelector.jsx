import { useState } from "react";

/**
 * Componente QuantitySelector
 * 
 * Demonstra:
 * - useState para controlar quantidade
 * - onClick para incrementar/decrementar
 * - Validação de valor mínimo e máximo
 * 
 * @param {number} initial - Quantidade inicial (padrão: 1)
 * @param {number} min - Quantidade mínima (padrão: 1)
 * @param {number} max - Quantidade máxima (padrão: 99)
 * @param {function} onChange - Função chamada quando quantidade muda
 */
function QuantitySelector({ 
  initial = 1, 
  min = 1, 
  max = 99, 
  onChange 
}) {
  // Estado para a quantidade
  const [quantity, setQuantity] = useState(initial);

  // Função para decrementar
  const handleDecrement = () => {
    // Só decrementa se for maior que o mínimo
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      
      // Notifica o componente pai
      if (onChange) {
        onChange(newQuantity);
      }
    }
  };

  // Função para incrementar
  const handleIncrement = () => {
    // Só incrementa se for menor que o máximo
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      
      // Notifica o componente pai
      if (onChange) {
        onChange(newQuantity);
      }
    }
  };

  return (
    <div className="quantity-selector">
      <button 
        className="quantity-btn"
        onClick={handleDecrement}
        disabled={quantity <= min}
        aria-label="Diminuir quantidade"
      >
        <i className="bx bx-minus"></i>
      </button>
      
      <span className="quantity-value">{quantity}</span>
      
      <button 
        className="quantity-btn"
        onClick={handleIncrement}
        disabled={quantity >= max}
        aria-label="Aumentar quantidade"
      >
        <i className="bx bx-plus"></i>
      </button>
    </div>
  );
}

export default QuantitySelector;