import styles from "../footer/footer.css";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer}>
        <div className={styles.footer__contact}>
          <p>FlashVocabCards helps you to learn new words easely</p>
          <p className={styles.contact__item}>
            &copy;
            <a
              href="https://github.com/271090"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contact__link}
            >
              2023 Olga Malysheva
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;