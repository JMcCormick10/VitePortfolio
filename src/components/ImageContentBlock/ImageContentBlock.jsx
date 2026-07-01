import styles from "./ImageContentBlock.module.css";
import globalStyles from "../../styles/global.module.css";
import BubbleButton from "../BubbleButton/BubbleButton";
const ImageContentBlock = ({ data }) => {
  const imageSrc = data.imageSrc
    ? new URL(`../../assets/images/${data.imageSrc}`, import.meta.url).href
    : "";

  return (
    <section className={styles.imageContentBlock}>
      <h2 className={`${globalStyles.reveal} ${globalStyles.revealUp}`}>
        {data.title}
      </h2>
      <div className={`${globalStyles.container} ${styles.container}`}>
        <div
          className={` ${styles.imageContainer} ${globalStyles.reveal} ${globalStyles.revealRight}`}
        >
          {imageSrc ? <img src={imageSrc} alt={data.imageAlt} /> : null}
        </div>
        <div
          className={`${styles.contentContainer} ${globalStyles.reveal} ${globalStyles.revealLeft}`}
        >
          <p>{data.copy}</p>
          <BubbleButton href={data.ctaHref}>{data.ctaText}</BubbleButton>
        </div>
      </div>
    </section>
  );
};

export default ImageContentBlock;
