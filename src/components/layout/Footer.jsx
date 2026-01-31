/**
 * Componente Footer
 * 
 * Rodapé do site com informações de contato e links.
 */
function Footer() {
    return (
      <footer className="footer-elegance">
        <div className="container">
          {/* Logo */}
          <div className="footer-top">
            <a href="/" className="footer-logo">ELEGANCE</a>
          </div>
  
          {/* Conteúdo do Footer */}
          <div className="footer-content">
            <div className="footer-column">
              <h4>Institucional</h4>
              <ul>
                <li><a href="/sobre">Sobre Nós</a></li>
                <li><a href="/lojas">Nossas Lojas</a></li>
                <li><a href="/trabalhe-conosco">Trabalhe Conosco</a></li>
              </ul>
            </div>
  
            <div className="footer-column">
              <h4>Ajuda</h4>
              <ul>
                <li><a href="/central-ajuda">Central de Ajuda</a></li>
                <li><a href="/como-comprar">Como Comprar</a></li>
                <li><a href="/trocas">Trocas e Devoluções</a></li>
              </ul>
            </div>
  
            <div className="footer-column">
              <h4>Contato</h4>
              <div className="footer-contact-item">
                <i className="bx bx-phone"></i>
                <span>(85) 98410-0173</span>
              </div>
              <div className="footer-contact-item">
                <i className="bx bx-envelope"></i>
                <span>contato@elegance.com.br</span>
              </div>
            </div>
  
            <div className="footer-column">
              <h4>Redes Sociais</h4>
              <div className="footer-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://wa.me/5585984100173" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2026 Elegance. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;