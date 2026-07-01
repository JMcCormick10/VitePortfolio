import styles from "./IconLink.module.css";
import globalStyles from "../../styles/global.module.css";

const IconLink = ({ children, label, url }) => {
  return (
    <a
      href={url}
      className={styles.iconLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className={globalStyles.srOnly}>{label}</span>
    </a>
  );
};

export default IconLink;
