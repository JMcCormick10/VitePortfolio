import footerData from "../../data/footer.json";
import globalStyles from "../../styles/global.module.css";
import BubbleButton from "../BubbleButton/BubbleButton";
import Shape from "../Shape/Shape";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={globalStyles.container}>
          <hr className={styles.rule} />
          <div className={styles.topContent}>
            <div className={` ${globalStyles.reveal} ${globalStyles.revealUp}`}>
              <h2>
                {footerData.titlePrefix}{" "}
                <span className={globalStyles.backgroundColor}>
                  {footerData.titleHighlight}
                </span>
                <br />
                {footerData.titleSuffix}
              </h2>
              <p className={styles.description}>{footerData.description}</p>
              <BubbleButton href={footerData.ctaHref} isExternal>
                {footerData.ctaText}
              </BubbleButton>
            </div>
          </div>
          <Shape shape="square" noanimation />
        </div>
      </div>
      <div
        className={`${styles.footerBottom} ${globalStyles.reveal} ${globalStyles.revealUp}`}
      >
        <div className={globalStyles.container}>
          <p className={styles.bottomText}>{footerData.bottomText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
