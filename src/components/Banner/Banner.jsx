import globalStyles from "../../styles/global.module.css";
import styles from "./Banner.module.css";
import BubbleButton from "../BubbleButton/BubbleButton";
import Shape from "../Shape/Shape";
const Banner = ({ data }) => {
  const styleHeading = (text) => {
    // make "developer" have a span tag with class backgroundColor from globalStyles
    //give that word some extra spacing in a style tag

    const words = text.split(" ");
    return words.map((word, index) => {
      if (word.toLowerCase() === "developer") {
        return (
          <span
            key={index}
            style={{ margin: "0 10px" }}
            className={globalStyles.backgroundColor}
          >
            {word}
          </span>
        );
      }
      return word + " ";
    });
  };

  return (
    <section className={styles.banner}>
      <div className={`${globalStyles.container} ${styles.textContainer}`}>
        <h2 className={`${globalStyles.reveal} ${globalStyles.revealUp}`}>
          {data.label}
        </h2>
        <h1 className={`${globalStyles.reveal} ${globalStyles.revealUp}`}>
          {styleHeading(data.title)}
        </h1>
        <p
          className={`${globalStyles.reveal} ${globalStyles.revealUp} ${globalStyles.delay2}`}
        >
          {data.text}
        </p>
        <div
          className={`${globalStyles.reveal} ${globalStyles.revealUp} ${globalStyles.delay4}`}
        >
          <BubbleButton
            className={`${globalStyles.reveal} ${globalStyles.revealUp} ${globalStyles.delay4}`}
            href={data.buttonLink}
          >
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
