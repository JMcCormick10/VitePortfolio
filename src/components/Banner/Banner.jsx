import globalStyles from "../../styles/global.module.css";
import styles from "./Banner.module.css";
import BubbleButton from "../BubbleButton/BubbleButton";
import Shape from "../Shape/Shape";

const Banner = ({ data }) => {
  return (
    <section className={styles.banner}>
      <div className={`${globalStyles.container} ${styles.textContainer}`}>
        <h2 className={`${globalStyles.reveal} ${globalStyles.revealUp}`}>
          {data.label}
        </h2>
        <h1 className={`${globalStyles.reveal} ${globalStyles.revealUp}`}>
          {data.titlePrefix}{" "}
          <span className={globalStyles.backgroundColor}>
            {data.titleHighlight}
          </span>{" "}
          {data.titleSuffix}
        </h1>
        <p
          className={`${globalStyles.reveal} ${globalStyles.revealUp} ${globalStyles.delay2}`}
        >
          {data.text}
        </p>
        <div
          className={`${globalStyles.reveal} ${globalStyles.revealUp} ${globalStyles.delay4}`}
        >
          <BubbleButton href={data.buttonLink} isExternal>
            {data.buttonText}
          </BubbleButton>
        </div>
      </div>
      <Shape shape="circle" />
      <Shape shape="square" />
      <Shape shape="rectangle" />
    </section>
  );
};

export default Banner;
