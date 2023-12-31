import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import styles from "./SocilIcons.module.css";

function SocialIcons() {
  return (
    <div className={styles.socialIconsContainer}>
      <a
        className={styles.icon}
        href="https://www.linkedin.com/in/mohamed-elshety"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>

      <a
        className={styles.icon}
        href="https://github.com/imelshety"
        target="_blank"
      >
        <FaGithub />
      </a>

      <a
        className={styles.icon}
        href="https://wa.me/01099573873"
        target="_blank"
      >
        <FaWhatsapp />
      </a>

      <a className={styles.icon} href="mailto:elshetydev99@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialIcons;
