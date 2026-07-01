import { useRef } from "react";
import styles from "./BubbleButton.module.css";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const BubbleButton = ({
  children,
  href,
  onClick,
  small = false,
  transparent = false,
  type = "button",
}) => {
  const buttonRef = useRef(null);
  const Element = href ? "a" : "button";
  const buttonClassName = classNames(
    styles.button,
    small && styles.small,
    transparent && styles.transparent,
  );

  const onButtonInteract = (event) => {
    if (!buttonRef.current) {
      return;
    }

    const parentOffset = buttonRef.current.getBoundingClientRect();
    const relX = event.clientX - parentOffset.left;
    const relY = event.clientY - parentOffset.top;
    const span = buttonRef.current.getElementsByClassName(styles.bubble);

    if (!span[0]) {
      return;
    }

    span[0].style.top = `${relY}px`;
    span[0].style.left = `${relX}px`;
  };

  const onButtonFocus = () => {
    if (!buttonRef.current) {
      return;
    }

    const span = buttonRef.current.getElementsByClassName(styles.bubble);

    if (!span[0]) {
      return;
    }

    span[0].style.top = "50%";
    span[0].style.left = "50%";
  };

  if (Element === "a") {
    return (
      <a
        ref={buttonRef}
        className={buttonClassName}
        href={href}
        onFocus={onButtonFocus}
        onMouseEnter={onButtonInteract}
        onMouseMove={onButtonInteract}
      >
        <span className={styles.title}>{children}</span>
        <span className={styles.bubble} aria-hidden="true"></span>
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      className={buttonClassName}
      type={type}
      onClick={onClick}
      onFocus={onButtonFocus}
      onMouseEnter={onButtonInteract}
      onMouseMove={onButtonInteract}
    >
      <span className={styles.title}>{children}</span>
      <span className={styles.bubble} aria-hidden="true"></span>
    </button>
  );
};

export default BubbleButton;
