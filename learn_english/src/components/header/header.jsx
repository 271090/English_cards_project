import logo from "../header/logo 2.png";
const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <div className="slogan">
        <a href="/" className="header__item">
        LEARN ENGLISH EASY
          </a>
        </div>
        <div className="header__logo">
          <img src={logo} alt="logo" className="logo" />
      </div>
        <div className="menu">
          <a href="/" className="header__item">
            Home
          </a>
          <a href="/" className="header__item">
            Game
          </a>
          <a href="/" className="header__item">
            Vocabulary
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
