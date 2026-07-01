import styles from "./Curtains.module.css";

const Curtains = ({ curtainPhase, hideLockup = false }) => {
  const openClassName = curtainPhase === "open" ? styles.open : "";
  const hiddenLockupClassName = hideLockup ? styles.hiddenLockup : "";

  return (
    <>
      <div
        className={`${styles.curtain} ${styles.leftCurtain} ${openClassName}`}
        aria-hidden="true"
      >
        <div className={`${styles.logoLockup} ${hiddenLockupClassName}`}>
          <span>J</span>
          <span>M</span>
        </div>
      </div>
      <div
        className={`${styles.curtain} ${styles.rightCurtain} ${openClassName}`}
        aria-hidden="true"
      >
        <div className={`${styles.logoLockup} ${hiddenLockupClassName}`}>
          <span>J</span>
          <span>M</span>
        </div>
      </div>
    </>
  );
};

export default Curtains;
