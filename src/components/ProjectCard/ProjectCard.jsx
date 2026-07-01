import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import globalStyles from "../../styles/global.module.css";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const imageContainerRef = useRef(null);
  const timeoutRef = useRef(null);
  const [notificationActive, setNotificationActive] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const { description, imageAlt, imagePath, link, title } = project;

  const imageSrc = imagePath
    ? new URL(`../../assets/images/${imagePath}`, import.meta.url).href
    : "";

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  const onImageContainerClick = async () => {
    if (!link) {
      setNotificationMessage("No link available");
      setNotificationActive(true);
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setNotificationActive(false);
      }, 3000);
      return;
    }

    try {
      await navigator.clipboard.writeText(link);
      setNotificationMessage("Link copied");
    } catch {
      setNotificationMessage("Unable to copy");
    }

    setNotificationActive(true);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setNotificationActive(false);
    }, 3000);
  };

  const onImageContainerInteract = (event) => {
    if (!imageContainerRef.current) {
      return;
    }

    const parentOffset = imageContainerRef.current.getBoundingClientRect();
    const relX = event.clientX - parentOffset.left;
    const relY = event.clientY - parentOffset.top;
    const overlay = imageContainerRef.current.getElementsByClassName(
      styles.previewOverlay,
    );

    if (!overlay[0]) {
      return;
    }

    overlay[0].style.top = `${relY}px`;
    overlay[0].style.left = `${relX}px`;
  };

  return (
    <div className={styles.projectCard}>
      {notificationActive ? (
        <div className={styles.notification}>{notificationMessage}</div>
      ) : null}
      <div className={`${globalStyles.reveal} ${globalStyles.revealUp}`}>
        <button
          type="button"
          onClick={onImageContainerClick}
          className={styles.imageContainer}
          ref={imageContainerRef}
          onMouseEnter={onImageContainerInteract}
          onMouseMove={onImageContainerInteract}
          aria-label={link ? `Copy link for ${title}` : `No link available for ${title}`}
        >
          {imageSrc ? <img src={imageSrc} alt={imageAlt} /> : null}
          <div className={styles.previewOverlay}></div>
          <div className={styles.previewOverlayContent}>
            <FontAwesomeIcon icon={faEye} />
            <p className={styles.previewOverlayText}>Copy Link</p>
          </div>
        </button>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.mobileButtonRow}></div>
      </div>
    </div>
  );
};

export default ProjectCard;
