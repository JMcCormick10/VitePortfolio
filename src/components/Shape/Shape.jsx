import styles from "./Shape.module.css";
import squareImage from "../../assets/images/square.png";
import circleImage from "../../assets/images/circle.svg";
import rectangleImage from "../../assets/images/rectangle.png";
import pyramidImage from "../../assets/images/pyramid.png";
import cylinderImage from "../../assets/images/cylinder.png";
import donutImage from "../../assets/images/donut.png";

const shapeMap = {
  circle: {
    src: circleImage,
    alt: "circle",
    className: styles.shapeCircle,
  },
  square: {
    src: squareImage,
    alt: "square",
    className: styles.shapeSquare,
  },
  rectangle: {
    src: rectangleImage,
    alt: "rectangle",
    className: styles.shapeRectangle,
  },
  pyramid: {
    src: pyramidImage,
    alt: "pyramid",
    className: styles.shapePyramid,
  },
  cylinder: {
    src: cylinderImage,
    alt: "cylinder",
    className: styles.shapeCylinder,
  },
  donut: {
    src: donutImage,
    alt: "donut",
    className: styles.shapeDonut,
  },
};

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const Shape = ({ shape, noanimation }) => {
  const shapeInfo = shapeMap[shape];

  if (!shapeInfo) {
    return null;
  }

  return (
    <img
      className={`shape ${classNames(
        styles.shape,
        shapeInfo.className,
        noanimation && styles.noAnimation,
      )}`}
      src={shapeInfo.src}
      alt={shapeInfo.alt}
    />
  );
};

export default Shape;
