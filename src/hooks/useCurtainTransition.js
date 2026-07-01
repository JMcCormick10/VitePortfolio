import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import siteConfig from "../data/siteConfig.json";

const TRANSITION_DURATION_MS = siteConfig.transitions.curtainDurationMs;

export const useCurtainTransition = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [curtainPhase, setCurtainPhase] = useState("closed");
  const [revealReady, setRevealReady] = useState(false);
  const transitionTimeoutRef = useRef(null);
  const revealTimeoutRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const pendingPathRef = useRef(null);
  const displayPathRef = useRef(location.pathname);

  const scheduleRevealReady = useCallback(() => {
    window.clearTimeout(revealTimeoutRef.current);
    revealTimeoutRef.current = window.setTimeout(() => {
      setRevealReady(true);
    }, TRANSITION_DURATION_MS);
  }, []);

  useEffect(() => {
    displayPathRef.current = displayLocation.pathname;
  }, [displayLocation]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setCurtainPhase("open");
      scheduleRevealReady();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [scheduleRevealReady]);

  useEffect(() => {
    return () => {
      window.clearTimeout(transitionTimeoutRef.current);
      window.clearTimeout(revealTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === displayPathRef.current) {
      return;
    }

    if (isTransitioningRef.current && pendingPathRef.current === location.pathname) {
      setDisplayLocation(location);
      setCurtainPhase("open");
      scheduleRevealReady();
      pendingPathRef.current = null;
      isTransitioningRef.current = false;
      return;
    }

    isTransitioningRef.current = true;
    setRevealReady(false);
    setCurtainPhase("closed");
    window.clearTimeout(transitionTimeoutRef.current);
    window.clearTimeout(revealTimeoutRef.current);

    transitionTimeoutRef.current = window.setTimeout(() => {
      setDisplayLocation(location);
      setCurtainPhase("open");
      scheduleRevealReady();
      pendingPathRef.current = null;
      isTransitioningRef.current = false;
    }, TRANSITION_DURATION_MS);
  }, [location, scheduleRevealReady]);

  const startNavigation = useCallback((destination) => {
    if (
      destination === displayPathRef.current ||
      destination === pendingPathRef.current ||
      isTransitioningRef.current
    ) {
      return;
    }

    pendingPathRef.current = destination;
    isTransitioningRef.current = true;
    setRevealReady(false);
    setCurtainPhase("closed");
    window.clearTimeout(transitionTimeoutRef.current);
    window.clearTimeout(revealTimeoutRef.current);

    transitionTimeoutRef.current = window.setTimeout(() => {
      navigate(destination);
    }, TRANSITION_DURATION_MS);
  }, [navigate]);

  const closeCurtain = useCallback(() => {
    if (isTransitioningRef.current) {
      return;
    }

    setRevealReady(false);
    setCurtainPhase("closed");
    window.clearTimeout(revealTimeoutRef.current);
  }, []);

  const openCurtain = useCallback(() => {
    if (isTransitioningRef.current) {
      return;
    }

    setCurtainPhase("open");
    scheduleRevealReady();
  }, [scheduleRevealReady]);

  return {
    curtainPhase,
    displayLocation,
    closeCurtain,
    openCurtain,
    revealReady,
    startNavigation,
  };
};
