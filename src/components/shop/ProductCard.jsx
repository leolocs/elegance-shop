/**
 * Componente ProductCard
 * 
 * Demonstra o uso de PROPS para receber dados de um produto.
 * Cada card recebe um objeto 'product' com as informações.
 * 
 * @param {object} product - Objeto com dados do produto
 * @param {string} product.name - Nome do produto
 * @param {number} product.price - Preço atual
 * @param {number} product.oldPrice - Preço antigo (opcional)
 * @param {string} product.image - URL da imagem
 * @param {string} product.tag - Categoria do produto
 * @param {boolean} product.isNew - Se é novidade
 * @param {number} product.discount - Percentual de desconto
 */
function ProductCard({ product }) {
    // Função para formatar preço em Real brasileiro
    const formatPrice = (value) => {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value);
    };
  
    return (
      <div className="product-card">
        {/* Imagem do produto */}
        <div className="product-card-image">
          <img src={product.image} alt={product.name} loading="lazy" />
  
          {/* Tags (Novo, Desconto) */}
          <div className="product-tags">
            {product.isNew && <span className="tag tag-new">Novo</span>}
            {product.discount && (
              <span className="tag tag-discount">-{product.discount}%</span>
            )}
          </div>
  
          {/* Overlay com botões de ação */}
          <div className="product-card-overlay">
            <button className="product-action-btn" aria-label="Adicionar à sacola">
              <i className="bx bx-shopping-bag"></i>
            </button>
            <button className="product-action-btn" aria-label="Favoritar">
              <i className="bx bx-heart"></i>
            </button>
            <button className="product-action-btn" aria-label="Visualização rápida">
              <i className="bx bx-show"></i>
            </button>
          </div>
        </div>
  
        {/* Informações do produto */}
        <div className="product-card-info">
          <span className="product-tag">{product.tag}</span>
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">
            {product.oldPrice && (
              <span className="price-old">{formatPrice(product.oldPrice)}</span>
            )}
            <span className="price-current">{formatPrice(product.price)}</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCard;