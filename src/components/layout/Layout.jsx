import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Componente Layout
 * 
 * Este componente demonstra o uso de CHILDREN.
 * Children permite que o conteúdo seja passado entre as tags.
 * 
 * O Layout "envolve" o conteúdo da página, adicionando
 * Navbar no topo e Footer no rodapé.
 * 
 * @param {ReactNode} children - O conteúdo da página
 */
function Layout({ children }) {
  return (
    <div className="layout-elegance">
      {/* Navbar sempre aparece no topo */}
      <Navbar />
      
      {/* 
        O children representa o conteúdo específico de cada página.
        Pode ser a Home, Produtos, Sobre, etc.
      */}
      <main className="main-elegance">
        {children}
      </main>
      
      {/* Footer sempre aparece no rodapé */}
      <Footer />
    </div>
  );
}

export default Layout;