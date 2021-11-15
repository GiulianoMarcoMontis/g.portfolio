import { useState } from 'react';

// assets
import menu from '../assets/icons/menu.svg';
import scrollTop from '../assets/icons/scrollUp.svg';

const Navigation = () => {
  //// states
  // state to open and close the menu
  const [isOpen, setIsOpen] = useState(false);

  //// handlers
  // handler to open and close the menu
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="/" className="nav__logo">
          Logo
        </a>
        <div className={`nav__menu ${isOpen && 'show-menu'}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item" onClick={() => toggleHandler()}>
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item" onClick={() => toggleHandler()}>
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item" onClick={() => toggleHandler()}>
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>
            <li className="nav__item" onClick={() => toggleHandler()}>
              <a href="#design" className="nav__link">
                Design
              </a>
            </li>
            <li className="nav__item " onClick={() => toggleHandler()}>
              <a href="#contacts" className="nav__link">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`nav__toggle`}
          id="nav-toggle"
          onClick={() => toggleHandler()}
        >
          <img src={menu} alt="nav toggler icon" className="toggler__svg" />
        </div>
      </nav>
      <a href="/" className="scrollTop" id="scroll-top">
        <img
          src={scrollTop}
          alt="scroll to the top icon"
          className="scrollTop__icon"
        />
      </a>
    </header>
  );
};

export default Navigation;
