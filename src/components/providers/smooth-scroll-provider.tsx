"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  emitChange,
  getServerSnapshot,
  getSnapshot,
  subscribe,
} from "./helpers/helpers";

let globalLenis: Lenis | null = null;

export function getGlobalLenis(): Lenis | null {
  return globalLenis;
}

export function useLenis(): Lenis | null {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  return typeof snapshot === "function" ? snapshot() : snapshot;
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    globalLenis = lenis;
    emitChange();

    lenis.on("scroll", ScrollTrigger.update);

    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      globalLenis = null;
      emitChange();
    };
  }, []);

  return <>{children}</>;
};
