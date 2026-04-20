import React from "react";

// Lazy load framer-motion only when needed
const dynamicMotion = {};

export const useFramerMotion = async () => {
  if (!dynamicMotion.motion) {
    dynamicMotion.motion = await import("framer-motion");
  }
  return dynamicMotion.motion;
};

// Lazy-loaded motion components - only loaded when used
export const LazyMotionDiv = React.lazy(() =>
  import("framer-motion").then((m) => ({
    default: m.motion.div,
  })),
);

export const LazyMotionSection = React.lazy(() =>
  import("framer-motion").then((m) => ({
    default: m.motion.section,
  })),
);

export const LazyMotionSpan = React.lazy(() =>
  import("framer-motion").then((m) => ({
    default: m.motion.span,
  })),
);

// Preload framer-motion after page interactive
if (typeof window !== "undefined") {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(
      () => {
        import("framer-motion").catch(() => {});
      },
      { timeout: 3000 },
    );
  } else {
    window.setTimeout(() => {
      import("framer-motion").catch(() => {});
    }, 4000);
  }
}

export default dynamicMotion;
