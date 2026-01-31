import Layout from "./components/layout/Layout";
import ProductCard from "./components/shop/ProductCard";

/**
 * Componente App
 * 
 * Componente principal da aplicação.
 * Aqui demonstramos:
 * - Uso do Layout com children
 * - Passagem de props para ProductCard
 * - Renderização de listas com map()
 */
function App() {
  // Dados dos produtos (simulando dados de uma API)
  const products = [
    {
      id: 1,
      name: "Vestido Floral",
      price: 189.90,
      oldPrice: 249.90,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
      tag: "Vestidos",
      isNew: true,
      discount: 24,
    },
    {
      id: 2,
      name: "Blusa de Seda",
      price: 129.90,
      image: "https://images.unsplash.com/photo-1564246544814-647f76867e20?w=400&h=600&fit=crop",
      tag: "Blusas",
      isNew: false,
      discount: null,
    },
    {
      id: 3,
      name: "Calça Jeans",
      price: 199.90,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop",
      tag: "Calças",
      isNew: true,
      discount: null,
    },
    {
      id: 4,
      name: "Saia Midi",
      price: 149.90,
      oldPrice: 189.90,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=600&fit=crop",
      tag: "Saias",
      isNew: false,
      discount: 21,
    },
  ];

  return (
    // Layout envolve todo o conteúdo (usando children)
    <Layout>
      {/* Seção de produtos */}
      <section className="section">
        <div className="container">
          {/* Cabeçalho da seção */}
          <div className="section-header">
            <h2 className="section-title">Nossos Produtos</h2>
            <p className="section-subtitle">Confira as novidades da coleção</p>
          </div>

          {/* Grid de produtos */}
          <div className="product-grid">
            {/* 
              Usando map() para renderizar uma lista de produtos.
              Cada item precisa de uma 'key' única.
            */}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
