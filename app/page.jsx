import { FaDownload } from "react-icons/fa";
import styles from "./page.module.css";
import SocialIcons from "./components/socialIcons/SocialIcons";
import Image from "next/image";

const FILE_ID = "12lw7b63Gv2fMlxs1Fg4MnVEwrP1W8YI";

function HomePage() {
  return (
    <main className={`${styles.homeContainer}`}>
      <div className={`${styles.imgBackground}`}>
        <div className={styles.shape}></div>
        <div className={styles.imageBox}>
          <Image
            className={styles.personalImage}
            src="/assests/logo/logo.jpg"
            alt="personal image"
            width={350}
            height={500}
          />
        </div>
      </div>
      <div className={styles.homeTextContainer}>
        <h1 className={styles.primaryHeading}>
          Hi, <span>I'm Mohamed Rabie. </span>
        </h1>
        <p className={styles.typing}></p>
        <SocialIcons />

        <div className={styles.buttonBox}>
          <a
            href={`https://drive.google.com/uc?id=${FILE_ID}-&export=download`}
            rel="noreferrer"
            download
            target="_self"
            className={styles.button}
          >
            <span className={styles.buttonTxt}>Download CV</span>
            <span className={styles.buttonIcon}>
              <FaDownload />
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
export default HomePage;
