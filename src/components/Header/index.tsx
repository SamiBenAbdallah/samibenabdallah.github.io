import './styles.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-name">
          Sami
        </div>
        <nav className="header__container-nav">
          <ul className="header__container-navList">
            <li className="header__container-navItem">
              <a href="#" className="header__container-nav-list-item-link">A propos</a>
            </li>
            <li className="header__container-navItem">
              <a href="#" className="header__container-nav-list-item-link">Expériences</a>
            </li>
            <li className="header__container-navItem">
              <a href="#" className="header__container-nav-list-item-link">Projets</a>
            </li>
            <li className="header__container-navItem">
              <a href="#" className="header__container-nav-list-item-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
