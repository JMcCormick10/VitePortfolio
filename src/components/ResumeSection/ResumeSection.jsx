import styles from "./ResumeSection.module.css";
import globalStyles from "../../styles/global.module.css";
import ResumeItem from "../ResumeItem/ResumeItem";
const ResumeSection = ({ data }) => {
  return (
    <div className={styles.resumeSection}>
      <h2 className={globalStyles.reveal}>{data.title}</h2>
      <div className={styles.resumeItemRow}>
        {data.items.map((item, index) => (
          <ResumeItem
            key={index}
            item={item}
            number={index + 1}
            type={data.type}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeSection;
