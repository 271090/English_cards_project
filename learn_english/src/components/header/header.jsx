
import styles from "../header/header.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <div className="slogan">
        <a href="/" className={styles.header__item}>
            THE LITTLE GENIUS WORKSHOP
          </a>
        </div>
        <div className={styles.menu}>
          <a href="/" className={styles.header__item}>
            Home
          </a>
          <a href="/" className={styles.header__item}>
            Game
          </a>
          <a href="/" className={styles.header__item}>
            Vocabulary
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
