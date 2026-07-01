import styles from "./ResumeItem.module.css";
import globalStyles from "../../styles/global.module.css";
const ResumeItem = ({ item, number, type }) => {
  const delayValueStyle = (index) => {
    const baseDelay = 0.2; // Base delay in seconds
    const transitionDelay = index * baseDelay; // Increment delay by index
    return { transitionDelay: `${transitionDelay}s` };
  };

  return (
    <div
      className={`${globalStyles.container} ${globalStyles.reveal} ${globalStyles.revealRight} ${styles.resumeItem}`}
      style={delayValueStyle(number)}
    >
      {type === "simple" ? (
        <>
          <h3>{item.title}</h3>
          <div className={styles.tagList}>
            {item.tags.map((tag, index) => (
              <span key={index} className={globalStyles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </>
      ) : (
        <>
          <h3>{item.title}</h3>
          <p>{item.subTitle}</p>
          <span className={globalStyles.tag}>
            {item.startDate} {item.endDate ? `- ${item.endDate}` : ""}
          </span>
          <p>{item.description}</p>
        </>
      )}
    </div>
  );
};

export default ResumeItem;
