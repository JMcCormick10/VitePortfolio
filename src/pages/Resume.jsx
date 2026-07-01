import styles from "./Resume.module.css";
import resumeData from "../data/resume.json";
import globalStyles from "../styles/global.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResumeSection from "../components/ResumeSection/ResumeSection";
import Shape from "../components/Shape/Shape";
const Resume = () => {
  return (
    <>
      <section
        className={`${styles.section} ${globalStyles.reveal} ${globalStyles.revealUp}`}
      >
        <Shape shape="donut" noanimation />
        <Shape shape="cylinder" noanimation />
        <Shape shape="pyramid" noanimation />

        <h1>
          <span className={globalStyles.backgroundColor}>
            {resumeData.pageTitle}
          </span>
        </h1>
        <p>{resumeData.description}</p>

        <div>
          <a href="/resume.pdf" download className={styles.downloadResume}>
            {resumeData.resumeCTAText}
            <FontAwesomeIcon
              icon={["fas", "download"]}
              className={styles.icon}
            />
          </a>
        </div>
      </section>
      <section>
        <div className={globalStyles.container}>
          <div className={styles.resumeContainer}>
            {resumeData.sections.map((section) => (
              <ResumeSection key={section.id} data={section} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
