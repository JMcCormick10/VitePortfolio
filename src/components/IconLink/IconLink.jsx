import styles from "./IconLink.module.css";
const IconLink = ({ children, url }) => {
  return (
    <a
      href={url}
      className={styles.iconLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default IconLink;
