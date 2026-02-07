/**
 * Componente Navbar
 * 
 * Barra de navegação do site.
 * Nesta etapa, é um componente simples sem estado.
 */
function Navbar() {
    return (
      <nav className="navbar-elegance">
        <div className="navbar-container"> 
          {/* Logo */}
          <a href="/" className="navbar-logo">
            ELEGANCE
          </a>
  
          {/* Menu de navegação */}
          <div className="navbar-menu-wrapper">
            <ul className="navbar-menu">
              <li><a href="/">Início</a></li>
              <li><a href="/novidades">Novidades</a></li>
              <li><a href="/vestidos">Vestidos</a></li>
              <li><a href="/blusas">Blusas</a></li>
              <li><a href="/calcas">Calças</a></li>
              <li><a href="/acessorios">Acessórios</a></li>
            </ul>
          </div>
  
          {/* Ícones */}
          <div className="navbar-icons">
            <button className="navbar-icon-btn" aria-label="Sacola">
              <i className="bx bx-shopping-bag"></i>
            </button>
            <button className="navbar-icon-btn" aria-label="Minha conta">
              <i className="bx bx-user"></i>
            </button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;