/**
 * Componente Button
 * 
 * Este componente demonstra o uso de PROPS.
 * Props são a forma de passar dados para um componente.
 * 
 * @param {string} children - O texto ou conteúdo do botão
 * @param {string} variant - O estilo do botão: 'primary', 'outline', 'white'
 * @param {string} size - O tamanho: 'sm', 'md', 'lg'
 * @param {boolean} fullWidth - Se o botão ocupa 100% da largura
 * @param {function} onClick - Função executada ao clicar
 */
export default function Button({ 
    children, 
    variant = "primary", 
    size = "md",
    fullWidth = false,
    onClick 
  }) {
    // Construindo as classes CSS baseadas nas props
    const classes = `btn btn-${variant} btn-${size} ${fullWidth ? "btn-full" : ""}`;
  
    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }
  