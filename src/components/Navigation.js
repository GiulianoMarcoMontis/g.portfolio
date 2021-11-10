// assets
import menu from '../assets/icons/menu.svg';

const Navigation = () => {
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="/" className="nav__logo">
          Logo
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#design" className="nav__link">
                Design
              </a>
            </li>
            <li className="nav__item">
              <a href="#contacts" className="nav__link">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <img src={menu} alt="nav toggler icon" className="toggler__svg" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
