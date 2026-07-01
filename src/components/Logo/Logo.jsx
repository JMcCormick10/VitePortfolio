import styles from "./Logo.module.css";
const Logo = (props) => (
  <div className={styles.Logo} onClick={props.clicked}>
    <span>J</span>
    <span>M</span>
  </div>
);

export default Logo;
