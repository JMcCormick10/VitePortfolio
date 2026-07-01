import styles from "./MobileMenu.module.css";

const MobileMenu = ({ items, menuOpen, setMenuOpen, startNavigation }) => {
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuNavigation = (destination) => {
    setMenuOpen(false);
    startNavigation(destination);
  };

  return (
    <>
      <nav
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
      >
        {items.map((item) => (
          <button
            key={item.path}
            type="button"
            className={styles.mobileLink}
            onClick={() => handleMenuNavigation(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <button
        type="button"
        className={`${styles.button} ${menuOpen ? styles.menuActive : ""}`}
        onClick={handleMenuToggle}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default MobileMenu;
