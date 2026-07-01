import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import globalStyles from "../../styles/global.module.css";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import IconLink from "../IconLink/IconLink";
import MobileMenu from "../MobileMenu/MobileMenu";
import Curtains from "../Curtains/Curtains";

const Header = ({
  curtainPhase,
  closeCurtain,
  openCurtain,
  startNavigation,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      closeCurtain();
      return;
    }

    openCurtain();
  }, [closeCurtain, menuOpen, openCurtain]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasShadow(currentScrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    setMenuOpen(false);
    startNavigation("/");
  };

  return (
    <>
      <header className={`${styles.header} ${hasShadow ? styles.headerShadow : ""}`}>
        <div className={`${globalStyles.container} ${styles.container}`}>
          <Logo clicked={handleLogoClick} />
          <div className={styles.socialLinks}>
            <IconLink url="https://www.linkedin.com/in/josh-mccormick-bb2561b5">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </IconLink>
            <IconLink url="https://github.com/JMcCormick10">
              <FontAwesomeIcon icon={faGithub} />
            </IconLink>
          </div>
          <MobileMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            startNavigation={startNavigation}
          />
        </div>
      </header>
      <Curtains curtainPhase={curtainPhase} hideLockup={menuOpen} />
    </>
  );
};

export default Header;
