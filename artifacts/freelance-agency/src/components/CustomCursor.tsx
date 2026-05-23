import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Detect touch once — outside component to avoid re-checking
const isTouchDevice =
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Single opacity motion value — no React state, zero re-renders
  const opacity = useMotionValue(0);
  const ringOpacity = useTransform(opacity, [0, 1], [0, 0.45]);

  // Tighter spring = more responsive ring without visual change
  const ringX = useSpring(dotX, { stiffness: 220, damping: 26, mass: 0.4, restDelta: 0.001, restSpeed: 0.001 });
  const ringY = useSpring(dotY, { stiffness: 220, damping: 26, mass: 0.4, restDelta: 0.001, restSpeed: 0.001 });

  useEffect(() => {
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      // Only update opacity once — check avoids redundant motion value writes
      if (opacity.get() === 0) opacity.set(1);
    };

    // passive: true allows browser to skip calling preventDefault, improving scroll perf
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot — direct motion value tracking, no spring lag */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-neutral-900"
        style={{
          width: 8,
          height: 8,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity,
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
      />
      {/* Ring — spring-lagged for premium feel */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-neutral-400/70"
        style={{
          width: 32,
          height: 32,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: ringOpacity,
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
      />
    </>
  );
}
