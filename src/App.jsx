import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useCurtainTransition } from "./hooks/useCurtainTransition";
import { useReveal } from "./hooks/useReveal";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import styles from "./App.module.css";
import globalStyles from "./styles/global.module.css";

function AppShell() {
  const {
    closeCurtain,
    curtainPhase,
    displayLocation,
    openCurtain,
    revealReady,
    startNavigation,
  } = useCurtainTransition();

  useReveal({
    revealClass: globalStyles.reveal,
    revealedClass: globalStyles.revealed,
    revealOnceClass: globalStyles.revealOnce,
    enabled: revealReady,
  });

  return (
    <div className={styles.app}>
      <Header
        closeCurtain={closeCurtain}
        curtainPhase={curtainPhase}
        openCurtain={openCurtain}
        startNavigation={startNavigation}
      />
      <main className={styles.main}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
