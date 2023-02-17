import Logo from "../Header/logo1.png";

const Header = () => {
return (
<header className="header">
  <div className="header__logo">
    <img src={Logo} alt="logo" className="logo" />
  </div>
  <nav className="menu">
    <ul className="menuList">
      <li className="menuItem">Home</li>
      <li className="menuItem">GAME</li>
      <li className="menuItem">VOCABULARY</li>
    </ul>
  </nav>
</header>
);
};

export default Header;