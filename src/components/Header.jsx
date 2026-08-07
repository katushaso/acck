import "./Header.css";
function Header() {
    return (
      <header className="header">
        <div className="container header__inner">
  
          <div className="logo">
            АССК России
          </div>
  
          <nav>
            <a href="#constructor">
              Конструктор
            </a>
  
            <a href="#checklist">
              Чек-лист
            </a>
  
            <a href="#metrics">
              Метрики
            </a>
          </nav>
  
        </div>
      </header>
    );
  }
  
  export default Header;