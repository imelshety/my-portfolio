import styles from "./Footer.module.css";

function Footer() {
  const date = new Date().getFullYear();
 
  return (
    <footer className={styles.footer}>
      <p>
        © {date} Copyright :{" "}
        <a href="https://github.com/imelshety" target="_blank">
          Mohamed Rabie
        </a>
      </p>
    </footer>
  );
}

export default Footer;
