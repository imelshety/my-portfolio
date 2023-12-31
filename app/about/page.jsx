import styles from "./page.module.css";
import PageHeading from "../components/pageHeading/PageHeading";
import ExperienceList from "./components/experienceList/ExperienceList";
import SkillsList from "./components/skillsList/SkillsList";

function AboutPage() {
  return (
    <main className="container">
      <PageHeading secondaryTitle="My states" primaryTitle={`ABOUT ME`} />

      <div className={styles.boxes}>
        <div className={styles.box}>
          <h2 className={styles.aboutBoxTitle}>Who am I ? </h2>
          <p>
            i'm a Frontend Developer with hands-on experience in React and
            Next.js, seeking to further enhance my skills and contribute to
            cutting-edge web projects. Dedicated to delivering high-quality,
            responsive web applications, I am eager to work alongside
            experienced professionals to accelerate my career growth in frontend
            development.
          </p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.aboutBoxTitle}>Education :</h2>
          <p>
            I graduated with a Bachelor’s degree in Computer Science and
            Mathematics with a grade of 'Good' from the Faculty of Science at
            Menoufia University, Egypt, in 2021.{" "}
          </p>
        </div>

        <div className={styles.box}>
          <h2 className={styles.aboutBoxTitle}>Experience :</h2>
          <ExperienceList />
        </div>

        <div className={styles.box}>
          <h2 className={styles.aboutBoxTitle}>Certificates :</h2>
          <p>1&#41; Route certified Frontend Web Developer</p>
          <p>
            2&#41; Udemy certified The Ultimate React Course 2023: React, Redux
            & More
          </p>
          
        </div>
      </div>

      <div className={styles.skillBox}>
        <h2 className={styles.aboutBoxTitle}>My Skills</h2>
        <SkillsList />
      </div>
    </main>
  );
}
export default AboutPage;
